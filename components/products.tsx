import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    name: "Georgia Peach",
    description: "Sweet Georgia peaches swirled into our signature cream cheese base with a hint of bourbon",
    price: "$8",
    color: "bg-chart-3",
    popular: true,
  },
  {
    name: "Strawberry Shortcake",
    description: "Fresh strawberries and vanilla cake crumbles in our classic cheesecake cup-cake",
    price: "$7",
    color: "bg-secondary",
    popular: false,
  },
  {
    name: "Peanut Butter Cup",
    description: "Rich peanut butter cheesecake with chocolate chunks and a peanut butter drizzle",
    price: "$9",
    color: "bg-primary",
    popular: true,
  },
  {
    name: "Salted Caramel",
    description: "Decadent caramel swirled cheesecake with a touch of sea salt and caramel sauce",
    price: "$8",
    color: "bg-chart-3",
    popular: false,
  },
  {
    name: "Lemon Blueberry",
    description: "Zesty lemon cheesecake studded with fresh blueberries and lemon zest",
    price: "$7",
    color: "bg-accent",
    popular: false,
  },
  {
    name: "Chocolate Decadence",
    description: "Triple chocolate cheesecake with dark chocolate shavings and cocoa dust",
    price: "$10",
    color: "bg-muted",
    popular: true,
  },
]

export function Products() {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Our <span className="text-primary">Cup-Cakes</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Discover our signature collection of gourmet cheesecake cup-cakes, each one a perfect individual indulgence
            crafted with premium ingredients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{product.name}</CardTitle>
                  {product.popular && (
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      Popular
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className={`w-full h-32 ${product.color} rounded-lg mb-4 flex items-center justify-center`}>
                  <div className="w-20 h-20 bg-background/20 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-12 h-12 text-background/60" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                      <ellipse cx="12" cy="16" rx="6" ry="2" opacity="0.7" />
                    </svg>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <span className="text-sm text-muted-foreground">per cup-cake</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
