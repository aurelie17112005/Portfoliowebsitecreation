import { ExternalLink, Github, Award, Lightbulb, Target } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Système de pointage QR Code',
      description: 'Application de gestion des présences par scan de QR codes personnalisés, permettant un suivi en temps réel des employés et générant automatiquement des rapports PDF.',
      technologies: ['Node.js', 'Vue.js', 'PostgreSQL', 'API REST', 'PDF Generation'],
      image: 'https://images.unsplash.com/photo-1569908420024-c8f709b75700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxciUyMGNvZGUlMjBzY2FubmluZ3xlbnwxfHx8fDE3NjQ1NDI5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'Garantir la fiabilité du système de scan en conditions réelles avec connexion intermittente',
      solution: 'Implémentation d\'un système de cache local avec synchronisation différée et validation côté serveur',
      role: 'Développement fullstack complet : architecture, API REST, interface utilisateur',
      evolution: 'Ajout de la géolocalisation et d\'un tableau de bord analytique avancé',
      github: 'https://github.com/aurelie17112005/EDT---Alt',
      demo: 'https://portfolio-ad-aurelie.vercel.app/'
    },
    {
      title: 'Application événementielle',
      description: 'Plateforme interactive pour la gestion d\'événements avec système de stands virtuels et carte interactive permettant aux visiteurs de naviguer facilement.',
      technologies: ['Vue.js', 'Node.js', 'MySQL', 'API REST', 'Leaflet.js'],
      image: 'https://images.unsplash.com/photo-1586449480584-34302e933441?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGludGVyYWN0aXZlJTIwbWFwfGVufDF8fHx8MTc2NDU0Mjk4MHww&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'Optimiser l\'affichage de centaines de stands sur une carte interactive sans ralentissement',
      solution: 'Mise en place du clustering et du lazy loading avec rechargement dynamique par zone',
      role: 'Lead développement frontend et intégration de la carte interactive',
      evolution: 'Système de réservation de stands et messagerie en temps réel',
      github: 'https://github.com/AlexandreVILLANI/SaeTourisme',
      demo: '#'
    },
    {
      title: 'Hackathon Informatique - 3ᵉ place',
      description: 'Conception d\'une solution innovante en 48h pour optimiser la gestion des ressources dans les espaces de coworking, avec réservation automatisée et analytics.',
      technologies: ['Python', 'JavaScript', 'API REST', 'Data Visualization'],
      image: 'https://images.unsplash.com/photo-1638029202288-451a89e0d55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrYXRob24lMjBjb2Rpbmd8ZW58MXx8fHwxNzY0NDM1MzEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'Livrer un MVP fonctionnel et démonstrable en moins de 48h avec une équipe nouvellement formée',
      solution: 'Architecture modulaire, répartition claire des tâches et utilisation de bibliothèques éprouvées',
      role: 'Coordination technique et développement de l\'API backend',
      evolution: 'Poursuite du projet avec intégration IoT pour la détection automatique d\'occupation',
      github: '#',
      demo: '#',
      award: true
    },
    {
      title: 'Système de modélisation SQL',
      description: 'Outil de conception et visualisation de bases de données relationnelles avec génération automatique de scripts SQL et documentation.',
      technologies: ['Java', 'PostgreSQL', 'SQL', 'Architecture MVC'],
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop',
      challenge: 'Traduire graphiquement des modèles complexes tout en garantissant la cohérence des relations',
      solution: 'Algorithme de validation des contraintes et système de suggestions intelligentes',
      role: 'Développement de la logique métier et du moteur de génération SQL',
      evolution: 'Import/export depuis schémas existants et suggestion d\'optimisations',
      github: '#'
    },
    {
      title: 'Automatisation de rapports PDF',
      description: 'Module de génération automatique de rapports personnalisés à partir de données métier, avec templates configurables et export multi-format.',
      technologies: ['Node.js', 'PDF-lib', 'PostgreSQL', 'Cron Jobs'],
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop',
      challenge: 'Générer des PDF complexes avec graphiques et mise en page dynamique',
      solution: 'Utilisation de templates modulaires et pré-compilation des assets statiques',
      role: 'Conception et développement du moteur de génération',
      evolution: 'Éditeur visuel de templates et planification intelligente',
      github: '#'
    }
  ];

  // @ts-ignore
    // @ts-ignore
    return (
    <div className="py-20 px-6 bg-[#F5F1EC]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-[#7A5C50] mb-4">Projets</h2>
          <div className="w-20 h-1 bg-[#7A5C50] mx-auto rounded"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Une sélection de projets qui illustrent mon parcours et mes compétences techniques
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image */}
                <div className="md:col-span-2 relative overflow-hidden group">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.award && (
                    <div className="absolute top-4 right-4 bg-[#7A5C50] text-white px-3 py-1 rounded-full flex items-center gap-2 shadow-lg">
                      <Award size={16} />
                      <span className="text-sm">3ᵉ place</span>
                    </div>
                  )}
                </div>

                {/* Contenu */}
                <div className="md:col-span-3 p-6 md:p-8">
                  <h3 className="text-[#7A5C50] mb-3">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-[#F5F1EC] text-[#7A5C50] px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Détails */}
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex gap-3">
                      <Target size={18} className="text-[#7A5C50] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#7A5C50]">Défi : </span>
                        <span className="text-gray-600">{project.challenge}</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Lightbulb size={18} className="text-[#7A5C50] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#7A5C50]">Solution : </span>
                        <span className="text-gray-600">{project.solution}</span>
                      </div>
                    </div>
                  </div>

                  {/* Liens */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 text-[#7A5C50] hover:text-[#65483F] transition-colors"
                    >
                      <Github size={18} />
                      <span className="text-sm">Code source</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="inline-flex items-center gap-2 text-[#7A5C50] hover:text-[#65483F] transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm">Démo live</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}