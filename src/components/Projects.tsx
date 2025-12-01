import { useState, useEffect } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

export function Projects() {
    const projects = [
        {
            title: 'Système de pointage QR Code',
            description:
                'Application de gestion des présences par scan de QR codes personnalisés, permettant un suivi en temps réel et la génération automatique de rapports PDF.',
            technologies: ['Node.js', 'Vue.js', 'PostgreSQL', 'API REST', 'PDF Generation'],
            image:
                'https://images.unsplash.com/photo-1569908420024-c8f709b75700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxciUyMGNvZGUlMjBzY2FubmluZ3xlbnwxfHx8fDE3NjQ1NDI5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
            challenge:
                'Garantir la fiabilité du système de scan en conditions réelles avec connexion intermittente.',
            solution:
                "Implémentation d'un cache local avec synchronisation différée et validation côté serveur.",
            github: 'https://github.com/aurelie17112005/EDT---Alt',
            demo: 'https://portfolio-ad-aurelie.vercel.app/'
        },
        {
            title: 'Application événementielle',
            description:
                "Plateforme interactive pour la gestion d'événements avec système de stands virtuels et carte interactive permettant aux visiteurs de se repérer facilement.",
            technologies: ['Vue.js', 'Node.js', 'MySQL', 'API REST', 'Leaflet.js'],
            image:
                'https://images.unsplash.com/photo-1586449480584-34302e933441?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGludGVyYWN0aXZlJTIwbWFwfGVufDF8fHx8MTc2NDU0Mjk4MHww&ixlib=rb-4.1.0&q=80&w=1080',
            challenge:
                "Optimiser l'affichage de centaines de stands sur une carte interactive sans ralentissement.",
            solution:
                'Mise en place du clustering et du lazy loading avec rechargement dynamique par zone.',
            github: 'https://github.com/AlexandreVILLANI/SaeTourisme',
            demo: ''
        },
        {
            title: 'Application de suivi des Talents Nigériens',
            description:
                'Plateforme web permettant le suivi académique et administratif des étudiants nigériens, avec gestion centralisée des données, résultats et tableaux de bord pour les équipes pédagogiques.',
            technologies: ['TypeScript', 'HTML/CSS', 'JavaScript'],
            image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop',
            challenge:
                "Centraliser des données étudiantes auparavant dispersées entre différents fichiers et supports.",
            solution:
                "Conception d'un modèle de données unifié et d'écrans de consultation clairs, avec vues par promotion et par étudiant.",
            github: '',
            demo: 'https://plateformesuivitudiantsniger.vercel.app/'
        }
    ];

    const [index, setIndex] = useState(0);
    const delay = 5000; // 5 secondes

    const nextSlide = () => setIndex((prev) => (prev + 1) % projects.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

    // Auto-play
    useEffect(() => {
        const id = setInterval(nextSlide, delay);
        return () => clearInterval(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [projects.length, index]);

    return (
        <div className="py-20 px-6 bg-[#F5F1EC]">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-[#7A5C50] mb-4">Projets</h2>
                    <div className="w-20 h-1 bg-[#7A5C50] mx-auto rounded"></div>
                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                        Une sélection de projets concrets qui illustrent mon parcours et mes compétences
                        techniques.
                    </p>
                </div>

                {/* Carrousel */}
                <div className="relative flex flex-col items-center">
                    <div className="w-full max-w-4xl overflow-hidden">
                        <div
                            className="flex transition-transform duration-500"
                            style={{ transform: `translateX(-${index * 100}%)` }}
                        >
                            {projects.map((project, i) => (
                                <div key={i} className="w-full flex-shrink-0 px-2">
                                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                        <div className="flex flex-col md:flex-row">
                                            {/* Image */}
                                            <div className="md:w-2/5 h-56 md:h-auto overflow-hidden">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Contenu */}
                                            <div className="md:w-3/5 p-6 md:p-7">
                                                <h3 className="text-[#7A5C50] mb-2">{project.title}</h3>
                                                <p className="text-gray-700 text-sm mb-4">{project.description}</p>

                                                {/* Techs */}
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {project.technologies.map((tech, tIndex) => (
                                                        <span
                                                            key={tIndex}
                                                            className="bg-[#F5F1EC] text-[#7A5C50] px-3 py-1 rounded-full text-xs"
                                                        >
                              {tech}
                            </span>
                                                    ))}
                                                </div>

                                                {/* Challenge / solution */}
                                                <div className="text-xs text-gray-600 space-y-1 mb-4">
                                                    <p>
                                                        <span className="font-medium text-[#7A5C50]">Défi : </span>
                                                        {project.challenge}
                                                    </p>
                                                    <p>
                                                        <span className="font-medium text-[#7A5C50]">Solution : </span>
                                                        {project.solution}
                                                    </p>
                                                </div>

                                                {/* Liens */}
                                                <div className="flex flex-wrap gap-4 text-sm">
                                                    {project.github && (
                                                        <a
                                                            href={project.github}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="inline-flex items-center gap-2 text-[#7A5C50] hover:text-[#65483F]"
                                                        >
                                                            <Github size={16} />
                                                            Code source
                                                        </a>
                                                    )}
                                                    {project.demo && (
                                                        <a
                                                            href={project.demo}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="inline-flex items-center gap-2 text-[#7A5C50] hover:text-[#65483F]"
                                                        >
                                                            <ExternalLink size={16} />
                                                            Démo live
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Boutons navigation */}
                    <div className="flex items-center justify-between w-full max-w-4xl mt-4">
                        <button
                            onClick={prevSlide}
                            className="p-2 rounded-full bg-white shadow hover:bg-gray-50"
                        >
                            <ChevronLeft size={20} className="text-[#7A5C50]" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-2 rounded-full bg-white shadow hover:bg-gray-50"
                        >
                            <ChevronRight size={20} className="text-[#7A5C50]" />
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="flex gap-2 mt-4">
                        {projects.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${
                                    i === index ? 'bg-[#7A5C50] w-4' : 'bg-[#D3C5BD]'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
