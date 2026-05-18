import { Button } from "@/components/ui/button"
import { Instagram, MapPin, Sparkles } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full opacity-30"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-primary/10 rounded-full opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-primary/15 rounded-full opacity-25"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 border border-primary/10 rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative w-32 h-32 mx-auto mb-12 rounded-full overflow-hidden border-4 border-primary elegant-shadow-lg scale-110 md:scale-125">
            <Image
              src="/cheeseCakeCollectionImage.jpg"
              alt="The Cheesecake Collection"
              fill
              className="object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-8xl font-serif font-bold mb-8 text-balance leading-tight tracking-tight">
            <span className="text-foreground">The</span>
            <br />
            <span className="text-gradient-gold">Cheesecake</span>
            <br />
            <span className="text-foreground">Collection</span>
          </h1>

          <div className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-8 mb-12 elegant-shadow max-w-3xl mx-auto">
            <p className="text-xl md:text-3xl text-foreground mb-4 text-balance font-serif italic">
              Handcrafted Gourmet <span className="text-gradient-gold font-bold not-italic">Cup-Cakes</span>
            </p>
            <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
              Indulge in Atlanta's most exquisite, bejeweled cheesecake creations. Made with premium natural ingredients for those who appreciate the finer things.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="text-lg px-10 py-6 bg-primary text-primary-foreground hover:bg-primary/90 font-sans font-medium elegant-shadow rounded-full"
            >
              <MapPin className="w-5 h-5 mr-3" />
              Check Service Area
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-10 py-6 gold-border-hover bg-background border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans font-medium rounded-full"
              asChild
            >
              <a href="https://instagram.com/cheesecakeCollection_" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-3" />
                @cheesecakeCollection_
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="bg-secondary/50 backdrop-blur-sm border border-primary/10 rounded-full px-8 py-3 elegant-shadow">
              <div className="flex items-center font-sans font-semibold text-primary">
                <Sparkles className="w-4 h-4 mr-3" />
                Family Owned
              </div>
            </div>
            <div className="bg-secondary/50 backdrop-blur-sm border border-primary/10 rounded-full px-8 py-3 elegant-shadow">
              <div className="flex items-center font-sans font-semibold text-primary">
                <div className="w-3 h-3 bg-primary rounded-full mr-3 animate-pulse"></div>
                Atlanta Based
              </div>
            </div>
            <div className="bg-secondary/50 backdrop-blur-sm border border-primary/10 rounded-full px-8 py-3 elegant-shadow">
              <div className="flex items-center font-sans font-semibold text-primary">
                <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                Handmade Daily
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
