import { FAQ } from "@/app/components/landing-page/FAQ";
import { Header } from "@/app/components/landing-page/Header";
import { Hero } from "@/app/components/landing-page/Hero";
import { Pricing } from "@/app/components/landing-page/Pricing";
import { VideoExplanation } from "@/app/components/landing-page/VideoExplanation";

export default async function LinkInBio({
  params,
}: {
  params: Promise<{ socialMediaSlug: string }>;
}) {
  const { socialMediaSlug } = await params;
  console.log(socialMediaSlug);
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
