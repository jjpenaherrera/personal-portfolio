import { setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { WorkSection } from "@/components/WorkSection";
import { Perspective } from "@/components/Perspective";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WorkSection />
        <Perspective />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
