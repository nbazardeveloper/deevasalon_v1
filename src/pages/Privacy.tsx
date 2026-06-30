import { Link } from "react-router-dom";

const Privacy = () => (
  <main className="min-h-screen bg-background text-foreground px-6 lg:px-12 py-16">
    <div className="mx-auto max-w-3xl">
      <Link to="/" className="text-xs uppercase tracking-[0.25em] text-brand-deep hover:text-brand transition">← Back</Link>
      <h1 className="font-serif text-4xl md:text-5xl mt-6 mb-8">Privacy Policy</h1>
      <div className="prose prose-neutral max-w-none space-y-5 text-sm leading-relaxed text-muted-foreground">
        <p>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        <p>DEEVA Nail Boutique respects your privacy. This policy explains what information we collect and how we use it.</p>
        <h2 className="font-serif text-2xl text-foreground mt-8">Information We Collect</h2>
        <p>We collect information you provide when booking an appointment, subscribing to our newsletter, or contacting us — such as your name, email, phone number, and service preferences.</p>
        <h2 className="font-serif text-2xl text-foreground mt-8">How We Use Your Information</h2>
        <p>To confirm appointments, send service reminders, share promotions you opt into, and improve our services. We never sell your data to third parties.</p>
        <h2 className="font-serif text-2xl text-foreground mt-8">Cookies & Analytics</h2>
        <p>We use cookies and basic analytics to understand site usage and improve user experience. You can disable cookies in your browser settings.</p>
        <h2 className="font-serif text-2xl text-foreground mt-8">Your Rights</h2>
        <p>You may request access to, correction of, or deletion of your personal data at any time by emailing hello@deevanailboutique.com.</p>
        <h2 className="font-serif text-2xl text-foreground mt-8">Contact</h2>
        <p>Questions about your privacy? Reach us at hello@deevanailboutique.com.</p>
      </div>
    </div>
  </main>
);

export default Privacy;