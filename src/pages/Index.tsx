import { lazy, Suspense } from "react";
import { AnnouncementBar } from "@/components/sections/AnnouncementBar";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { StickyMobileCTA } from "@/components/sections/StickyMobileCTA";

// Below-the-fold sections — lazy loaded
const Differentiators = lazy(() => import("@/components/sections/Differentiators").then(m => ({ default: m.Differentiators })));
const Categories      = lazy(() => import("@/components/sections/Categories").then(m => ({ default: m.Categories })));
const Pricing         = lazy(() => import("@/components/sections/Pricing").then(m => ({ default: m.Pricing })));
const SpecialOffers   = lazy(() => import("@/components/sections/SpecialOffers").then(m => ({ default: m.SpecialOffers })));
const Testimonials    = lazy(() => import("@/components/sections/Testimonials").then(m => ({ default: m.Testimonials })));
const BrandStory      = lazy(() => import("@/components/sections/BrandStory").then(m => ({ default: m.BrandStory })));
const InstagramGrid   = lazy(() => import("@/components/sections/InstagramGrid").then(m => ({ default: m.InstagramGrid })));
const FAQ             = lazy(() => import("@/components/sections/FAQ").then(m => ({ default: m.FAQ })));
const GiftCard        = lazy(() => import("@/components/sections/GiftCard").then(m => ({ default: m.GiftCard })));
const Visit           = lazy(() => import("@/components/sections/Visit").then(m => ({ default: m.Visit })));
const FinalCTA        = lazy(() => import("@/components/sections/FinalCTA").then(m => ({ default: m.FinalCTA })));
const Footer          = lazy(() => import("@/components/sections/Footer").then(m => ({ default: m.Footer })));

const Fallback = () => <div className="h-32" aria-hidden />;

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <AnnouncementBar />
    <Header />
    <main>
      {/* 1. Attention */}
      <Hero />
      {/* 2. Instant trust — numbers */}
      <TrustBar />
      <Suspense fallback={<Fallback />}>
        {/* 3. Why DEEVA — differentiators */}
        <Differentiators />
        {/* 4. What we do */}
        <Categories />
        {/* 5. Pricing */}
        <Pricing />
        {/* 6. Special offers — closing argument after price */}
        <SpecialOffers />
        {/* 7. Social proof */}
        <Testimonials />
        {/* 8. Our story */}
        <BrandStory />
        {/* 10. Living social proof */}
        <InstagramGrid />
        {/* 11. FAQ — removes last objections */}
        <FAQ />
        {/* 12. Gift cards */}
        <GiftCard />
        {/* 13. Where to find us */}
        <Visit />
        {/* 14. Final push */}
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
