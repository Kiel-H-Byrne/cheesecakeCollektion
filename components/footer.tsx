import { Instagram, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-background border-t border-primary/20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary-foreground" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                  <ellipse cx="12" cy="16" rx="6" ry="2" opacity="0.7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-primary">The Cheesecake Collection</h3>
                <p className="text-sm text-muted-foreground">Atlanta's Finest Cup-Cakes</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Handcrafted gourmet cheesecake cup-cakes made with love and premium natural ingredients. Family-owned and
              Atlanta-based since day one.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Atlanta, GA Metro Area</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Available via Instagram DM</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Orders through social media</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">Follow Us</h4>
            <Button variant="outline" className="w-full mb-4 bg-transparent" asChild>
              <a href="https://instagram.com/cheesecakeCollection_" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-4 h-4 mr-2" />
                @cheesecakeCollection_
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              Follow us for daily specials, behind-the-scenes content, and ordering updates!
            </p>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 The Cheesecake Collection. All rights reserved. Made with ❤️ in Atlanta.
          </p>
        </div>
      </div>
    </footer>
  )
}
