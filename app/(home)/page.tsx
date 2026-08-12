import BeforeAfterSlider from "@/app/(home)/components/BeforeAfterSlider";
import ConciergeCta from "@/app/(home)/components/ConciergeCta";
import ExpertiseServices from "@/app/(home)/components/ExpertiseServices";
import Hero from "@/app/(home)/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <BeforeAfterSlider />
      <ExpertiseServices />
      <ConciergeCta />
    </>
  );
}
