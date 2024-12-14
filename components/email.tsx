
import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";

  interface YelpRecentLoginEmailProps {
    userFirstName?: string;
    loginDate?: Date;
    userMessage?: string;
    userEmail?: string;
  }
  
  export const YelpRecentLoginEmail = ({
    userFirstName,
    loginDate,
    userMessage,
    userEmail,
  }: YelpRecentLoginEmailProps) => {
    const formattedDate = new Intl.DateTimeFormat("en", {
      dateStyle: "long",
      timeStyle: "short",
    }).format(loginDate);
  
    return (
      <Html>
        <Head />
        <Preview>New Contact Information - Suryaprabha Electricals</Preview>
        <Body style={main}>
          <Container>  
            <Section style={content}>
              <Row>
                <Img
                style={image}
                width={600}
                src={"https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gmail_powered_by_ai_hero.width-1200.format-webp.webp"}
                />
              </Row>
  
              <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                <Column>
                  <Heading
                    style={{
                      fontSize: 28,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Hi Ganesh Borate,
                  </Heading>
                  <Heading
                    as="h2"
                    style={{
                      fontSize: 24,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    A new contact has visited the website and needs to connect.
                  </Heading>
  
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Email: </b>
                    {userEmail}
                  </Text>

                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Name: </b>
                    {userFirstName}
                  </Text>

                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Message: </b>
                    {userMessage}
                  </Text>
                    
                  <Text style={paragraph}>
                    <b>Time: </b>
                    {formattedDate}
                  </Text>

                  <Text style={paragraph}>
                    {`We noticed a new user, ${userFirstName}, contacting you through your website.`}
                  </Text>

                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Suryaprabha Electricals</b>
                  </Text>

                </Column>
              </Row>
              <Row style={{ ...boxInfos, paddingTop: "2"}}>
                <div style={{ textAlign: "center", width: "100%" }}>
                  <Button href="https://www.google.com" target="_blank" style={button}>Visit Website</Button>
                </div>
              </Row>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  };
  
  // YelpRecentLoginEmail.PreviewProps = {
  //   userFirstName: "Alan",
  //   loginDate: new Date("September 7, 2022, 10:58 am"),
  //   userMessage: "Chrome on Mac OS X",
  //   userEmail: "Upland, California, United States",
  //   loginIp: "47.149.53.167",
  // } as YelpRecentLoginEmailProps;
  
  export default YelpRecentLoginEmail;
  
  const main = {
    backgroundColor: "#fff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const paragraph = {
    fontSize: 16,
  };
  
  const logo = {
    padding: "30px 20px",
  };
  
  const containerButton = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  };
  
  const button = {
    backgroundColor: "#023e8a",
    borderRadius: 5,
    color: "#FFF",
    fontWeight: "bold",
    border: "1px solid rgb(0,0,0, 0.1)",
    padding: "12px 30px",
  };
  
  const content = {
    border: "1px solid rgb(0,0,0, 0.1)",
    borderRadius: "3px",
    overflow: "hidden",
  };
  
  const image = {
    maxWidth: "100%",

  };
  
  const boxInfos = {
    padding: "20px",
  };
  
  const containerImageFooter = {
    padding: "45px 0 0 0",
  };
  