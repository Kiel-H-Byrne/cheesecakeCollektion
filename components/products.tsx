import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const products = [
  {
    name: "Georgia Peach",
    description: "Signature cream cheese base with sweet Georgia peaches and bourbon glaze.",
    price: "$8",
    image: "/products/georgia-peach.jpg",
    popular: true,
  },
  {
    name: "Strawberry Shortcake",
    description: "Classic vanilla cake crumbles topped with fresh strawberry glaze and berries.",
    price: "$7",
    image: "/products/strawberry-shortcake.jpg",
    popular: false,
  },
  {
    name: "Peanut Butter Cup",
    description: "Rich peanut butter base with chocolate chunks and a decadent drizzle.",
    price: "$9",
    image: "/products/peanut-butter-cup.jpg",
    popular: true,
  },
  {
    name: "Salted Caramel",
    description: "Handcrafted caramel swirled cheesecake with a delicate touch of sea salt.",
    price: "$8",
    image: "/products/salted-caramel.jpg",
    popular: false,
  },
  {
    name: "Lemon Blueberry",
    description: "Zesty lemon base studded with fresh blueberries and topped with citrus glaze.",
    price: "$7",
    image: "/products/lemon-blueberry.jpg",
    popular: false,
  },
  {
    name: "Chocolate Decadence",
    description: "Triple chocolate base with dark shavings, cocoa dust, and ganache core.",
    price: "$10",
    image: "/products/chocolate-decadence.jpg",
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
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto font-sans font-light">
            Every piece is a bejeweled masterpiece, handcrafted to order.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <Card
              key={index}
              className="border-primary/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 group bg-card overflow-hidden rounded-3xl elegant-shadow hover:elegant-shadow-lg"
            >
              <div className="h-72 relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {product.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground font-sans font-bold shadow-lg">
                    Trending
                  </Badge>
                )}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <Button size="icon" className="rounded-full bg-primary text-primary-foreground">
                    <Plus className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <CardHeader className="pt-6 pb-2">
                <CardTitle className="text-2xl font-serif group-hover:text-primary transition-colors">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed font-light">
                  {product.description}
                </p>
                <div className="flex items-center justify-between border-t border-primary/5 pt-6">
                  <div>
                    <span className="text-2xl font-serif font-bold text-primary">{product.price}</span>
                    <span className="text-[10px] text-muted-foreground ml-2 uppercase tracking-widest font-bold">Signature Size</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
