import { NavBar } from "@/components/Layout";
import { Container } from "@mui/material";

import "./globals.css";

export const metadata = {
  title: "Calvin Danyalson | Software Engineer",
  description:
    "I am a student studying Informatics Engineering at Gunadarma University. I enjoy exploring new aspects of software development, particularly in web development. Currently, I'm exploring some frameworks such as Express.js or .NET for backend development. I've also collaborated in teams to develop applications for some programs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Container maxWidth="xl">
          <NavBar />
          {children}
        </Container>
      </body>
    </html>
  );
}
