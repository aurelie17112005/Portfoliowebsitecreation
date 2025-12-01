import { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aurelie.azonnoudo@email.com',
      link: 'mailto:denadiaurelie@gmail.com'
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+33 6 XX XX XX XX',
      link: ''
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Aurélie AZONNOUDO',
      link: 'https://www.linkedin.com/in/dènadi-aurélie-azonnoudo-07625b2a1'
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Belfort, France',
      link: null
    }
  ];

  return (
    <div className="py-20 px-6 bg-gradient-to-br from-[#7A5C50] to-[#5d4439]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">Contact</h2>
          <div className="w-20 h-1 bg-white mx-auto rounded"></div>
          <p className="text-white/80 mt-6 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter d'un projet ou d'une opportunité
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <h3 className="text-white mb-6">Informations de contact</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index}>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="flex items-start gap-4 text-white/90 hover:text-white transition-colors group"
                        >
                          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                            <Icon size={20} className="text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-white/60 mb-1">{info.label}</p>
                            <p className="text-white">{info.value}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4 text-white/90">
                          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                            <Icon size={20} className="text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-white/60 mb-1">{info.label}</p>
                            <p className="text-white">{info.value}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-white/80 text-sm leading-relaxed">
                  Actuellement en alternance dans la société 2KINGS SAS en tant que développeuse Web.
                </p>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-[#7A5C50] mb-6">Envoyez-moi un message</h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={64} className="text-green-500 mb-4" />
                  <h4 className="text-[#7A5C50] mb-2">Message envoyé !</h4>
                  <p className="text-gray-600">Je vous répondrai dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[#F5F1EC] rounded-lg focus:border-[#7A5C50] focus:outline-none transition-colors bg-white text-gray-900"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[#F5F1EC] rounded-lg focus:border-[#7A5C50] focus:outline-none transition-colors bg-white text-gray-900"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-[#F5F1EC] rounded-lg focus:border-[#7A5C50] focus:outline-none transition-colors resize-none bg-white text-gray-900"
                      placeholder="Votre message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#7A5C50] text-white px-8 py-4 rounded-lg hover:bg-[#65483F] transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send size={20} />
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
