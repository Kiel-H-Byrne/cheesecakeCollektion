import { Card, CardContent } from "@/components/ui/card"
import { Heart, Leaf, Award } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Our <span className="text-primary">Story</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Born from a passion for perfection, The Cheesecake Collection brings you artisanal{" "}
            <strong className="text-primary">cup-cakes</strong> that redefine indulgence. Each bite is a symphony of
            premium natural ingredients, crafted by hand in the heart of Atlanta.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Family Crafted</h3>
              <p className="text-muted-foreground">
                Every cup-cake is made with love by our family, using recipes passed down and perfected over
                generations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Natural Ingredients</h3>
              <p className="text-muted-foreground">
                We source only the finest natural ingredients, ensuring each cup-cake is both healthy and decadent.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Gourmet Quality</h3>
              <p className="text-muted-foreground">
                Each cup-cake is a masterpiece, combining traditional techniques with innovative flavors.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
