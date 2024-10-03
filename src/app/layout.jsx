import { NavBar } from "@/components/Layout";
import { Container } from "@mui/material";

import "./globals.css";

export const metadata = {
  title: "Calvin Danyalson | Software Engineer",
  description:
    "I am a freshgraduate bachelor degree from Informatics Engineering at Gunadarma University. I enjoy exploring new aspects of software development, particularly in web development. Currently, I'm exploring some frameworks such as Express.js, .NET, or Golang for backend development. I've also collaborated in teams to develop applications for some programs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/tabs.ico" sizes="any" />
      <body style={{ scrollBehavior: "smooth" }}>
        <Container maxWidth="xl">
          <NavBar />
          {children}
        </Container>
      </body>
    </html>
  );
}
