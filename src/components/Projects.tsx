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
          title: 'Projet personnel : Application de suivi des Talents Nigériens',
          description:
              'Plateforme web complète permettant le suivi académique et administratif des étudiants Nigériens, avec gestion centralisée des données, suivi des résultats et tableau de bord pour enseignants et administrateurs. L’application propose une interface claire, intuitive et responsive adaptée aux différents rôles : étudiants, responsables pédagogiques et direction.',

          technologies: ['TypeScript', 'HTML/CSS', 'JavaScript'],

          image: 'https://fr.images.search.yahoo.com/images/view;_ylt=AwrNP9HZ4C1pMLEPFVllAQx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzNlY2RkOTBlZjY1Y2Y5NWY5YjBhZGJlNTM0MDQ0YmZlBGdwb3MDMTMEaXQDYmluZw--?back=https%3A%2F%2Ffr.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Ddrapeau%2Bniger%26type%3DE210FR91082G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D13&w=1280&h=960&imgurl=node01.flagstat.net%2Fmedia%2Fimage%2F1907r.jpg&rurl=https%3A%2F%2Fwww.monsieur-des-drapeaux.com%2Fniger.html&size=230KB&p=drapeau+niger&oid=3ecdd90ef65cf95f9b0adbe534044bfe&fr2=piv-web&fr=mcafee&tt=Acheter+drapeau+Niger+-+16+tailles+disponibles+-+Monsieur-des-Drapeaux&b=0&ni=21&no=13&ts=&tab=organic&sigr=Ikha6VxV.2eM&sigb=C8DIU9xUrfdc&sigi=tQ.H2ZTifu88&sigt=2fAGbPBeZMXt&.crumb=m6bDdBkAmfK&fr=mcafee&fr2=piv-web&type=E210FR91082G0',

          solution:
              'Création d’un système unifié permettant de suivre les profils étudiants, consulter les notes, gérer les cours et visualiser des statistiques en temps réel. La plateforme répond au besoin de digitalisation des établissements d’enseignement au Niger, en automatisant les processus manuels et en réduisant les risques d’erreurs.',

          role:
              'Développement de la logique métier, conception de la structure de données et implémentation du moteur de génération SQL. Participation à la mise en place du routage, des vues principales et de l’architecture globale du projet.',

          evolution:
              'Ajout d’un module d’import/export depuis des schémas existants, suggestions d’optimisations automatiques des parcours étudiants, ajout d’un espace parent et intégration future de statistiques avancées avec visualisations interactives.',

          demo: 'https://plateformesuivitudiantsniger.vercel.app/'
      },
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