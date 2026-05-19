import { Instagram, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import logoImage from "@/public/cheeseCakeCollectionImage.jpg"

export function Footer() {
  return (
    <footer className="bg-background border-t border-primary/20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-primary">
                <Image
                  src={logoImage}
                  alt="The Cheesecake Collection"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  sizes="48px"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-primary leading-tight">
                  The <span className="text-foreground">Cheesecake</span> Collection
                </h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Atlanta's Finest</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Handcrafted gourmet cheesecake cup-cakes made with love and premium natural ingredients. Experience the ultimate sweet indulgence in every bite.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-foreground">Connect With Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm group cursor-default">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors">
                  <MapPin className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="text-muted-foreground">Atlanta, GA & DMV Area (DC, MD, VA)</span>
              </div>
              <div className="flex items-center space-x-3 text-sm group cursor-default">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="text-muted-foreground">Perfect for Baby Showers & Graduations</span>
              </div>
              <div className="flex items-center space-x-3 text-sm group cursor-default">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="text-muted-foreground">thecheesecakecollection@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-foreground">Follow Our Journey</h4>
            <Button variant="outline" className="w-full mb-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300" asChild>
              <a href="https://instagram.com/cheesecakeCollection_" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-4 h-4 mr-2" />
                @cheesecakeCollection_
              </a>
            </Button>
            <p className="text-sm text-muted-foreground italic">
              "Indulge in the collection you deserve."
            </p>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} The Cheesecake Collection. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
