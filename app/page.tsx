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
} as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
} as const;

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
} as const;

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
} as const;

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 15, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury dining experience"
              fill
              className="object-cover opacity-50 dark:opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="container relative z-10 mx-auto px-4 text-center mt-20"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4 px-4 py-1 border border-primary/30 rounded-full bg-primary/5 backdrop-blur-sm">
              <span className="text-primary text-xs uppercase tracking-[0.4em] font-medium">Est. 1998</span>
            </motion.div>
            <motion.h1 
              variants={fadeInUp}
              className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 drop-shadow-2xl"
            >
              HASOO <span className="text-primary text-glow italic">KHAN</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-3xl text-foreground/90 font-light mb-12 max-w-3xl mx-auto tracking-[0.1em] drop-shadow-md leading-relaxed"
            >
              Where <span className="text-primary">Heritage</span> Meets <span className="text-primary">Modern</span> Gastronomy
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-20"
            >
              <Button size="lg" className="rounded-none bg-primary bg-gold-gradient text-primary-foreground hover:brightness-110 w-full sm:w-auto text-xl px-12 py-8 shadow-[0_20px_50px_rgba(212,175,55,0.3)] transition-all duration-500 group">
                <a href="#menu" className="flex items-center gap-2">
                  View Menu 
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>&rarr;</motion.span>
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-none border-primary/50 text-primary hover:bg-primary/5 w-full sm:w-auto text-xl px-12 py-8 backdrop-blur-md transition-all duration-500">
                <a href="#reservations">Book a Table</a>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
          >
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-px h-16 bg-gradient-to-b from-primary to-transparent"
            />
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-40 bg-card overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-24 items-center">
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInLeft}
                className="relative group"
              >
                <div className="relative h-[600px] md:h-[750px] rounded-sm overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                  <Image
                    src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop"
                    alt="Restaurant Ambiance"
                    fill
                    className="object-cover transition-transform duration-[2.5s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-primary/40 group-hover:w-40 group-hover:h-40 transition-all duration-700"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-primary/40 group-hover:w-40 group-hover:h-40 transition-all duration-700"></div>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="space-y-10"
              >
                <motion.div variants={fadeInUp} className="space-y-4">
                  <span className="text-primary uppercase tracking-[0.5em] text-sm font-semibold inline-block">The Legacy</span>
                  <h2 className="font-heading text-5xl md:text-7xl font-bold leading-tight">Crafting Memories <br/><span className="text-primary text-glow italic">Since 1998</span></h2>
                  <div className="h-1.5 w-32 bg-gold-gradient rounded-full"></div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="space-y-6">
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light first-letter:text-5xl first-letter:font-heading first-letter:mr-3 first-letter:float-left first-letter:text-primary">
                    Founded with a passion for exquisite culinary traditions, HASOO KHAN redefines the fine dining landscape. We bring together age-old recipes and contemporary presentation to create an unforgettable gastronomic journey.
                  </p>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light italic border-l-4 border-primary/30 pl-8">
                    "Our master chefs carefully select the finest seasonal ingredients, crafting dishes that are not just meals, but memories. The elegant ambiance, adorned in midnight and gold, reflects our commitment to luxury."
                  </p>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="pt-8 flex items-center gap-10">
                  <Image
                    src="https://images.unsplash.com/photo-1583394838006-acd97d643809?q=80&w=300&auto=format&fit=crop"
                    alt="Chef Signature"
                    width={220}
                    height={85}
                    className="opacity-70 dark:invert grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
                  />
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* MENU SECTION */}
        <section id="menu" className="py-40 relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-10 pointer-events-none"></div>
          
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-24"
            >
              <span className="text-primary uppercase tracking-[0.5em] text-sm font-semibold mb-4 block">Exquisite Tastes</span>
              <h2 className="font-heading text-5xl md:text-7xl font-bold mb-6">Culinary <span className="text-primary text-glow italic">Masterpieces</span></h2>
              <div className="h-1.5 w-40 bg-gold-gradient mx-auto mb-8 rounded-full"></div>
              <p className="text-muted-foreground max-w-3xl mx-auto text-xl font-light leading-relaxed">
                Discover a menu designed to delight the senses, featuring a curated selection of signature dishes prepared with precision and passion.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
              {/* Starters */}
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="space-y-10"
              >
                <motion.div variants={fadeInUp} className="flex items-center gap-4">
                   <h3 className="font-heading text-3xl font-semibold text-primary whitespace-nowrap">Starters</h3>
                   <div className="h-px w-full bg-gradient-to-r from-primary/30 to-transparent"></div>
                </motion.div>
                {[
                  { name: "Truffle Arancini", price: "$18", desc: "Crispy risotto balls, wild mushrooms, black truffle aioli" },
                  { name: "Wagyu Carpaccio", price: "$24", desc: "Thinly sliced premium beef, parmesan shavings, capers" },
                  { name: "Seared Scallops", price: "$22", desc: "Cauliflower purée, crispy pancetta, herb oil" }
                ].map((item, i) => (
                  <motion.div variants={fadeInUp} key={i} className="group cursor-pointer">
                    <div className="flex justify-between items-baseline mb-3">
                      <h4 className="font-semibold text-xl group-hover:text-primary transition-all duration-300 group-hover:translate-x-1">{item.name}</h4>
                      <div className="flex-1 border-b border-dotted border-primary/20 mx-4"></div>
                      <span className="text-primary font-bold text-lg">{item.price}</span>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed font-light italic">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Main Course */}
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="space-y-10"
              >
                <motion.div variants={fadeInUp} className="flex items-center gap-4">
                   <h3 className="font-heading text-3xl font-semibold text-primary whitespace-nowrap">Main Course</h3>
                   <div className="h-px w-full bg-gradient-to-r from-primary/30 to-transparent"></div>
                </motion.div>
                {[
                  { name: "Gold Leaf Steak", price: "$85", desc: "Prime ribeye, 24k gold leaf, bone marrow jus" },
                  { name: "Pan-Roasted Halibut", price: "$42", desc: "Saffron risotto, asparagus, lemon butter sauce" },
                  { name: "Duck Confit", price: "$38", desc: "Slow-cooked duck leg, sweet potato mash, cherry gastrique" }
                ].map((item, i) => (
                  <motion.div variants={fadeInUp} key={i} className="group cursor-pointer">
                    <div className="flex justify-between items-baseline mb-3">
                      <h4 className="font-semibold text-xl group-hover:text-primary transition-all duration-300 group-hover:translate-x-1">{item.name}</h4>
                      <div className="flex-1 border-b border-dotted border-primary/20 mx-4"></div>
                      <span className="text-primary font-bold text-lg">{item.price}</span>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed font-light italic">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Desserts */}
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="space-y-10"
              >
                <motion.div variants={fadeInUp} className="flex items-center gap-4">
                   <h3 className="font-heading text-3xl font-semibold text-primary whitespace-nowrap">Desserts</h3>
                   <div className="h-px w-full bg-gradient-to-r from-primary/30 to-transparent"></div>
                </motion.div>
                {[
                  { name: "Dark Chocolate Sphere", price: "$16", desc: "Valrhona chocolate, raspberry coulis, gold dust" },
                  { name: "Vanilla Bean Panna Cotta", price: "$14", desc: "Pistachio crumble, fresh mixed berries" },
                  { name: "Tiramisu Elegance", price: "$15", desc: "Espresso soaked ladyfingers, mascarpone cream" }
                ].map((item, i) => (
                  <motion.div variants={fadeInUp} key={i} className="group cursor-pointer">
                    <div className="flex justify-between items-baseline mb-3">
                      <h4 className="font-semibold text-xl group-hover:text-primary transition-all duration-300 group-hover:translate-x-1">{item.name}</h4>
                      <div className="flex-1 border-b border-dotted border-primary/20 mx-4"></div>
                      <span className="text-primary font-bold text-lg">{item.price}</span>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed font-light italic">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Drinks */}
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="space-y-10"
              >
                <motion.div variants={fadeInUp} className="flex items-center gap-4">
                   <h3 className="font-heading text-3xl font-semibold text-primary whitespace-nowrap">Drinks</h3>
                   <div className="h-px w-full bg-gradient-to-r from-primary/30 to-transparent"></div>
                </motion.div>
                {[
                  { name: "Signature Old Fashioned", price: "$20", desc: "Smoked bourbon, orange bitters, large ice sphere" },
                  { name: "Golden Martini", price: "$22", desc: "Premium vodka, dry vermouth, gold leaf olive" },
                  { name: "Artisan Wine Pairing", price: "$45", desc: "Curated selection to match your main course" }
                ].map((item, i) => (
                  <motion.div variants={fadeInUp} key={i} className="group cursor-pointer">
                    <div className="flex justify-between items-baseline mb-3">
                      <h4 className="font-semibold text-xl group-hover:text-primary transition-all duration-300 group-hover:translate-x-1">{item.name}</h4>
                      <div className="flex-1 border-b border-dotted border-primary/20 mx-4"></div>
                      <span className="text-primary font-bold text-lg">{item.price}</span>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed font-light italic">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-24 text-center"
            >
               <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-gold-gradient hover:text-primary-foreground px-12 py-8 text-xl transition-all duration-500 shadow-xl">
                Download Full Menu
              </Button>
            </motion.div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section id="gallery" className="py-40 bg-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-24"
            >
              <span className="text-primary uppercase tracking-[0.5em] text-sm font-semibold mb-4 block">Aesthetics</span>
              <h2 className="font-heading text-5xl md:text-7xl font-bold mb-6">Visual <span className="text-primary text-glow italic">Feast</span></h2>
              <div className="h-1.5 w-32 bg-gold-gradient mx-auto rounded-full"></div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                "/image-1.jpg",
                "/image-2.jpg",
                "/image-3.jpg",
                "/image-4.jpg",
                "/image-5.jpg",
                "/image-6.jpg",
              ].map((src, i) => (
                <motion.div variants={fadeInUp} key={i} className="relative h-[450px] overflow-hidden group rounded-sm shadow-2xl">
                  <Image
                    src={src}
                    alt={`Gallery image ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-end pb-12 backdrop-blur-[2px]">
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-center"
                    >
                      <h4 className="text-primary font-heading text-2xl mb-4 tracking-widest uppercase">Gastronomy</h4>
                      <span className="inline-block border border-primary text-primary px-8 py-3 uppercase tracking-[0.4em] text-xs font-bold hover:bg-gold-gradient hover:text-primary-foreground hover:border-transparent transition-all duration-500 cursor-pointer shadow-lg">
                        View Story
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* RESERVATIONS SECTION */}
        <section id="reservations" className="py-40 relative overflow-hidden">
          <motion.div 
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute inset-0 z-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
              alt="Restaurant background"
              fill
              className="object-cover opacity-15 dark:opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>
          </motion.div>
          <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className="bg-background/90 backdrop-blur-2xl border-primary/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-2 bg-gold-gradient"></div>
                <CardHeader className="text-center pb-12 pt-16">
                  <span className="text-primary uppercase tracking-[0.5em] text-sm font-semibold mb-4 block">Reservations</span>
                  <CardTitle className="font-heading text-5xl md:text-6xl font-bold text-primary mb-6 text-glow italic">Book a Table</CardTitle>
                  <CardDescription className="text-xl font-light max-w-2xl mx-auto leading-relaxed">Reserve your spot for an unforgettable dining experience. We look forward to hosting you.</CardDescription>
                </CardHeader>
                <CardContent className="px-8 md:px-16 pb-20">
                  <form className="space-y-12">
                    <div className="grid sm:grid-cols-2 gap-12">
                      <div className="space-y-4">
                        <Label htmlFor="name" className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Full Name</Label>
                        <Input id="name" placeholder="John Doe" className="bg-transparent border-b-2 border-t-0 border-l-0 border-r-0 rounded-none border-primary/20 focus-visible:ring-0 focus-visible:border-primary px-0 text-xl font-light placeholder:text-muted-foreground/30 transition-all duration-500" />
                      </div>
                      <div className="space-y-4">
                        <Label htmlFor="email" className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Email Address</Label>
                        <Input id="email" type="email" placeholder="john@example.com" className="bg-transparent border-b-2 border-t-0 border-l-0 border-r-0 rounded-none border-primary/20 focus-visible:ring-0 focus-visible:border-primary px-0 text-xl font-light placeholder:text-muted-foreground/30 transition-all duration-500" />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-3 gap-12">
                      <div className="space-y-4">
                        <Label htmlFor="date" className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Date</Label>
                        <Input id="date" type="date" className="bg-transparent border-b-2 border-t-0 border-l-0 border-r-0 rounded-none border-primary/20 focus-visible:ring-0 focus-visible:border-primary px-0 text-xl font-light transition-all duration-500" />
                      </div>
                      <div className="space-y-4">
                        <Label htmlFor="time" className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Time</Label>
                        <Input id="time" type="time" className="bg-transparent border-b-2 border-t-0 border-l-0 border-r-0 rounded-none border-primary/20 focus-visible:ring-0 focus-visible:border-primary px-0 text-xl font-light transition-all duration-500" />
                      </div>
                      <div className="space-y-4">
                        <Label htmlFor="guests" className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Guests</Label>
                        <select id="guests" className="flex h-[50px] w-full border-b-2 border-t-0 border-l-0 border-r-0 border-primary/20 bg-transparent px-0 py-2 text-xl font-light focus-visible:outline-none focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-500">
                          <option value="1">1 Person</option>
                          <option value="2">2 People</option>
                          <option value="3">3 People</option>
                          <option value="4">4 People</option>
                          <option value="5">5+ People</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Label htmlFor="requests" className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Special Requests</Label>
                      <Textarea id="requests" placeholder="Any dietary requirements or special occasions?" className="bg-transparent border-b-2 border-t-0 border-l-0 border-r-0 rounded-none border-primary/20 focus-visible:ring-0 focus-visible:border-primary px-0 min-h-[120px] text-xl font-light placeholder:text-muted-foreground/30 resize-none transition-all duration-500" />
                    </div>

                    <Button type="submit" className="w-full rounded-none bg-gold-gradient text-primary-foreground hover:opacity-90 text-2xl py-10 mt-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-1">
                      Confirm Reservation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-40 bg-card overflow-hidden relative">
           <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-24"
            >
              <span className="text-primary uppercase tracking-[0.5em] text-sm font-semibold mb-4 block">Experiences</span>
              <h2 className="font-heading text-5xl md:text-7xl font-bold mb-6">Guest <span className="text-primary text-glow italic">Voices</span></h2>
              <div className="h-1.5 w-32 bg-gold-gradient mx-auto rounded-full"></div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-6xl mx-auto"
            >
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-8 md:-ml-12">
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
                    <CarouselItem key={i} className="pl-8 md:pl-12 md:basis-1/2 lg:basis-1/2">
                      <div className="p-4 h-full">
                        <Card className="bg-background border-primary/10 shadow-2xl hover:shadow-primary/5 transition-all duration-700 h-full relative group overflow-hidden">
                          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                             <Star className="h-24 w-24 fill-primary text-primary" />
                          </div>
                          <CardContent className="p-12 flex flex-col justify-between h-full space-y-10 relative z-10">
                            <div className="flex gap-2 text-primary">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-6 w-6 fill-current" />
                              ))}
                            </div>
                            <p className="text-muted-foreground italic text-2xl leading-relaxed font-light">
                              "{testimonial.review}"
                            </p>
                            <div className="border-t border-primary/20 pt-8 flex items-center justify-between">
                              <div>
                                <p className="font-semibold text-foreground text-2xl tracking-tight">{testimonial.name}</p>
                                <p className="text-sm text-primary tracking-[0.3em] uppercase mt-2 font-bold">{testimonial.role}</p>
                              </div>
                              <div className="w-12 h-px bg-primary/30"></div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-16 gap-6">
                  <CarouselPrevious className="position-static transform-none h-16 w-16 border-primary/30 hover:bg-gold-gradient hover:text-primary-foreground hover:border-transparent transition-all duration-500 shadow-lg" />
                  <CarouselNext className="position-static transform-none h-16 w-16 border-primary/30 hover:bg-gold-gradient hover:text-primary-foreground hover:border-transparent transition-all duration-500 shadow-lg" />
                </div>
              </Carousel>
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-32 items-center">
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-12"
              >
                <motion.div variants={fadeInUp}>
                  <span className="text-primary uppercase tracking-[0.5em] text-sm font-semibold mb-4 block">Connect</span>
                  <h2 className="font-heading text-5xl md:text-7xl font-bold mb-8">Get in <span className="text-primary text-glow italic">Touch</span></h2>
                  <div className="h-1.5 w-32 bg-gold-gradient mb-10 rounded-full"></div>
                  <p className="text-muted-foreground text-2xl font-light leading-relaxed">
                    Have questions or need assistance? Our dedicated team is here to ensure your experience is nothing short of perfect.
                  </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <motion.div variants={fadeInUp}>
                    <Card className="bg-card hover:bg-primary/5 transition-all duration-500 border-primary/10 group cursor-pointer h-full">
                      <CardContent className="p-10">
                        <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-500">
                           <Star className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-all duration-500" />
                        </div>
                        <h3 className="font-semibold text-2xl mb-4 tracking-tight">Private Events</h3>
                        <p className="text-muted-foreground mb-8 text-lg font-light leading-relaxed">Host your next exclusive event in our private dining room.</p>
                        <Button variant="link" className="p-0 h-auto text-primary text-xl font-bold hover:tracking-[0.1em] transition-all duration-500 group-hover:text-glow">Inquire Now &rarr;</Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <Card className="bg-card hover:bg-primary/5 transition-all duration-500 border-primary/10 group cursor-pointer h-full">
                      <CardContent className="p-10">
                        <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-500">
                           <Star className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-all duration-500" />
                        </div>
                        <h3 className="font-semibold text-2xl mb-4 tracking-tight">Gift Cards</h3>
                        <p className="text-muted-foreground mb-8 text-lg font-light leading-relaxed">Give the gift of an unforgettable culinary experience.</p>
                        <Button variant="link" className="p-0 h-auto text-primary text-xl font-bold hover:tracking-[0.1em] transition-all duration-500 group-hover:text-glow">Purchase &rarr;</Button>
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
                className="h-[650px] w-full rounded-sm overflow-hidden border border-primary/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative group"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl z-0 transition-all duration-700 group-hover:scale-150"></div>
                {/* Embedded Map Placeholder - Using a stylish map image for aesthetics */}
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
                    alt="Location Map"
                    fill
                    className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/40 backdrop-blur-[4px] flex items-center justify-center transition-all duration-700 group-hover:bg-background/20 group-hover:backdrop-blur-none">
                    <div className="bg-background/95 p-12 rounded-sm shadow-[0_30px_60px_-12px_rgba(0,0,0,0.4)] text-center border-t-8 border-primary transform transition-all duration-700 group-hover:-translate-y-4 max-w-sm w-full mx-4 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                      <h4 className="font-heading text-3xl font-bold mb-4 tracking-widest uppercase">HASOO KHAN</h4>
                      <p className="text-muted-foreground text-xl mb-10 font-light leading-relaxed">KARACHI, PAKISTAN</p>
                      <Button className="w-full rounded-none bg-gold-gradient text-primary-foreground hover:opacity-90 text-xl py-8 font-bold shadow-xl transition-all duration-500">
                        Get Directions
                      </Button>
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
