import { Link } from "react-router-dom";

const Terms = () => (
  <main className="min-h-screen bg-background text-foreground px-6 lg:px-12 py-16">
    <div className="mx-auto max-w-3xl">
      <Link to="/" className="text-xs uppercase tracking-[0.25em] text-brand-deep hover:text-brand transition">← Back</Link>
      <h1 className="font-serif text-4xl md:text-5xl mt-6 mb-8">Terms of Use</h1>
      <div className="prose prose-neutral max-w-none space-y-5 text-sm leading-relaxed text-muted-foreground">
        <p>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        <p>Welcome to DeeVa Nail Boutique. By accessing or using our website and services, you agree to be bound by these Terms of Use.</p>
        <h2 className="font-serif text-2xl text-foreground mt-8">Appointments & Cancellations</h2>
        <p>We kindly ask for at least 24 hours notice if you need to cancel or reschedule. Late cancellations or no-shows may incur a fee of up to 50% of the booked service.</p>
        <h2 className="font-serif text-2xl text-foreground mt-8">Services</h2>
        <p>All services are performed by licensed professionals using sanitized tools and non-toxic, salon-grade products. Results may vary based on natural nail condition and aftercare.</p>
        <h2 className="font-serif text-2xl text-foreground mt-8">Payment</h2>
        <p>Payment is due at the time of service. We accept all major credit cards and digital wallets. Gift cards are non-refundable.</p>
        <h2 className="font-serif text-2xl text-foreground mt-8">Liability</h2>
        <p>Please disclose any allergies or medical conditions before service. DeeVa Nail Boutique is not liable for reactions or damage resulting from undisclosed conditions.</p>
        <h2 className="font-serif text-2xl text-foreground mt-8">Contact</h2>
        <p>Questions about these terms? Email us at hello@deevanailboutique.com.</p>
      </div>
    </div>
  </main>
);

export default Terms;