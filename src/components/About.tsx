import { GraduationCap, Award, Code2 } from 'lucide-react';

export function About() {
  const education = [
    {
      year: '2024 - 2025',
      title: 'Bachelor Informatique',
      institution: 'En cours',
      description: 'Spécialisation développement web et systèmes d\'information'
    },
    {
      year: '2023 - 2024',
      title: 'Formation développement web',
      institution: 'Formation intensive',
      description: 'Stack JavaScript moderne, bases de données, APIs REST'
    },
    {
      year: '2023',
      title: 'Alternance chez KINGS SAS',
      institution: 'Développeuse FullStack',
      description: 'Conception et développement d\'applications métier'
    }
  ];

  return (
    <div className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-[#7A5C50] mb-4">À propos</h2>
          <div className="w-20 h-1 bg-[#7A5C50] mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Sidebar - Profil */}
          <div className="md:col-span-1">
            <div className="bg-[#7A5C50] text-white p-8 rounded-lg shadow-lg sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <Code2 size={32} />
                <h3>Profil</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                Développeuse passionnée par les défis techniques et l'apprentissage continu. 
                J'aime transformer des idées en applications concrètes et performantes, 
                avec un souci constant de qualité et d'élégance du code.
              </p>
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Award size={20} />
                  <span className="text-sm">3ᵉ place Hackathon Informatique</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Formation */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap size={28} className="text-[#7A5C50]" />
              <h3 className="text-[#7A5C50]">Formation & Parcours</h3>
            </div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-[#7A5C50] last:pb-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-[#7A5C50] rounded-full border-4 border-[#F5F1EC]"></div>
                  
                  <div className="bg-[#F5F1EC] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-baseline gap-3 mb-2">
                      <span className="text-[#7A5C50] text-sm bg-white px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                      <h4 className="text-gray-900">{item.title}</h4>
                    </div>
                    <p className="text-[#7A5C50] mb-2">{item.institution}</p>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
