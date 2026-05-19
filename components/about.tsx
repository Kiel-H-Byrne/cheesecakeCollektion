import { Heart, Leaf, Award, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import about1 from "@/public/about-1.jpg"
import about2 from "@/public/about-2.jpg"
import about3 from "@/public/about-3.jpg"

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1">
            Our Legacy
          </Badge>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-balance">
            Crafted with <span className="text-primary italic">Passion</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed max-w-2xl mx-auto font-sans font-light">
            Born from a passion for perfection, The Cheesecake Collection brings you artisanal creations that redefine indulgence. Whether you're celebrating a <strong className="text-primary font-bold">baby shower</strong>, <strong className="text-primary font-bold">graduation</strong>, or <strong className="text-primary font-bold">birthday</strong>, our signature bejeweled cheesecakes add a touch of luxury to every event in the <strong className="text-primary font-bold">Atlanta</strong> and <strong className="text-primary font-bold">DMV</strong> areas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative group">
            <div className="relative h-[500px] rounded-3xl overflow-hidden elegant-shadow-lg transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src={about1}
                alt="Gourmet cheesecake catering for baby showers and graduations in Atlanta"
                fill
                className="object-cover"
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden border-8 border-background elegant-shadow hidden md:block">
              <Image
                src={about2}
                alt="Close up of bejeweled cheesecake cup-cake for birthdays"
                fill
                className="object-cover"
                placeholder="blur"
                sizes="192px"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold mb-2">Family Crafted</h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Every cup-cake is made with love by our family, using recipes passed down and perfected over generations. We believe in the power of tradition.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold mb-2">Pure Ingredients</h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  We source only the finest natural ingredients—real fruit, premium chocolate, and farm-fresh cream—ensuring every bite is pure bliss.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold mb-2">Gourmet Quality</h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Each cup-cake is a bejeweled masterpiece, combining traditional baking techniques with innovative, trendy flavors.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-96 w-full rounded-3xl overflow-hidden elegant-shadow">
          <Image
            src={about3}
            alt="The Cheesecake Collection - Premium event dessert catering Atlanta and DMV"
            fill
            className="object-cover"
            placeholder="blur"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center px-6">
              <Sparkles className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="text-3xl md:text-5xl font-serif italic text-white drop-shadow-lg">
                "Indulge in the collection you deserve."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
