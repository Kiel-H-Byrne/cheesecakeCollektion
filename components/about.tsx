import { Card, CardContent } from "@/components/ui/card"
import { Heart, Leaf, Award, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1">
            Our Legacy
          </Badge>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-balance">
            Crafted with <span className="text-primary italic">Passion</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed max-w-2xl mx-auto font-sans">
            Born from a passion for perfection, The Cheesecake Collection brings you artisanal{" "}
            <strong className="text-primary font-bold">cup-cakes</strong> that redefine indulgence. Each bite is a symphony of premium natural ingredients, crafted by hand in the heart of Atlanta.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          <Card className="border-primary/5 hover:border-primary/20 transition-all duration-300 group bg-card/50 backdrop-blur-sm rounded-2xl elegant-shadow">
            <CardContent className="p-10 text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">Family Crafted</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every cup-cake is made with love by our family, using recipes passed down and perfected over generations. We believe in the power of tradition.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/5 hover:border-primary/20 transition-all duration-300 group bg-card/50 backdrop-blur-sm rounded-2xl elegant-shadow">
            <CardContent className="p-10 text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">Pure Ingredients</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We source only the finest natural ingredients—real fruit, premium chocolate, and farm-fresh cream—ensuring every bite is pure bliss.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/5 hover:border-primary/20 transition-all duration-300 group bg-card/50 backdrop-blur-sm rounded-2xl elegant-shadow">
            <CardContent className="p-10 text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">Gourmet Quality</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Each cup-cake is a bejeweled masterpiece, combining traditional baking techniques with innovative, trendy flavors that excite the palate.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-2 text-primary font-serif italic text-xl">
            <Sparkles className="w-5 h-5" />
            <span>"Indulge in the collection you deserve."</span>
            <Sparkles className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  )
}
