import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="absolute top-10 w-full z-50">
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
