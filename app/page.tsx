"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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

// Animation Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury dining experience"
              fill
              className="object-cover opacity-40 dark:opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="container relative z-10 mx-auto px-4 text-center mt-20"
          >
            <motion.h1 
              variants={fadeInUp}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 drop-shadow-xl"
            >
              HASOO <span className="text-primary text-glow">KHAN</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-foreground/80 font-light mb-10 max-w-2xl mx-auto tracking-wide drop-shadow-md"
            >
              Authentic Taste, Modern Experience
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto text-lg px-8 py-6 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all">
                <a href="#menu">View Menu</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-none border-primary text-primary hover:bg-primary/10 w-full sm:w-auto text-lg px-8 py-6 backdrop-blur-sm">
                <a href="#reservations">Book a Table</a>
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-32 bg-card overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInLeft}
                className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden group shadow-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop"
                  alt="Restaurant Ambiance"
                  fill
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                />
                <div className="absolute inset-0 border-[3px] border-primary/50 m-6 rounded-lg pointer-events-none transition-all duration-700 group-hover:m-4 group-hover:border-primary/80"></div>
              </motion.div>
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="space-y-8"
              >
                <motion.div variants={fadeInUp}>
                  <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Story</h2>
                  <div className="h-1 w-24 bg-primary mb-6"></div>
                </motion.div>
                <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                  Founded with a passion for exquisite culinary traditions, HASOO KHAN redefines the fine dining landscape. We bring together age-old recipes and contemporary presentation to create an unforgettable gastronomic journey.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                  Our master chefs carefully select the finest seasonal ingredients, crafting dishes that are not just meals, but memories. The elegant ambiance, adorned in black and gold, reflects our commitment to luxury and unparalleled service.
                </motion.p>
                <motion.div variants={fadeInUp} className="pt-8">
                  <Image
                    src="https://images.unsplash.com/photo-1583394838006-acd97d643809?q=80&w=300&auto=format&fit=crop"
                    alt="Chef Signature"
                    width={180}
                    height={70}
                    className="opacity-80 dark:invert transition-opacity hover:opacity-100"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* MENU SECTION */}
        <section id="menu" className="py-32 relative">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-20"
            >
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Culinary Masterpieces</h2>
              <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Discover a menu designed to delight the senses, featuring a curated selection of signature dishes prepared with precision and passion.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Starters */}
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="space-y-8"
              >
                <motion.h3 variants={fadeInUp} className="font-heading text-3xl font-semibold text-primary border-b border-border pb-4">Starters</motion.h3>
                {[
                  { name: "Truffle Arancini", price: "$18", desc: "Crispy risotto balls, wild mushrooms, black truffle aioli" },
                  { name: "Wagyu Carpaccio", price: "$24", desc: "Thinly sliced premium beef, parmesan shavings, capers" },
                  { name: "Seared Scallops", price: "$22", desc: "Cauliflower purée, crispy pancetta, herb oil" }
                ].map((item, i) => (
                  <motion.div variants={fadeInUp} key={i} className="group cursor-pointer">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">{item.name}</h4>
                      <span className="text-primary font-medium border-b border-transparent group-hover:border-primary transition-colors">{item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Main Course */}
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="space-y-8"
              >
                <motion.h3 variants={fadeInUp} className="font-heading text-3xl font-semibold text-primary border-b border-border pb-4">Main Course</motion.h3>
                {[
                  { name: "Gold Leaf Steak", price: "$85", desc: "Prime ribeye, 24k gold leaf, bone marrow jus" },
                  { name: "Pan-Roasted Halibut", price: "$42", desc: "Saffron risotto, asparagus, lemon butter sauce" },
                  { name: "Duck Confit", price: "$38", desc: "Slow-cooked duck leg, sweet potato mash, cherry gastrique" }
                ].map((item, i) => (
                  <motion.div variants={fadeInUp} key={i} className="group cursor-pointer">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">{item.name}</h4>
                      <span className="text-primary font-medium border-b border-transparent group-hover:border-primary transition-colors">{item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Desserts */}
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="space-y-8"
              >
                <motion.h3 variants={fadeInUp} className="font-heading text-3xl font-semibold text-primary border-b border-border pb-4">Desserts</motion.h3>
                {[
                  { name: "Dark Chocolate Sphere", price: "$16", desc: "Valrhona chocolate, raspberry coulis, gold dust" },
                  { name: "Vanilla Bean Panna Cotta", price: "$14", desc: "Pistachio crumble, fresh mixed berries" },
                  { name: "Tiramisu Elegance", price: "$15", desc: "Espresso soaked ladyfingers, mascarpone cream" }
                ].map((item, i) => (
                  <motion.div variants={fadeInUp} key={i} className="group cursor-pointer">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">{item.name}</h4>
                      <span className="text-primary font-medium border-b border-transparent group-hover:border-primary transition-colors">{item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Drinks */}
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="space-y-8"
              >
                <motion.h3 variants={fadeInUp} className="font-heading text-3xl font-semibold text-primary border-b border-border pb-4">Drinks</motion.h3>
                {[
                  { name: "Signature Old Fashioned", price: "$20", desc: "Smoked bourbon, orange bitters, large ice sphere" },
                  { name: "Golden Martini", price: "$22", desc: "Premium vodka, dry vermouth, gold leaf olive" },
                  { name: "Artisan Wine Pairing", price: "$45", desc: "Curated selection to match your main course" }
                ].map((item, i) => (
                  <motion.div variants={fadeInUp} key={i} className="group cursor-pointer">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">{item.name}</h4>
                      <span className="text-primary font-medium border-b border-transparent group-hover:border-primary transition-colors">{item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-20 text-center"
            >
               <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-6 text-lg transition-all duration-300">
                Download Full Menu
              </Button>
            </motion.div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section id="gallery" className="py-32 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Visual Feast</h2>
              <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                "/image-1.jpg",
                "/image-2.jpg",
                "/image-3.jpg",
                "/image-4.jpg",
                "/image-5.jpg",
                "/image-6.jpg",
              ].map((src, i) => (
                <motion.div variants={fadeInUp} key={i} className="relative h-[350px] overflow-hidden group rounded-sm shadow-lg">
                  <Image
                    src={src}
                    alt={`Gallery image ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="text-primary border border-primary px-6 py-3 uppercase tracking-[0.3em] text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-pointer">
                      View
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* RESERVATIONS SECTION */}
        <section id="reservations" className="py-32 relative overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute inset-0 z-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
              alt="Restaurant background"
              fill
              className="object-cover opacity-10 dark:opacity-5"
            />
          </motion.div>
          <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className="bg-background/80 backdrop-blur-xl border-border/50 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                <CardHeader className="text-center pb-8 pt-10">
                  <CardTitle className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">Book a Table</CardTitle>
                  <CardDescription className="text-lg">Reserve your spot for an unforgettable dining experience.</CardDescription>
                </CardHeader>
                <CardContent className="px-6 md:px-10 pb-10">
                  <form className="space-y-8">
                    <div className="grid sm:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="text-muted-foreground uppercase tracking-wider text-xs font-semibold">Full Name</Label>
                        <Input id="name" placeholder="John Doe" className="bg-background border-b-2 border-t-0 border-l-0 border-r-0 rounded-none border-border focus-visible:ring-0 focus-visible:border-primary px-0 text-lg" />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-muted-foreground uppercase tracking-wider text-xs font-semibold">Email Address</Label>
                        <Input id="email" type="email" placeholder="john@example.com" className="bg-background border-b-2 border-t-0 border-l-0 border-r-0 rounded-none border-border focus-visible:ring-0 focus-visible:border-primary px-0 text-lg" />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-3 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="date" className="text-muted-foreground uppercase tracking-wider text-xs font-semibold">Date</Label>
                        <Input id="date" type="date" className="bg-background border-b-2 border-t-0 border-l-0 border-r-0 rounded-none border-border focus-visible:ring-0 focus-visible:border-primary px-0 text-lg" />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="time" className="text-muted-foreground uppercase tracking-wider text-xs font-semibold">Time</Label>
                        <Input id="time" type="time" className="bg-background border-b-2 border-t-0 border-l-0 border-r-0 rounded-none border-border focus-visible:ring-0 focus-visible:border-primary px-0 text-lg" />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="guests" className="text-muted-foreground uppercase tracking-wider text-xs font-semibold">Guests</Label>
                        <select id="guests" className="flex h-[42px] w-full border-b-2 border-t-0 border-l-0 border-r-0 border-border bg-background px-0 py-2 text-lg focus-visible:outline-none focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50">
                          <option value="1">1 Person</option>
                          <option value="2">2 People</option>
                          <option value="3">3 People</option>
                          <option value="4">4 People</option>
                          <option value="5">5+ People</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="requests" className="text-muted-foreground uppercase tracking-wider text-xs font-semibold">Special Requests</Label>
                      <Textarea id="requests" placeholder="Any dietary requirements or special occasions?" className="bg-background border-b-2 border-t-0 border-l-0 border-r-0 rounded-none border-border focus-visible:ring-0 focus-visible:border-primary px-0 min-h-[100px] text-lg resize-none" />
                    </div>

                    <Button type="submit" className="w-full rounded-none bg-primary text-primary-foreground hover:bg-primary/90 text-xl py-8 mt-4 shadow-lg hover:shadow-primary/25 transition-all">
                      Confirm Reservation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-32 bg-card overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-20"
            >
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Guest Experiences</h2>
              <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-5xl mx-auto"
            >
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4 md:-ml-6">
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
                    <CarouselItem key={i} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/2">
                      <div className="p-2 h-full">
                        <Card className="bg-background border-border shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                          <CardContent className="p-10 flex flex-col justify-between h-full space-y-8">
                            <div className="flex gap-1 text-primary">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-current" />
                              ))}
                            </div>
                            <p className="text-muted-foreground italic text-xl leading-relaxed">
                              "{testimonial.review}"
                            </p>
                            <div className="border-t border-border pt-6">
                              <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
                              <p className="text-sm text-primary tracking-wider uppercase mt-1">{testimonial.role}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-12 gap-4">
                  <CarouselPrevious className="position-static transform-none h-12 w-12 border-primary/50 hover:bg-primary hover:text-primary-foreground" />
                  <CarouselNext className="position-static transform-none h-12 w-12 border-primary/50 hover:bg-primary hover:text-primary-foreground" />
                </div>
              </Carousel>
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-10"
              >
                <motion.div variants={fadeInUp}>
                  <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Get in Touch</h2>
                  <div className="h-1 w-24 bg-primary mb-6"></div>
                  <p className="text-muted-foreground text-xl font-light">
                    Have questions or need assistance? We're here to help make your experience perfect.
                  </p>
                </motion.div>

                <div className="space-y-6">
                  <motion.div variants={fadeInUp}>
                    <Card className="bg-card hover:bg-card/80 transition-colors border-border/50">
                      <CardContent className="p-8">
                        <h3 className="font-semibold text-xl mb-3">Private Events</h3>
                        <p className="text-muted-foreground mb-6 text-lg">Host your next exclusive event in our private dining room.</p>
                        <Button variant="link" className="p-0 h-auto text-primary text-lg font-semibold hover:tracking-wide transition-all">Inquire Now &rarr;</Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <Card className="bg-card hover:bg-card/80 transition-colors border-border/50">
                      <CardContent className="p-8">
                        <h3 className="font-semibold text-xl mb-3">Gift Cards</h3>
                        <p className="text-muted-foreground mb-6 text-lg">Give the gift of an unforgettable culinary experience.</p>
                        <Button variant="link" className="p-0 h-auto text-primary text-lg font-semibold hover:tracking-wide transition-all">Purchase &rarr;</Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={slideInRight}
                className="h-[500px] w-full rounded-lg overflow-hidden border border-border shadow-2xl"
              >
                {/* Embedded Map Placeholder - Using a stylish map image for aesthetics */}
                <div className="relative w-full h-full group">
                  <Image
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
                    alt="Location Map"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/50 backdrop-blur-[3px] flex items-center justify-center transition-all duration-500 group-hover:bg-background/20">
                    <div className="bg-background/95 p-10 rounded-lg shadow-2xl text-center border-t-4 border-primary transform transition-transform duration-500 group-hover:-translate-y-2">
                      <h4 className="font-heading text-2xl font-bold mb-3 tracking-wider">HASOO KHAN</h4>
                      <p className="text-muted-foreground text-lg mb-6 leading-relaxed">123 Culinary Avenue<br/>Food District, FD 10023</p>
                      <Button className="w-full rounded-none bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6">Get Directions</Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
