import BeforeAfterSlider from "@/components/home/BeforeAfterSlider";
import ConciergeCta from "@/components/home/ConciergeCta";
import ExpertiseServices from "@/components/home/ExpertiseServices";
import Hero from "@/components/home/Hero";

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
