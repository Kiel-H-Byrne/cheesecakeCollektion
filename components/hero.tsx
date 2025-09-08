import { Button } from "@/components/ui/button"
import { Instagram, MapPin, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-accent/20 rounded-full opacity-30"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-accent/10 rounded-full opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-accent/15 rounded-full opacity-25"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 border border-accent/10 rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-12 elegant-shadow-lg">
            <svg viewBox="0 0 24 24" className="w-14 h-14 text-primary-foreground" fill="currentColor">
              <path d="M12 2C8.5 2 5.5 4.5 5.5 7.5c0 1 .3 2 .8 2.8L12 22l5.7-11.7c.5-.8.8-1.8.8-2.8C18.5 4.5 15.5 2 12 2z" />
              <ellipse cx="12" cy="7.5" rx="4" ry="2" fill="currentColor" opacity="0.8" />
              <ellipse cx="12" cy="9" rx="3" ry="1.5" fill="currentColor" opacity="0.6" />
            </svg>
          </div>

          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8 text-balance leading-tight">
            <span className="text-foreground">The</span>
            <br />
            <span className="text-gradient-gold">Cheesecake</span>
            <br />
            <span className="text-foreground">Collection</span>
          </h1>

          <div className="bg-card border border-border rounded-lg p-8 mb-12 elegant-shadow max-w-3xl mx-auto">
            <p className="text-xl md:text-3xl text-foreground mb-4 text-balance font-serif italic">
              Handcrafted Gourmet <span className="text-gradient-gold font-bold not-italic">Cup-Cakes</span>
            </p>
            <p className="text-lg text-muted-foreground font-sans">
              Made with premium natural ingredients for Atlanta's most discerning palates
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="text-lg px-10 py-4 bg-primary text-primary-foreground hover:bg-primary/90 font-sans font-medium elegant-shadow"
            >
              <MapPin className="w-5 h-5 mr-3" />
              Check Service Area
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-10 py-4 gold-border-hover bg-background border-accent text-accent hover:bg-accent hover:text-accent-foreground font-sans font-medium"
              asChild
            >
              <a href="https://instagram.com/cheesecakeCollection_" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-3" />
                @cheesecakeCollection_
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="bg-card border border-border rounded-lg px-6 py-3 elegant-shadow">
              <div className="flex items-center font-sans font-medium">
                <Sparkles className="w-4 h-4 mr-3 text-accent" />
                Family Owned
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg px-6 py-3 elegant-shadow">
              <div className="flex items-center font-sans font-medium">
                <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                Atlanta Based
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg px-6 py-3 elegant-shadow">
              <div className="flex items-center font-sans font-medium">
                <div className="w-3 h-3 bg-secondary rounded-full mr-3"></div>
                Handmade Daily
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
