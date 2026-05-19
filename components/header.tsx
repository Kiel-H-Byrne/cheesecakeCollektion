import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import logoImage from "@/public/cheeseCakeCollectionImage.jpg"

export function Header() {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 elegant-shadow">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary elegant-shadow">
            <Image
              src={logoImage}
              alt="The Cheesecake Collection Logo"
              fill
              className="object-cover"
              priority
              placeholder="blur"
              sizes="64px"
            />
          </div>
          <div>
            <h1 className="text-2xl font-serif font-bold text-foreground tracking-tight">
              The <span className="text-primary">Cheesecake</span> Collection
            </h1>
            <p className="text-xs text-muted-foreground font-sans uppercase tracking-[0.2em] font-semibold">
              Atlanta's Finest Artisan Cup-Cakes
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-foreground hover:text-primary transition-colors font-sans text-sm font-medium tracking-wide"
          >
            Our Story
          </a>
          <a
            href="#products"
            className="text-foreground hover:text-primary transition-colors font-sans text-sm font-medium tracking-wide"
          >
            Cup-Cakes
          </a>
          <a
            href="#order"
            className="text-foreground hover:text-primary transition-colors font-sans text-sm font-medium tracking-wide"
          >
            Order
          </a>
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            className="gold-border-hover bg-background border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans font-medium"
            asChild
          >
            <a href="https://instagram.com/cheesecakeCollection_" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-4 h-4 mr-2" />
              Follow Us
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
