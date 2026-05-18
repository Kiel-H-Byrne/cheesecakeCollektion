import { Button } from "@/components/ui/button"
import { Instagram, MapPin, Sparkles, ChevronDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.jpg"
          alt="Artisan Cheesecake Collection"
          fill
          className="object-cover scale-105 animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-20 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-24 h-24 mx-auto mb-8 rounded-full overflow-hidden border-2 border-primary/50 elegant-shadow-lg scale-110">
            <Image
              src="/cheeseCakeCollectionImage.jpg"
              alt="The Cheesecake Collection"
              fill
              className="object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 text-white leading-tight tracking-tight drop-shadow-2xl">
            Indulge in the <br />
            <span className="text-primary italic">Collection</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 font-sans max-w-2xl mx-auto font-light tracking-wide leading-relaxed drop-shadow-lg">
            Atlanta's most exquisite, bejeweled cheesecake creations. Handcrafted daily for the discerning palate.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="text-lg px-12 py-7 bg-primary text-primary-foreground hover:bg-primary/90 font-sans font-bold shadow-[0_0_30px_rgba(212,175,55,0.4)] rounded-full transition-all duration-300 hover:scale-105"
            >
              <MapPin className="w-5 h-5 mr-3" />
              Check Service Area
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-12 py-7 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-black font-sans font-bold rounded-full transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://instagram.com/cheesecakeCollection_" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-3" />
                Follow Our Grid
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Badge - Adjusted position to avoid overlap */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce">
        <span className="text-white/60 text-[10px] uppercase tracking-[0.4em] font-bold mb-2">Discover More</span>
        <ChevronDown className="text-primary w-5 h-5" />
      </div>
    </section>
  )
}
