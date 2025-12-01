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

    // Téléchargement du CV réel
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/cv-aurelie.pdf'; // Mets ton fichier PDF dans /public
        link.download = 'CV_Aurelie_AZONNOUDO.pdf';
        link.click();
    };

    return (
        <div className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

                    {/* PHOTO */}
                    <div className="flex justify-center md:justify-end order-1 md:order-1">
                        <div className="relative">
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#7A5C50] shadow-xl">
                                <img
                                    src="https://media.licdn.com/dms/image/v2/D4D03AQEc6gOcppFk5g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725356682466?e=1766016000&v=beta&t=uHW7_cWU961JhDDedL1vPBgtb-O4d38j5S6kb40bcEM"
                                    alt="Aurélie AZONNOUDO"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#7A5C50] rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-white text-4xl">👩‍💻</span>
                            </div>
                        </div>
                    </div>

                    {/* TEXTE */}
                    <div className="order-2 md:order-2 text-center md:text-left">

                        {/* Badge disponibilité */}
                        <div className="inline-block mb-4 px-4 py-2 bg-white rounded-full shadow-sm">
              <span className="text-[#7A5C50] text-sm">
                Disponible en alternance – Développement web
              </span>
                        </div>

                        {/* NOM */}
                        <h1 className="text-[#7A5C50] mb-3">
                            Aurélie AZONNOUDO
                        </h1>

                        {/* TITRE */}
                        <h2 className="text-gray-700 mb-6">
                            Développeuse Web Backend / FullStack – 2KINGS SAS
                        </h2>

                        {/* BIO enrichie */}
                        <p className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                            Étudiante en Bachelor Informatique à l’IUT Nord Franche-Comté,
                            je conçois des applications web fullstack : APIs robustes, bases de données
                            optimisées, interfaces responsives et automatisations métier.
                            Passionnée par l’apprentissage, la qualité du code et les projets concrets,
                            je développe chaque jour mes compétences pour créer des solutions fiables,
                            utiles et bien architecturées.
                        </p>

                        {/* BOUTONS */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

                            {/* Télécharger CV */}
                            <button
                                onClick={handleDownloadCV}
                                className="inline-flex items-center justify-center gap-2 bg-[#7A5C50] text-white px-8 py-3 rounded-lg hover:bg-[#65483F] transition-colors shadow-md"
                            >
                                <Download size={20} />
                                Télécharger mon CV
                            </button>

                            {/* En savoir plus */}
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
