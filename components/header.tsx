import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 elegant-shadow">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center elegant-shadow">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-primary-foreground" fill="currentColor">
              <path d="M12 2C8.5 2 5.5 4.5 5.5 7.5c0 1 .3 2 .8 2.8L12 22l5.7-11.7c.5-.8.8-1.8.8-2.8C18.5 4.5 15.5 2 12 2z" />
              <ellipse cx="12" cy="7.5" rx="4" ry="2" fill="currentColor" opacity="0.8" />
              <ellipse cx="12" cy="9" rx="3" ry="1.5" fill="currentColor" opacity="0.6" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-serif font-bold text-foreground">The Cheesecake Collection</h1>
            <p className="text-sm text-muted-foreground font-sans italic">Atlanta's Finest Artisan Cup-Cakes</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-foreground hover:text-accent transition-colors font-sans text-sm font-medium tracking-wide"
          >
            Our Story
          </a>
          <a
            href="#products"
            className="text-foreground hover:text-accent transition-colors font-sans text-sm font-medium tracking-wide"
          >
            Cup-Cakes
          </a>
          <a
            href="#order"
            className="text-foreground hover:text-accent transition-colors font-sans text-sm font-medium tracking-wide"
          >
            Order
          </a>
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            className="gold-border-hover bg-background border-accent text-accent hover:bg-accent hover:text-accent-foreground font-sans font-medium"
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
