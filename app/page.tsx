import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury dining experience"
              fill
              className="object-cover opacity-40 dark:opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 text-center mt-20">
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              HASOO <span className="text-primary">KHAN</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-light mb-10 max-w-2xl mx-auto tracking-wide animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
              Authentic Taste, Modern Experience
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <Button size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto text-lg px-8 py-6">
                <a href="#menu">View Menu</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-none border-primary text-primary hover:bg-primary/10 w-full sm:w-auto text-lg px-8 py-6">
                <a href="#reservations">Book a Table</a>
              </Button>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop"
                  alt="Restaurant Ambiance"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 border-2 border-primary/50 m-4 rounded-lg pointer-events-none"></div>
              </div>
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Story</h2>
                  <div className="h-1 w-20 bg-primary mb-6"></div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded with a passion for exquisite culinary traditions, HASOO KHAN redefines the fine dining landscape. We bring together age-old recipes and contemporary presentation to create an unforgettable gastronomic journey.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our master chefs carefully select the finest seasonal ingredients, crafting dishes that are not just meals, but memories. The elegant ambiance, adorned in black and gold, reflects our commitment to luxury and unparalleled service.
                </p>
                <div className="pt-4">
                  <Image
                    src="https://images.unsplash.com/photo-1583394838006-acd97d643809?q=80&w=300&auto=format&fit=crop"
                    alt="Chef Signature"
                    width={150}
                    height={60}
                    className="opacity-80 dark:invert"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MENU SECTION */}
        <section id="menu" className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Culinary Masterpieces</h2>
              <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover a menu designed to delight the senses, featuring a curated selection of signature dishes prepared with precision and passion.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Starters */}
              <div className="space-y-6">
                <h3 className="font-heading text-2xl font-semibold text-primary border-b border-border pb-2">Starters</h3>
                {[
                  { name: "Truffle Arancini", price: "$18", desc: "Crispy risotto balls, wild mushrooms, black truffle aioli" },
                  { name: "Wagyu Carpaccio", price: "$24", desc: "Thinly sliced premium beef, parmesan shavings, capers" },
                  { name: "Seared Scallops", price: "$22", desc: "Cauliflower purée, crispy pancetta, herb oil" }
                ].map((item, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-semibold group-hover:text-primary transition-colors">{item.name}</h4>
                      <span className="text-primary font-medium">{item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Main Course */}
              <div className="space-y-6">
                <h3 className="font-heading text-2xl font-semibold text-primary border-b border-border pb-2">Main Course</h3>
                {[
                  { name: "Gold Leaf Steak", price: "$85", desc: "Prime ribeye, 24k gold leaf, bone marrow jus" },
                  { name: "Pan-Roasted Halibut", price: "$42", desc: "Saffron risotto, asparagus, lemon butter sauce" },
                  { name: "Duck Confit", price: "$38", desc: "Slow-cooked duck leg, sweet potato mash, cherry gastrique" }
                ].map((item, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-semibold group-hover:text-primary transition-colors">{item.name}</h4>
                      <span className="text-primary font-medium">{item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Desserts */}
              <div className="space-y-6">
                <h3 className="font-heading text-2xl font-semibold text-primary border-b border-border pb-2">Desserts</h3>
                {[
                  { name: "Dark Chocolate Sphere", price: "$16", desc: "Valrhona chocolate, raspberry coulis, gold dust" },
                  { name: "Vanilla Bean Panna Cotta", price: "$14", desc: "Pistachio crumble, fresh mixed berries" },
                  { name: "Tiramisu Elegance", price: "$15", desc: "Espresso soaked ladyfingers, mascarpone cream" }
                ].map((item, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-semibold group-hover:text-primary transition-colors">{item.name}</h4>
                      <span className="text-primary font-medium">{item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Drinks */}
              <div className="space-y-6">
                <h3 className="font-heading text-2xl font-semibold text-primary border-b border-border pb-2">Drinks</h3>
                {[
                  { name: "Signature Old Fashioned", price: "$20", desc: "Smoked bourbon, orange bitters, large ice sphere" },
                  { name: "Golden Martini", price: "$22", desc: "Premium vodka, dry vermouth, gold leaf olive" },
                  { name: "Artisan Wine Pairing", price: "$45", desc: "Curated selection to match your main course" }
                ].map((item, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-semibold group-hover:text-primary transition-colors">{item.name}</h4>
                      <span className="text-primary font-medium">{item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-16 text-center">
               <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary/10 px-8">
                Download Full Menu
              </Button>
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section id="gallery" className="py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Visual Feast</h2>
              <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1514361892635-6b07e31e75f3?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1581541460596-f94d97e2dbf7?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop",
              ].map((src, i) => (
                <div key={i} className="relative h-[300px] overflow-hidden group rounded-md">
                  <Image
                    src={src}
                    alt={`Gallery image ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white border border-white px-4 py-2 uppercase tracking-widest text-sm">View</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESERVATIONS SECTION */}
        <section id="reservations" className="py-24 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
              alt="Restaurant background"
              fill
              className="object-cover opacity-10 dark:opacity-5"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-4xl">
            <Card className="bg-background/80 backdrop-blur-xl border-border/50 shadow-2xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="font-heading text-4xl font-bold text-primary mb-2">Book a Table</CardTitle>
                <CardDescription className="text-lg">Reserve your spot for an unforgettable dining experience.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" className="bg-background" />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <Input id="date" type="date" className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Time</Label>
                      <Input id="time" type="time" className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guests">Guests</Label>
                      <select id="guests" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                        <option value="5">5+ People</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requests">Special Requests</Label>
                    <Textarea id="requests" placeholder="Any dietary requirements or special occasions?" className="bg-background min-h-[100px]" />
                  </div>

                  <Button type="submit" className="w-full rounded-none bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6">
                    Confirm Reservation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-24 bg-card overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Guest Experiences</h2>
              <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {[
                    {
                      name: "Sarah Jenkins",
                      review: "Absolutely phenomenal experience. The attention to detail in every dish is remarkable. The Gold Leaf Steak was a masterpiece.",
                      role: "Food Critic"
                    },
                    {
                      name: "Michael Chen",
                      review: "The ambiance is pure luxury without feeling pretentious. The staff anticipated our every need. Will definitely be returning.",
                      role: "Local Guide"
                    },
                    {
                      name: "Emma Thompson",
                      review: "We celebrated our anniversary here and it was perfect. The Truffle Arancini and the wine pairing recommendations were spot on.",
                      role: "Guest"
                    }
                  ].map((testimonial, i) => (
                    <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/2">
                      <div className="p-2">
                        <Card className="bg-background border-border shadow-sm h-full">
                          <CardContent className="p-8 flex flex-col justify-between h-full space-y-6">
                            <div className="flex gap-1 text-primary">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-current" />
                              ))}
                            </div>
                            <p className="text-muted-foreground italic text-lg leading-relaxed">
                              "{testimonial.review}"
                            </p>
                            <div>
                              <p className="font-semibold text-foreground">{testimonial.name}</p>
                              <p className="text-sm text-primary">{testimonial.role}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-8 gap-2">
                  <CarouselPrevious className="position-static transform-none" />
                  <CarouselNext className="position-static transform-none" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
                  <div className="h-1 w-20 bg-primary mb-6"></div>
                  <p className="text-muted-foreground text-lg">
                    Have questions or need assistance? We're here to help make your experience perfect.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="bg-card">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Private Events</h3>
                      <p className="text-muted-foreground mb-4">Host your next exclusive event in our private dining room.</p>
                      <Button variant="link" className="p-0 h-auto text-primary">Inquire Now &rarr;</Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-card">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Gift Cards</h3>
                      <p className="text-muted-foreground mb-4">Give the gift of an unforgettable culinary experience.</p>
                      <Button variant="link" className="p-0 h-auto text-primary">Purchase &rarr;</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="h-[400px] w-full rounded-lg overflow-hidden border border-border">
                {/* Embedded Map Placeholder - Using a stylish map image for aesthetics */}
                <div className="relative w-full h-full group">
                  <Image
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
                    alt="Location Map"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] flex items-center justify-center transition-all duration-300 group-hover:bg-background/30">
                    <div className="bg-background/90 p-6 rounded-lg shadow-xl text-center border border-primary/20">
                      <h4 className="font-semibold text-lg mb-2">HASOO KHAN</h4>
                      <p className="text-muted-foreground text-sm">123 Culinary Avenue<br/>Food District, FD 10023</p>
                      <Button className="mt-4 w-full" variant="outline">Get Directions</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
