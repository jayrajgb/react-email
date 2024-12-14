import { Resend } from "resend";
import YelpRecentLoginEmail from "../../../../components/email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Parse the incoming request body
    const { userFirstName, loginDate, userMessage, userEmail } = await req.json();

    // Check if all required fields are present
    if (!userFirstName || !loginDate || !userMessage || !userEmail) {
      return Response.json(
        { error: "Missing required fields in the request payload" },
        { status: 400 }
      );
    }

    // Convert loginDate back to a Date object (if needed)
    const formattedLoginDate = new Date(loginDate);

    // Generate the email content using the React component
    const emailContent = YelpRecentLoginEmail({
      userFirstName,
      loginDate: formattedLoginDate,
      userMessage,
      userEmail,
    });

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: "MySuryaprabha <onboarding@resend.dev>",
      to: ["jayrajgborate11@gmail.com"], // Send to the userEmail provided in the payload
      subject: "New Connection Request",
      react: emailContent, // Pass the generated React component
    });

    // Handle errors from Resend
    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    // Respond with the email service's response
    return Response.json(data);
  } catch (error) {
    console.error("Error in POST handler:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
