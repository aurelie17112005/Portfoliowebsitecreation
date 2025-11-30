import { Download, ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Action de téléchargement du CV
    alert('Le téléchargement du CV va démarrer. (Fonctionnalité à connecter avec votre PDF)');
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Colonne gauche - Photo */}
          <div className="flex justify-center md:justify-end order-1 md:order-1">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#7A5C50] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDUwMDE4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Aurélie AZONNOUDO"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#7A5C50] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-4xl">👩‍💻</span>
              </div>
            </div>
          </div>

          {/* Colonne droite - Contenu */}
          <div className="order-2 md:order-2 text-center md:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-white rounded-full shadow-sm">
              <span className="text-[#7A5C50] text-sm">Disponible en alternance</span>
            </div>
            
            <h1 className="text-[#7A5C50] mb-3">
              Aurélie AZONNOUDO
            </h1>
            
            <h2 className="text-gray-700 mb-6">
              Développeuse FullStack en alternance chez KINGS SAS
            </h2>
            
            <p className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Étudiante en Bachelor Informatique – passionnée par le développement web, 
              le clean code et les projets concrets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center justify-center gap-2 bg-[#7A5C50] text-white px-8 py-3 rounded-lg hover:bg-[#65483F] transition-colors shadow-md"
              >
                <Download size={20} />
                Télécharger mon CV
              </button>
              
              <button
                onClick={scrollToAbout}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#7A5C50] px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors border-2 border-[#7A5C50]"
              >
                En savoir plus
                <ArrowDown size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}