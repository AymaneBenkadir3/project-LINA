import { Calendar, Newspaper, Video } from 'lucide-react';

/* Vidéos */
import video1 from '../videos/video1.mp4';
import video2 from '../videos/video2.mp4';
import video3 from '../videos/video3.mp4';

/* Image projet */
import cultureImg from '../assets/culture.jpeg';

export default function News() {
  const videos = [
    {
      id: 1,
      title: 'English Workshop',
      src: video1,
      date: '2025',
      description:
        'Atelier d’anglais interactif durant lequel les élèves participent à des activités orales et ludiques afin d’améliorer leur expression, leur prononciation et leur confiance en langue anglaise.'
    },
    {
      id: 2,
      title: 'Atelier de dessin créatif',
      src: video2,
      date: '2025',
      description:
        'Atelier artistique où les élèves expriment leur créativité à travers le dessin, favorisant l’imagination, la concentration et le travail collaboratif.'
    },
    {
      id: 3,
      title: 'Projet écologique des élèves',
      src: video3,
      date: '2025',
      description:
        'Présentation d’un projet écologique réalisé par les élèves afin de renforcer leur sensibilisation à la protection de l’environnement.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-amber-600/20 rounded-xl border border-amber-500/20">
            <Newspaper className="w-4 h-4 text-amber-300" />
            <span className="text-sm font-semibold text-amber-200">
              VIE DE L'ÉTABLISSEMENT
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Vidéos <span className="text-amber-300">Workshops des élèves</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez les ateliers, projets pédagogiques et activités éducatives
            réalisés par nos élèves.
          </p>
        </div>
      </section>

      {/* ================= CONTENU ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* ===== PROJET IMAGE ===== */}
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
            <Newspaper className="w-6 h-6 mr-2 text-amber-500" />
            Projets pédagogiques
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gray-50 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition"></div>

              <div className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition border border-gray-100">
                <div className="h-56 overflow-hidden">
                  <img
                    src={cultureImg}
                    alt="Atelier de culture générale"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <Calendar className="w-3.5 h-3.5 mr-1" /> 2025
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Atelier de culture générale
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    Atelier animé par <strong>Zineb Knifeh</strong> et{' '}
                    <strong>Khadija Klat</strong>, ayant permis aux élèves
                    d’enrichir leurs connaissances dans différents domaines
                    grâce à une animation interactive et dynamique.
                  </p>

                  <p className="text-xs text-gray-500 mt-3">
                    Réalisé par :{' '}
                    <span className="font-semibold">
                      Zineb Knifeh & Khadija Klat
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== VIDÉOS ===== */}
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
            <Video className="w-6 h-6 mr-2 text-amber-500" />
            Vidéos des workshops
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map(video => (
              <div key={video.id} className="relative group">
                <div className="absolute -inset-2 bg-gray-50 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition"></div>

                <div className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition border border-gray-100">
                  <div className="h-56 bg-black">
                    <video
                      src={video.src}
                      controls
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {video.date}
                    </div>

                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {video.title}
                    </h3>

                    <p className="text-sm text-gray-600 line-clamp-3">
                      {video.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
