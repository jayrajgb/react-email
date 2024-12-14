"use client";
import styles from "./page.module.css";

export default function Home() {
  const sendMail = async () => {
    console.log("Sending mail");

    // Example data to pass to the server
    const payload = {
      userFirstName: "Jayraj Borate",
      loginDate: new Date().toISOString(), // current date/time
      userMessage: "Hello, I am Jayraj Borate. I would prefer to have guidance regarding your service.",
      userEmail: "jayrajgb11@gmail.com",
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), // Send payload in the request body
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Email sent successfully:", data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className={styles.page}>
      <button onClick={sendMail}>Send Email</button>
    </div>
  );
}
