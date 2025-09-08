"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Check, X } from "lucide-react"

export function ServiceArea() {
  const [zipCode, setZipCode] = useState("")
  const [checkResult, setCheckResult] = useState<"checking" | "in-area" | "out-of-area" | null>(null)

  // Service area center (30012 - Conyers, GA area)
  const serviceCenter = { lat: 33.6673, lng: -84.0177 }
  const serviceRadius = 30 // miles

  const checkServiceArea = async () => {
    if (!zipCode) return

    setCheckResult("checking")

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Simple zip code validation for demo
    // In production, you'd use a geocoding API
    const atlantaAreaZips = [
      "30012",
      "30013",
      "30014",
      "30016",
      "30017",
      "30019",
      "30021",
      "30022",
      "30024",
      "30030",
      "30032",
      "30033",
      "30034",
      "30035",
      "30036",
      "30037",
      "30038",
      "30039",
      "30040",
      "30041",
      "30042",
      "30043",
      "30044",
      "30045",
      "30046",
      "30047",
      "30048",
      "30049",
      "30052",
      "30054",
      "30055",
      "30056",
      "30058",
      "30060",
      "30062",
      "30064",
      "30066",
      "30067",
      "30068",
      "30069",
      "30071",
      "30072",
      "30074",
      "30075",
      "30076",
      "30077",
      "30078",
      "30079",
      "30080",
      "30081",
      "30082",
      "30083",
      "30084",
      "30085",
      "30086",
      "30087",
      "30088",
      "30090",
      "30092",
      "30093",
      "30094",
      "30095",
      "30096",
      "30097",
      "30098",
      "30099",
    ]

    if (atlantaAreaZips.includes(zipCode)) {
      setCheckResult("in-area")
    } else {
      setCheckResult("out-of-area")
    }
  }

  return (
    <section id="order" className="py-20 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              <span className="text-primary">Order</span> Your Cup-Cakes
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              We deliver within 30 miles of Atlanta. Check if we serve your area!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  Service Area Check
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Enter your ZIP code"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={checkServiceArea} disabled={!zipCode || checkResult === "checking"}>
                    {checkResult === "checking" ? "Checking..." : "Check"}
                  </Button>
                </div>

                {checkResult === "in-area" && (
                  <div className="flex items-center p-4 bg-secondary/20 rounded-lg">
                    <Check className="w-5 h-5 text-green-600 mr-2" />
                    <div>
                      <p className="font-semibold text-green-600">Great news!</p>
                      <p className="text-sm text-muted-foreground">
                        We deliver to your area. Contact us to place your order!
                      </p>
                    </div>
                  </div>
                )}

                {checkResult === "out-of-area" && (
                  <div className="flex items-center p-4 bg-destructive/10 rounded-lg">
                    <X className="w-5 h-5 text-destructive mr-2" />
                    <div>
                      <p className="font-semibold text-destructive">Sorry!</p>
                      <p className="text-sm text-muted-foreground">
                        We don't currently deliver to your area, but follow us for updates!
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>How to Order</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-semibold">Check Service Area</p>
                    <p className="text-sm text-muted-foreground">Make sure we deliver to your location</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground text-sm font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-semibold">Follow Us on Instagram</p>
                    <p className="text-sm text-muted-foreground">@cheesecakeCollection_ for daily specials</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-semibold">Send us a DM</p>
                    <p className="text-sm text-muted-foreground">Message us with your order and delivery details</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
