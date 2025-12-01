import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/aurelie17112005', label: 'GitHub' },
    { icon: Linkedin, href: 'www.linkedin.com/in/dènadi-aurélie-azonnoudo-07625b2a1', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:denadiaurelie@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-white border-t border-[#F5F1EC] py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Colonne 1 - À propos */}
          <div>
            <h4 className="text-[#7A5C50] mb-4">Aurélie AZONNOUDO</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Développeuse FullStack passionnée, spécialisée dans la création 
              d'applications web performantes et élégantes.
            </p>
          </div>

          {/* Colonne 2 - Navigation rapide */}
          <div>
            <h4 className="text-[#7A5C50] mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {['Accueil', 'À propos', 'Projets', 'Compétences', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase().replace('à propos', 'about'));
                      if (element) {
                        const offset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-600 hover:text-[#7A5C50] transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 - Réseaux sociaux */}
          <div>
            <h4 className="text-[#7A5C50] mb-4">Suivez-moi</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-[#F5F1EC] flex items-center justify-center text-[#7A5C50] hover:bg-[#7A5C50] hover:text-white transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-[#F5F1EC] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>
              © {currentYear} Aurélie AZONNOUDO. Tous droits réservés.
            </p>
            <p className="flex items-center gap-2">
              Conçu avec <Heart size={16} className="text-[#7A5C50] fill-current" /> et passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
