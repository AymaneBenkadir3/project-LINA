import { useState } from 'react';
import { Dumbbell, Music, Laptop, Palette, BookOpen, Globe, Target, Trophy, Users, Zap } from 'lucide-react';

export default function Activities() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Toutes', icon: Target, color: 'from-gray-800 to-gray-900' },
    { id: 'sport', label: 'Sport', icon: Trophy, color: 'from-orange-500 to-amber-500' },
    { id: 'culture', label: 'Culture', icon: Music, color: 'from-purple-500 to-pink-500' },
  ];

  const activities = [
    {
      title: 'Basketball',
      category: 'sport',
      description:
        'Perfectionnement technique, stratégies d\'équipe, compétitions interscolaires et développement physique.',
      icon: Dumbbell,
      image: 'https://scontent.frba3-2.fna.fbcdn.net/v/t39.30808-6/493760422_726474116373376_955926635309603708_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFEglhiSoJkFntpjR1_WvnrX_m_4UL1uz9f-b_hQvW7P7n8NtYjBVmNUjzBBLAZH-Pj6cYdaL5s_5cTf1wRdPGG&_nc_ohc=XRgTg_5jkpIQ7kNvwHtRll5&_nc_oc=AdmYAmAbp2ab3HbCZex20fT29lLSaBXy1rTE6ewIPKFKt-LImZ_1adoF_1Kf9CU4dxo&_nc_zt=23&_nc_ht=scontent.frba3-2.fna&_nc_gid=wxytzTuT65JP7Zv7IU8AIg&oh=00_AfkkmueATK2loUyQmpOREDoRUl-64P1bz0EO_a6X2nyS_w&oe=6958D021',
      badge: 'Sport',
      badgeColor: 'bg-gradient-to-r from-orange-500 to-amber-500',
      participants: '25 élèves',
    },
  
    {
      title: 'Mémorisation et de récitation du Saint Coran',
      category: 'culture',
      description:
        'Organisation d’un concours de mémorisation et de récitation du Saint Coran, couronné par la remise de prix aux lauréats dans une ambiance spirituelle et éducative.',
      icon: Laptop,
      image: 'https://scontent.frba3-2.fna.fbcdn.net/v/t39.30808-6/482274336_689207016766753_7921188282621896924_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE8VIfnbxATsVo5y6PPD9nTCmAioPeyVt8KYCKg97JW37-jva50wkl_UKBQ66gxdpVRvG83BIEZR76CW-xBG4TN&_nc_ohc=hqv8gEUBWlsQ7kNvwFj5rI9&_nc_oc=AdkUYqGHpZglXJLx8gPxId7qBjU5TSxpId8amTejWA8oDNEuWafG6pAqFnKypQpKcuQ&_nc_zt=23&_nc_ht=scontent.frba3-2.fna&_nc_gid=F7wuI3W46Pql_HjD47I2KA&oh=00_AfmpwWATPqDRjtujl7eYVnbgPbbYIwO2GGhlZ7HKa0m6YA&oe=6958FA29',
      badge: 'Tech',
      badgeColor: 'bg-gradient-to-r from-blue-500 to-indigo-500',
      participants: '22 élèves',
      
    },
 
    
   
    {
      title: 'Football',
      category: 'sport',
      description:
        'Développez votre esprit d\'équipe, discipline et condition physique avec notre club de football compétitif.',
      icon: Dumbbell,
      image: 'https://scontent.frba3-1.fna.fbcdn.net/v/t39.30808-6/484955471_696760329344755_6780197809049166420_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFwSsVHIfKbFoJ9BtTyDTHmAbjbjPsZecoBuNuM-xl5yrRdgcYsvFI0peTdIdC4pTmJt0Li_FD_A9yOExmeRvUM&_nc_ohc=AR2YTYUj6SwQ7kNvwHb8tib&_nc_oc=Adn-py2O1yCHCBCmnWrI3B8-5EfiwlGdOYVVZVbi6MAyeyK1MRmHmVQFG_n7MvJaSVs&_nc_zt=23&_nc_ht=scontent.frba3-1.fna&_nc_gid=yPJJluI0eSVbKvDp0Na7PQ&oh=00_AfmOhmQcpIgBCH43OehwfJA6z7TWxyKcRo3x_djDZuVrig&oe=6958F3AE',
      badge: 'Sport',
      badgeColor: 'bg-gradient-to-r from-orange-500 to-amber-500',
      participants: '28 élèves',
    },
   
    
  ];

  const filteredActivities =
    selectedCategory === 'all'
      ? activities
      : activities.filter((activity) => activity.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-24 overflow-hidden">
        {/* Effets décoratifs */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-amber-600/20 to-amber-700/20 backdrop-blur-sm rounded-xl border border-amber-500/20 mb-6">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-amber-200 tracking-wide">
                DÉCOUVERTE DES TALENTS
              </span>
            </div>
            
            {/* Titre principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-gray-100">Activités</span>
              <span className="block mt-2 bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300 bg-clip-text text-transparent">
                Parascolaires
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Un éventail d'activités conçues pour développer les compétences, 
              révéler les talents et enrichir l'expérience éducative de chaque élève.
            </p>
            
            {/* Stats rapides */}
            <div className="flex justify-center space-x-8 mt-10">
            </div>
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Explorez par catégorie</h2>
            <p className="text-gray-600">Trouvez l'activité qui correspond à vos passions</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.label}</span>
                
                {/* Indicateur actif */}
                {selectedCategory === category.id && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Grid des activités */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Effet de carte */}
                <div className="absolute -inset-3 bg-gradient-to-br from-gray-50 to-white rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                  {/* Image avec overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent"></div>
                    
                    {/* Badge */}
                    <span
                      className={`absolute top-4 right-4 ${activity.badgeColor} text-white px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg`}
                    >
                      {activity.badge}
                    </span>
                  </div>

                  <div className="p-6">
                    {/* En-tête avec icône */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                          <activity.icon className="w-6 h-6 text-gray-300" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">{activity.title}</h3>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">{activity.description}</p>
                    
                    {/* Infos pratiques */}
                    <div className="space-y-3 pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-2 text-gray-400" />
                        <span>{activity.participants}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Zap className="w-4 h-4 mr-2 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Points décoratifs */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* Message si pas de résultats */}
          {filteredActivities.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Aucune activité trouvée</h3>
              <p className="text-gray-600">Essayez une autre catégorie</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}