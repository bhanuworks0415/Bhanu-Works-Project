import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Local file backup path (persists in the project folder for local development)
const backupFilePath = path.join(process.cwd(), "leads-backup.json");

async function saveLocalBackup(leadData: any) {
  try {
    let leads = [];
    try {
      const fileData = await fs.readFile(backupFilePath, "utf8");
      leads = JSON.parse(fileData);
    } catch (e) {
      // File doesn't exist or is empty
    }
    leads.push({
      ...leadData,
      id: Date.now(),
      created_at: new Date().toISOString(),
    });
    await fs.writeFile(backupFilePath, JSON.stringify(leads, null, 2), "utf8");
    console.log("[BhanuWorks Lead Dispatcher] Saved to local JSON backup successfully.");
  } catch (error) {
    console.error("[BhanuWorks Lead Dispatcher] Local file backup failed:", error);
  }
}

async function isDuplicateSubmission(email: string, message: string): Promise<boolean> {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey || !email || !message) return false;

  try {
    // Check if matching submission exists within the last 5 minutes
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
    const queryUrl = `${supabaseUrl}/rest/v1/leads?email=eq.${encodeURIComponent(email)}&message=eq.${encodeURIComponent(message)}&created_at=gt.${fiveMinutesAgo}`;
    
    const response = await fetch(queryUrl, {
      method: "GET",
      headers: {
        "apikey": supabaseKey,
        "Authorization": `Bearer ${supabaseKey}`
      }
    });

    if (response.ok) {
      const data = await response.json();
      return data.length > 0;
    }
  } catch (error) {
    console.error("[BhanuWorks Lead Dispatcher] Duplicate check failed:", error);
  }
  return false;
}

async function saveToSupabase(leadData: any) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.log("[BhanuWorks Lead Dispatcher] Supabase credentials not configured. Skipping Supabase database save.");
    return false;
  }

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": supabaseKey,
        "Authorization": `Bearer ${supabaseKey}`,
        "Prefer": "return=minimal"
      },
      body: JSON.stringify({
        name: leadData.name,
        email: leadData.email,
        phone: leadData.phone || null,
        business: leadData.business || null,
        project_type: leadData.projectType || null,
        industry: leadData.industry || null,
        timeline: leadData.timeline || null,
        budget: leadData.budget || null,
        message: leadData.message || null
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("[BhanuWorks Lead Dispatcher] Supabase Insert Error:", errText);
      return false;
    }
    
    console.log("[BhanuWorks Lead Dispatcher] Successfully saved lead to Supabase database.");
    return true;
  } catch (error) {
    console.error("[BhanuWorks Lead Dispatcher] Supabase save failed:", error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, business, message, projectType, industry, timeline, budget } = body;

    // 1. Validation
    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required fields." }, { status: 400 });
    }

    // 2. Prevent duplicate spam submissions within 5 minutes
    const duplicate = await isDuplicateSubmission(email, message || "");
    if (duplicate) {
      console.log(`[BhanuWorks Lead Dispatcher] Duplicate submission detected for ${email}. Ignoring.`);
      return NextResponse.json({ success: true, message: "Duplicate submission ignored." });
    }

    // 3. Save local file backup (failsafe - local development only)
    if (process.env.NODE_ENV === "development") {
      await saveLocalBackup(body);
    }

    // 4. Save to Supabase (Primary storage)
    const dbSaved = await saveToSupabase(body);

    // 5. Email notification via Resend API (secondary notification)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const fromEmail = "onboarding@resend.dev";
      const submittedTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }) + " (IST)";
      
      const emailPayload = {
        from: `BhanuWorks Studio <${fromEmail}>`,
        to: "bhanuworks0415@gmail.com",
        subject: `🚀 New Consultation Request - BhanuWorks`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; line-height: 1.6; color: #111;">
            <h2 style="color: #246B3A; border-bottom: 2px solid #EAEAE9; padding-bottom: 8px;">New Scoping Request</h2>
            
            <p>You received a new project scoping submission from the BhanuWorks website:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr style="background: #F4F4F3;">
                <td style="padding: 8px; font-weight: bold; width: 150px;">Full Name</td>
                <td style="padding: 8px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold;">Email Address</td>
                <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr style="background: #F4F4F3;">
                <td style="padding: 8px; font-weight: bold;">Phone Number</td>
                <td style="padding: 8px;">${phone || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold;">Business Name</td>
                <td style="padding: 8px;">${business || "N/A"}</td>
              </tr>
              <tr style="background: #F4F4F3;">
                <td style="padding: 8px; font-weight: bold;">Project Type</td>
                <td style="padding: 8px; text-transform: capitalize;">${projectType || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold;">Industry</td>
                <td style="padding: 8px; text-transform: capitalize;">${industry || "N/A"}</td>
              </tr>
              <tr style="background: #F4F4F3;">
                <td style="padding: 8px; font-weight: bold;">Timeline</td>
                <td style="padding: 8px; text-transform: capitalize;">${timeline || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold;">Budget Bracket</td>
                <td style="padding: 8px;">${budget || "N/A"}</td>
              </tr>
              <tr style="background: #F4F4F3;">
                <td style="padding: 8px; font-weight: bold;">Submitted Time</td>
                <td style="padding: 8px;">${submittedTime}</td>
              </tr>
            </table>

            <h3 style="color: #246B3A; margin-top: 24px;">Project Details / Message:</h3>
            <div style="background: #F4F4F3; padding: 15px; border-radius: 8px; border: 1px solid #E2E2E3; white-space: pre-wrap;">${message || "No description provided."}</div>
            
            <p style="margin-top: 30px; font-size: 11px; color: #666; border-top: 1px solid #EAEAE9; padding-top: 15px;">
              Sent from the BhanuWorks production server.
            </p>
          </div>
        `,
      };

      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify(emailPayload),
        });

        if (!response.ok) {
          const errText = await response.text();
          console.error("[BhanuWorks Lead Dispatcher] Resend API Error:", errText);
        } else {
          console.log("[BhanuWorks Lead Dispatcher] Email notification sent successfully to bhanuworks0415@gmail.com");
        }
      } catch (err) {
        console.error("[BhanuWorks Lead Dispatcher] Resend fetch failed:", err);
      }
    } else {
      console.warn("[BhanuWorks Lead Dispatcher] RESEND_API_KEY environment variable is not defined. Email dispatch was skipped.");
    }

    // Success response - as long as database write is complete OR email went through, we return true.
    // If Supabase credentials are set but saving fails, throw error unless email went through.
    if (!dbSaved && process.env.SUPABASE_URL) {
      return NextResponse.json({ error: "Failed to store submission in database." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("[BhanuWorks Lead Dispatcher] Request failure:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
