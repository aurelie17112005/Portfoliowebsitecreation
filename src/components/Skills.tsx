import { Code2, Database, Wrench, Users, Brain, Lightbulb, Target, Heart } from 'lucide-react';

export function Skills() {
  const technicalSkills = [
    { name: 'Node.js', icon: '🟢', category: 'Backend' },
    { name: 'Vue.js', icon: '💚', category: 'Frontend' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
    { name: 'MySQL', icon: '🐬', category: 'Database' },
    { name: 'HTML/CSS', icon: '🎨', category: 'Frontend' },
    { name: 'Java', icon: '☕', category: 'Backend' },
    { name: 'Python', icon: '🐍', category: 'Backend' },
    { name: 'C++', icon: '⚡', category: 'System' }
  ];

  const methods = [
    { name: 'APIs REST', icon: '🔌' },
    { name: 'Modélisation SQL', icon: '📊' },
    { name: 'Automatisation PDF', icon: '📄' },
    { name: 'Architecture client-serveur', icon: '🏗️' },
    { name: 'Gestion de versions Git', icon: '🌿' },
    { name: 'Tests unitaires', icon: '✅' }
  ];

  const softSkills = [
    { name: 'Travail en équipe', icon: Users, description: 'Collaboration efficace et communication claire' },
    { name: 'Esprit d\'analyse', icon: Brain, description: 'Approche méthodique des problèmes complexes' },
    { name: 'Créativité', icon: Lightbulb, description: 'Solutions innovantes et pensée originale' },
    { name: 'Résolution de problèmes', icon: Target, description: 'Diagnostic rapide et solutions pragmatiques' },
    { name: 'Adaptabilité', icon: Heart, description: 'Apprentissage continu et flexibilité' }
  ];

  return (
    <div className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-[#7A5C50] mb-4">Compétences</h2>
          <div className="w-20 h-1 bg-[#7A5C50] mx-auto rounded"></div>
        </div>

        {/* Layout avec sidebar */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar - Soft Skills */}
          <div className="md:col-span-1">
            <div className="bg-[#7A5C50] text-white p-6 rounded-lg shadow-lg sticky top-24">
              <h3 className="mb-6 text-white flex items-center gap-2">
                <Heart size={24} />
                Soft Skills
              </h3>
              <div className="space-y-4">
                {softSkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={index} className="group">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                          <Icon size={16} className="text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-white/90">{skill.name}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="md:col-span-3 space-y-12">
            {/* Stack Technique */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#7A5C50] flex items-center justify-center">
                  <Code2 size={20} className="text-white" />
                </div>
                <h3 className="text-[#7A5C50]">Stack Technique</h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {technicalSkills.map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-[#F5F1EC] p-4 rounded-lg hover:shadow-md transition-shadow group cursor-pointer"
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                      <p className="text-gray-900 mb-1">{skill.name}</p>
                      <p className="text-xs text-[#7A5C50]">{skill.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Méthodes */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#7A5C50] flex items-center justify-center">
                  <Wrench size={20} className="text-white" />
                </div>
                <h3 className="text-[#7A5C50]">Méthodes & Outils</h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {methods.map((method, index) => (
                  <div 
                    key={index}
                    className="bg-[#F5F1EC] p-4 rounded-lg hover:shadow-md transition-shadow group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        {method.icon}
                      </span>
                      <p className="text-gray-900">{method.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tableaux de compétences détaillés */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#7A5C50] flex items-center justify-center">
                  <Database size={20} className="text-white" />
                </div>
                <h3 className="text-[#7A5C50]">Niveaux de maîtrise</h3>
              </div>

              <div className="bg-[#F5F1EC] rounded-lg overflow-hidden shadow-sm">
                <table className="w-full">
                  <thead className="bg-[#7A5C50] text-white">
                    <tr>
                      <th className="text-left p-4">Technologie</th>
                      <th className="text-left p-4 hidden sm:table-cell">Catégorie</th>
                      <th className="text-left p-4">Niveau</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { tech: 'Node.js', cat: 'Backend', level: 'Avancé' },
                      { tech: 'Vue.js', cat: 'Frontend', level: 'Avancé' },
                      { tech: 'PostgreSQL', cat: 'Database', level: 'Intermédiaire' },
                      { tech: 'MySQL', cat: 'Database', level: 'Intermédiaire' },
                      { tech: 'HTML/CSS', cat: 'Frontend', level: 'Avancé' },
                      { tech: 'Java', cat: 'Backend', level: 'Intermédiaire' },
                      { tech: 'Python', cat: 'Backend', level: 'Débutant' },
                      { tech: 'C++', cat: 'System', level: 'Débutant' }
                    ].map((item, index) => (
                      <tr key={index} className="border-t border-white hover:bg-white/50 transition-colors">
                        <td className="p-4 text-gray-900">{item.tech}</td>
                        <td className="p-4 text-gray-600 hidden sm:table-cell">{item.cat}</td>
                        <td className="p-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                            item.level === 'Avancé' 
                              ? 'bg-[#7A5C50] text-white' 
                              : item.level === 'Intermédiaire'
                              ? 'bg-[#7A5C50]/60 text-white'
                              : 'bg-[#7A5C50]/30 text-[#7A5C50]'
                          }`}>
                            {item.level}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
