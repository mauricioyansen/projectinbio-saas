import { Metadata } from "next";
import { FAQ } from "../components/landing-page/FAQ";
import { Header } from "../components/landing-page/Header";
import { Hero } from "../components/landing-page/Hero";
import { Pricing } from "../components/landing-page/Pricing";
import { VideoExplanation } from "../components/landing-page/VideoExplanation";
import { trackServerEvent } from "../lib/mixpanel";

export const metadata: Metadata = {
  title: "ProjectInBio",
  description: "Seus projetos e redes sociais em um único link",
};

export default function Home() {
  trackServerEvent("page_view", {
    page: "Home",
  });

  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Hero />
      <VideoExplanation />
      <Pricing />
      <FAQ />
    </div>
  );
}
