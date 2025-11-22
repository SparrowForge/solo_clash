import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollHeader from "@/components/ScrollHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ScrollHeader />
      <header
        className="fixed top-10 w-full z-50 transition-opacity duration-300"
        id="main-header"
      >
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
