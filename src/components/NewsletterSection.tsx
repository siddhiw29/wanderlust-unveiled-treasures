
import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/90 to-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Community of India Travelers</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for exclusive travel tips, hidden gems, and special offers from local Indian artisans
        </p>
        <div className="max-w-md mx-auto flex">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 w-full rounded-l-md text-foreground focus:outline-none"
          />
          <Button className="rounded-l-none px-6">Subscribe</Button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
