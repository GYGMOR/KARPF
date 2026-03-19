'use client'

import { motion } from "framer-motion";
import { Users, Award, Leaf, Heart } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="pt-32 pb-20 bg-[#FDFBF7] text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <main className="container mx-auto px-4">
        {/* Title Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#2D241E] mb-6">
            Über uns
          </h2>
          <p className="text-xl text-[#5D4E37] font-light leading-relaxed">
            Mit Leidenschaft und Erfahrung gestalten wir seit Jahren Gärten, die begeistern.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="font-display text-4xl font-bold text-[#2D241E]">
              Unsere Geschichte
            </h3>
            <p className="text-[#5D4E37] leading-relaxed">
              KARPF steht für höchste Qualität im Gartenbau. Was als kleine Familienbetrieb begann,
              hat sich zu einem führenden Unternehmen für Gartengestaltung und Landschaftsbau entwickelt.
            </p>
            <p className="text-[#5D4E37] leading-relaxed">
              Unser Team aus erfahrenen Landschaftsgärtnern verbindet traditionelles Handwerk mit modernen
              Gestaltungskonzepten. Jedes Projekt wird mit Liebe zum Detail und höchstem Qualitätsanspruch umgesetzt.
            </p>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80"
              alt="Gartenbau Arbeit"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-[#2D241E] py-20 -mx-4 md:rounded-3xl shadow-3xl mb-20">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl font-bold text-white text-center mb-16">
              Unsere Werte
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Leaf,
                  title: "Nachhaltigkeit",
                  description: "Wir setzen auf umweltfreundliche Materialien und nachhaltige Methoden."
                },
                {
                  icon: Award,
                  title: "Qualität",
                  description: "Höchste Handwerkskunst und sorgfältige Ausführung in jedem Detail."
                },
                {
                  icon: Users,
                  title: "Teamwork",
                  description: "Gemeinsam erreichen wir aussergewöhnliche Ergebnisse."
                },
                {
                  icon: Heart,
                  title: "Leidenschaft",
                  description: "Wir lieben, was wir tun - und das sieht man in jedem Projekt."
                }
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#D7CCC8] font-light">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h2 className="font-display text-4xl font-bold text-[#2D241E] text-center mb-16">
            Unser Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Erdzan Kalac",
                role: "Geschäftsführer",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
              },
              {
                name: "Mitarbeiter",
                role: "Landschaftsgärtner",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
              },
              {
                name: "Mitarbeiter",
                role: "Gartengestalter",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="relative h-80 rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-[#2D241E] mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-light">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}
