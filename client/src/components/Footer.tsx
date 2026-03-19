import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#2D241E] text-[#FDFBF7] pt-24 pb-12 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl flex items-center justify-center group/logo hover:scale-105 transition-transform duration-500">
                <img src="/images/logo.png" alt="KARPF Logo" className="h-12 w-auto object-contain" />
              </div>
            </div>
            <p className="text-[#D7CCC8] text-sm leading-relaxed font-light max-w-xs">
              Wir gestalten Gärten, die Geschichten erzählen. Mit Respekt vor der Natur und Liebe zum Handwerk schaffen wir Orte der Ruhe und Inspiration.
            </p>
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#D7CCC8] hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#D7CCC8] hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8 text-white">Leistungen</h4>
            <ul className="space-y-4">
              {[
                { name: "Gartengestaltung", href: "/services/gartengestaltung" },
                { name: "Landschaftsbau", href: "/services/landschaftsbau" },
                { name: "Pflanzenpflege", href: "/services/pflanzenpflege" },
                { name: "Baumschnitt", href: "/services/baumschnitt" },
                { name: "Terrassenbau", href: "/services/terrassenbau" },
                { name: "Rollrasen", href: "/services/rollrasen" }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#D7CCC8] hover:text-primary transition-colors text-sm flex items-center gap-3 group font-light"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-primary transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8 text-white">Kontakt</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div className="space-y-3">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Schlüsselackerstrasse+12b,+5614+Sarmenstorf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D7CCC8] text-sm font-light hover:text-white transition-colors block"
                  >
                    <span className="font-medium text-white/90">Büro:</span><br />
                    Schlüsselackerstrasse 12b, 5614 Sarmenstorf
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Brunnmattstrasse,+5614+Sarmenstorf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D7CCC8] text-sm font-light hover:text-white transition-colors block"
                  >
                    <span className="font-medium text-white/90">Magazin:</span><br />
                    Brunnmattstrasse, 5614 Sarmenstorf
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:0566673676" className="text-[#D7CCC8] text-sm font-light group-hover:text-white transition-colors">056 667 36 76</a>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@karpfgarten.ch" className="text-[#D7CCC8] text-sm font-light group-hover:text-white transition-colors">info@karpfgarten.ch</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#D7CCC8]/60 text-xs font-light">
            © {new Date().getFullYear()} KARPF. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a href="https://gross-ict.ch" target="_blank" rel="noopener noreferrer" className="text-[#D7CCC8]/60 hover:text-white text-xs transition-colors font-light">
              Realisation: Gross ICT
            </a>
            <span className="text-[#D7CCC8]/60 text-xs">•</span>
            <Link href="/imprint" className="text-[#D7CCC8]/60 hover:text-white text-xs transition-colors font-light">Impressum</Link>
            <Link href="/privacy" className="text-[#D7CCC8]/60 hover:text-white text-xs transition-colors font-light">Datenschutz</Link>
            <Link href="/terms" className="text-[#D7CCC8]/60 hover:text-white text-xs transition-colors font-light">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
