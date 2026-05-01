import { lazy, Suspense } from "react";
import { AnnouncementBar } from "@/components/sections/AnnouncementBar";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { StickyMobileCTA } from "@/components/sections/StickyMobileCTA";

// Below-the-fold sections — lazy loaded
const Categories    = lazy(() => import("@/components/sections/Categories").then(m => ({ default: m.Categories })));
const Pricing       = lazy(() => import("@/components/sections/Pricing").then(m => ({ default: m.Pricing })));
const Testimonials  = lazy(() => import("@/components/sections/Testimonials").then(m => ({ default: m.Testimonials })));
const BrandStory    = lazy(() => import("@/components/sections/BrandStory").then(m => ({ default: m.BrandStory })));
const InstagramGrid = lazy(() => import("@/components/sections/InstagramGrid").then(m => ({ default: m.InstagramGrid })));
const Visit         = lazy(() => import("@/components/sections/Visit").then(m => ({ default: m.Visit })));
const FinalCTA      = lazy(() => import("@/components/sections/FinalCTA").then(m => ({ default: m.FinalCTA })));
const Footer        = lazy(() => import("@/components/sections/Footer").then(m => ({ default: m.Footer })));

const Fallback = () => <div className="h-32" aria-hidden />;

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <AnnouncementBar />
    <Header />
    <main>
      {/* 1. Attention */}
      <Hero />
      {/* 2. Instant trust */}
      <TrustBar />
      <Suspense fallback={<Fallback />}>
        {/* 3. What we do */}
        <Categories />
        {/* 4. Price (answers the #1 question) */}
        <Pricing />
        {/* 5. Social proof — justifies the price */}
        <Testimonials />
        {/* 6. Why us */}
        <BrandStory />
        {/* 7. Living social proof */}
        <InstagramGrid />
        {/* 8. Where to come */}
        <Visit />
        {/* 9. Final conversion push */}
        <FinalCTA />
      </Suspense>
    </main>
    <Suspense fallback={<Fallback />}>
      <Footer />
    </Suspense>
    <StickyMobileCTA />
  </div>
);

export default Index;
