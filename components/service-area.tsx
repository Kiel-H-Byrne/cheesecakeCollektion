"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Check, X, Instagram, Send } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ServiceArea() {
  const [zipCode, setZipCode] = useState("")
  const [checkResult, setCheckResult] = useState<"checking" | "in-area" | "out-of-area" | null>(null)

  const checkServiceArea = async () => {
    if (!zipCode) return

    setCheckResult("checking")
    await new Promise((resolve) => setTimeout(resolve, 800))

    const atlantaAreaZips = [
      "30012", "30013", "30014", "30016", "30017", "30019", "30021", "30022", "30024", "30030", 
      "30032", "30033", "30034", "30035", "30036", "30037", "30038", "30039", "30040", "30041", 
      "30042", "30043", "30044", "30045", "30046", "30047", "30048", "30049", "30052", "30054", 
      "30055", "30056", "30058", "30060", "30062", "30064", "30066", "30067", "30068", "30069", 
      "30071", "30072", "30074", "30075", "30076", "30077", "30078", "30079", "30080", "30081", 
      "30082", "30083", "30084", "30085", "30086", "30087", "30088", "30090", "30092", "30093", 
      "30094", "30095", "30096", "30097", "30098", "30099",
    ]

    if (atlantaAreaZips.includes(zipCode)) {
      setCheckResult("in-area")
    } else {
      setCheckResult("out-of-area")
    }
  }

  return (
    <section id="order" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground rounded-full px-4 py-1">
              Delivery & Orders
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-balance">
              How to <span className="text-primary">Order</span>
            </h2>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto font-sans">
              We deliver our gourmet creations within 30 miles of Atlanta. Verify your area and reach out to start your collection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-stretch">
            <Card className="border-primary/5 bg-card/80 backdrop-blur-sm rounded-3xl overflow-hidden elegant-shadow flex flex-col">
              <CardHeader className="bg-primary/5 pb-8">
                <CardTitle className="flex items-center text-2xl font-serif text-primary">
                  <MapPin className="w-6 h-6 mr-3" />
                  Service Area Check
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8 flex-1">
                <p className="text-sm text-muted-foreground">
                  Enter your ZIP code to see if you're within our signature delivery zone.
                </p>
                <div className="flex space-x-3">
                  <Input
                    placeholder="ZIP Code (e.g. 30012)"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="flex-1 bg-background border-primary/20 focus-visible:ring-primary rounded-full px-6 h-12"
                  />
                  <Button 
                    onClick={checkServiceArea} 
                    disabled={!zipCode || checkResult === "checking"}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 transition-all font-bold"
                  >
                    {checkResult === "checking" ? "Checking..." : "Verify"}
                  </Button>
                </div>

                {checkResult === "in-area" && (
                  <div className="flex items-center p-6 bg-primary/10 rounded-2xl animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-4 shrink-0">
                      <Check className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-primary text-lg">You're in the Area!</p>
                      <p className="text-sm text-muted-foreground">
                        We deliver to your doorstep. Proceed to Instagram to place your order.
                      </p>
                    </div>
                  </div>
                )}

                {checkResult === "out-of-area" && (
                  <div className="flex items-center p-6 bg-destructive/5 rounded-2xl animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="w-10 h-10 rounded-full bg-destructive flex items-center justify-center mr-4 shrink-0">
                      <X className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-destructive text-lg">Outside Delivery Zone</p>
                      <p className="text-sm text-muted-foreground">
                        We don't currently deliver to {zipCode}, but DM us for special event inquiries!
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="border-primary/5 bg-card/80 backdrop-blur-sm rounded-3xl overflow-hidden elegant-shadow flex flex-col">
              <CardHeader className="bg-primary/5 pb-8">
                <CardTitle className="text-2xl font-serif text-primary">Simple Steps to Indulge</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8 flex-1">
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary text-lg font-bold shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shadow-sm">
                    1
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Verify Delivery</p>
                    <p className="text-sm text-muted-foreground">Confirm your location using the check tool to the left.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary text-lg font-bold shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shadow-sm">
                    2
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Explore the Grid</p>
                    <p className="text-sm text-muted-foreground">Check <span className="text-primary font-bold">@cheesecakeCollection_</span> for daily bejeweled specials.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-lg font-bold shrink-0 shadow-lg">
                    3
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Send a DM</p>
                    <p className="text-sm text-muted-foreground">Message us with your selections and preferred delivery time.</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full h-14 font-bold text-lg transition-all" asChild>
                    <a href="https://instagram.com/cheesecakeCollection_" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-5 h-5 mr-3" />
                      Follow & Order
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
