"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Check, X } from "lucide-react"

// Service area configuration - easily adjustable
const SERVICE_CONFIG = {
  centerZip: "30012", // Conyers, GA area
  radiusMiles: 30,
  centerCoords: { lat: 33.6673, lng: -84.0177 }, // Approximate coordinates for 30012
}

export function ServiceAreaMap() {
  const [zipCode, setZipCode] = useState("")
  const [isInArea, setIsInArea] = useState<boolean | null>(null)
  const [isChecking, setIsChecking] = useState(false)

  // Simplified zip code validation for Atlanta metro area
  const checkServiceArea = async () => {
    if (!zipCode || zipCode.length !== 5) return

    setIsChecking(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Atlanta metro area zip codes (simplified check)
    const atlantaMetroZips = [
      "30002",
      "30004",
      "30005",
      "30008",
      "30009",
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
      "30038",
      "30039",
      "30040",
      "30041",
      "30043",
      "30044",
      "30045",
      "30046",
      "30047",
      "30048",
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
      "30101",
      "30102",
      "30106",
      "30107",
      "30108",
      "30109",
      "30110",
      "30114",
      "30115",
      "30116",
      "30117",
      "30118",
      "30119",
      "30120",
      "30121",
      "30122",
      "30126",
      "30127",
      "30132",
      "30133",
      "30134",
      "30135",
      "30136",
      "30137",
      "30138",
      "30139",
      "30141",
      "30144",
      "30145",
      "30147",
      "30148",
      "30152",
      "30154",
      "30156",
      "30157",
      "30168",
      "30169",
      "30170",
      "30171",
      "30172",
      "30173",
      "30175",
      "30176",
      "30177",
      "30178",
      "30179",
      "30180",
      "30183",
      "30184",
      "30185",
      "30188",
      "30189",
      "30213",
      "30214",
      "30215",
      "30228",
      "30236",
      "30238",
      "30260",
      "30273",
      "30274",
      "30281",
      "30287",
      "30288",
      "30290",
      "30291",
      "30294",
      "30296",
      "30297",
      "30298",
      "30301",
      "30302",
      "30303",
      "30304",
      "30305",
      "30306",
      "30307",
      "30308",
      "30309",
      "30310",
      "30311",
      "30312",
      "30313",
      "30314",
      "30315",
      "30316",
      "30317",
      "30318",
      "30319",
      "30320",
      "30321",
      "30322",
      "30324",
      "30325",
      "30326",
      "30327",
      "30328",
      "30329",
      "30331",
      "30332",
      "30334",
      "30336",
      "30337",
      "30338",
      "30339",
      "30340",
      "30341",
      "30342",
      "30344",
      "30345",
      "30346",
      "30347",
      "30348",
      "30349",
      "30350",
      "30353",
      "30354",
      "30355",
      "30356",
      "30357",
      "30358",
      "30359",
      "30360",
      "30361",
      "30362",
      "30363",
      "30364",
      "30366",
      "30368",
      "30369",
      "30370",
      "30371",
      "30374",
      "30375",
      "30376",
      "30377",
      "30378",
      "30380",
      "30384",
      "30385",
      "30388",
      "30392",
      "30394",
      "30396",
      "30398",
    ]

    const inArea = atlantaMetroZips.includes(zipCode)
    setIsInArea(inArea)
    setIsChecking(false)
  }

  return (
    <div className="bg-card border border-border rounded-lg p-8 elegant-shadow">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-serif font-bold mb-3 text-gradient-gold">Service Area Check</h3>
        <p className="text-muted-foreground font-sans">
          We deliver within {SERVICE_CONFIG.radiusMiles} miles of {SERVICE_CONFIG.centerZip} (Atlanta Metro)
        </p>
      </div>

      <div className="relative mb-8 h-64 bg-muted/30 border border-border rounded-lg overflow-hidden elegant-shadow">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Center point */}
            <div className="w-4 h-4 bg-accent rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 elegant-shadow">
              <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75"></div>
            </div>

            {/* Service radius circles */}
            <div className="w-32 h-32 border-2 border-accent/30 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="w-48 h-48 border-2 border-accent/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="w-64 h-64 border-2 border-accent/10 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* Atlanta landmarks */}
          <div className="absolute top-4 left-4 text-xs text-muted-foreground font-sans font-medium">ATLANTA METRO</div>
          <div className="absolute bottom-4 right-4 text-xs text-muted-foreground font-sans font-medium">
            {SERVICE_CONFIG.radiusMiles} MI RADIUS
          </div>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <Input
          type="text"
          placeholder="Enter ZIP code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value.replace(/\D/g, "").slice(0, 5))}
          className="text-center font-sans text-lg gold-border-hover"
          maxLength={5}
        />
        <Button
          onClick={checkServiceArea}
          disabled={zipCode.length !== 5 || isChecking}
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans font-medium elegant-shadow"
        >
          {isChecking ? (
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <MapPin className="w-4 h-4 mr-2" />
              Check
            </>
          )}
        </Button>
      </div>

      {isInArea !== null && (
        <div
          className={`bg-card border rounded-lg p-6 text-center elegant-shadow ${
            isInArea ? "border-l-4 border-l-green-500" : "border-l-4 border-l-red-500"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            {isInArea ? <Check className="w-6 h-6 text-green-500" /> : <X className="w-6 h-6 text-red-500" />}
            <span className="font-serif font-bold text-lg">
              {isInArea ? "We Deliver to You!" : "Outside Service Area"}
            </span>
          </div>
          <p className="text-sm text-muted-foreground font-sans">
            {isInArea
              ? "Perfect! You can place an order for delivery to your area."
              : `Sorry, ${zipCode} is outside our current delivery zone. Follow us on Instagram for updates!`}
          </p>
        </div>
      )}
    </div>
  )
}
