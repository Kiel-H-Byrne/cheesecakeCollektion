import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Georgia Peach",
    description: "Sweet Georgia peaches swirled into our signature cream cheese base with a hint of bourbon and brown sugar crumble.",
    price: "$8",
    color: "bg-orange-50",
    accent: "text-orange-500",
    popular: true,
  },
  {
    name: "Strawberry Shortcake",
    description: "Fresh strawberries and vanilla cake crumbles topped with a delicate strawberry glaze and fresh fruit.",
    price: "$7",
    color: "bg-rose-50",
    accent: "text-rose-500",
    popular: false,
  },
  {
    name: "Peanut Butter Cup",
    description: "Rich peanut butter cheesecake with chocolate chunks, finished with a decadent peanut butter drizzle.",
    price: "$9",
    color: "bg-amber-50",
    accent: "text-amber-700",
    popular: true,
  },
  {
    name: "Salted Caramel",
    description: "Decadent caramel swirled cheesecake with a touch of sea salt and handcrafted caramel sauce.",
    price: "$8",
    color: "bg-yellow-50",
    accent: "text-yellow-700",
    popular: false,
  },
  {
    name: "Lemon Blueberry",
    description: "Zesty lemon cheesecake studded with fresh blueberries and topped with a bright lemon zest glaze.",
    price: "$7",
    color: "bg-blue-50",
    accent: "text-blue-500",
    popular: false,
  },
  {
    name: "Chocolate Decadence",
    description: "Triple chocolate cheesecake with dark chocolate shavings, cocoa dust, and a rich ganache core.",
    price: "$10",
    color: "bg-stone-50",
    accent: "text-stone-800",
    popular: true,
  },
]

export function Products() {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Badge className="mb-4 bg-secondary text-primary border-primary/20 rounded-full px-4 py-1">
            The Collection
          </Badge>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-balance">
            Signature <span className="text-primary italic">Cup-Cakes</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto font-sans">
            Discover our curated collection of gourmet cheesecake cup-cakes, each bejeweled with the finest ingredients and handcrafted to perfection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <Card
              key={index}
              className="border-primary/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 group bg-card overflow-hidden rounded-2xl elegant-shadow hover:elegant-shadow-lg"
            >
              <div className={`h-48 ${product.color} relative flex items-center justify-center transition-colors duration-500 group-hover:bg-secondary/30`}>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="relative w-32 h-32 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center elegant-shadow transition-transform duration-500 group-hover:scale-110 border border-primary/10">
                  <Sparkles className={`w-16 h-16 ${product.accent} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
                {product.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground font-sans font-bold shadow-lg">
                    Must Try
                  </Badge>
                )}
              </div>
              <CardHeader className="pt-8 pb-4">
                <CardTitle className="text-2xl font-serif group-hover:text-primary transition-colors">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-8 text-sm leading-relaxed min-h-[4rem]">
                  {product.description}
                </p>
                <div className="flex items-center justify-between border-t border-primary/5 pt-6">
                  <div>
                    <span className="text-3xl font-serif font-bold text-primary">{product.price}</span>
                    <span className="text-xs text-muted-foreground ml-2 uppercase tracking-tighter">Per Piece</span>
                  </div>
                  <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary rounded-full transition-all duration-300 px-6 font-sans font-semibold">
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
