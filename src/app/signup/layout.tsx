import type { Metadata } from "next";

import SignupNavbar from "../SignupNavbar";

export const metadata: Metadata = {
  title: "Signup - SoloClash",
  description: "Create your SoloClash account",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="absolute top-10 w-full z-50">
        <SignupNavbar />
      </header>

      {children}
    </>
  );
}
