import { Calendar, Newspaper, Video, Mic } from 'lucide-react';

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
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-amber-600/20 rounded-xl border border-amber-500/20">
            <Newspaper className="w-4 h-4 text-amber-300" />
            <span className="text-sm font-semibold text-amber-200">
              JOURNAL DE CLASSE
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Activités & <span className="text-amber-300">Interviews des élèves</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez les projets pédagogiques, workshops et interviews réalisés
            par les élèves du Lycée collégial Abi Al Alaa Al Maari.
          </p>
        </div>
      </section>

      {/* ================= CONTENU ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* ===== INTERVIEW ===== */}
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
            <Mic className="w-6 h-6 mr-2 text-amber-500" />
            Interview des élèves
          </h2>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 mb-20">
            <div className="flex items-center text-xs text-gray-500 mb-4">
              <Calendar className="w-3.5 h-3.5 mr-1" /> 2025
            </div>

            {/* Introduction */}
            <h3 className="font-semibold text-gray-800 mb-2">Introduction</h3>
            <p className="text-gray-700 mb-4">
              <strong>Marwa :</strong> Bonjour, nous sommes des élèves du Lycée collégial
              Abi Al Alaa Al Maari. Dans le cadre du projet du journal de classe,
              nous allons vous présenter une interview. Aujourd’hui, je vais poser
              quelques questions à mon amie Khadija.
            </p>

            {/* Interview */}
            <h3 className="font-semibold text-gray-800 mb-2">Interview</h3>
            <div className="space-y-3 text-gray-700">
              <p><strong>Marwa :</strong> Bonjour Khadija.</p>
              <p><strong>Khadija :</strong> Bonjour mon amie Marwa.</p>

              <p>
                <strong>Marwa :</strong> Aujourd’hui, je viens te poser quelques
                questions dans le cadre du journal de classe du Lycée collégial
                Abi Al Alaa Al Maari.
              </p>
              <p><strong>Khadija :</strong> Oui, vas-y avec plaisir.</p>

              <p><strong>Marwa :</strong> Que représente l’école pour toi ?</p>
              <p>
                <strong>Khadija :</strong> Pour moi, l’école n’est pas seulement
                un lieu d’apprentissage, c’est aussi un endroit pour se divertir
                et rencontrer de nouveaux amis. C’est également la clé du succès
                et un moyen de réaliser ses rêves.
              </p>

              <p>
                <strong>Marwa :</strong> Merci pour ta réponse élégante. Voici
                juste une dernière question.
              </p>
              <p><strong>Khadija :</strong> Oui, avec joie.</p>

              <p>
                <strong>Marwa :</strong> Quel est ton objectif scolaire pour cette
                année au Lycée collégial Abi Al Alaa Al Maari ?
              </p>
              <p>
                <strong>Khadija :</strong> Mon objectif scolaire cette année est
                d’obtenir de bons résultats en étudiant régulièrement. Je
                souhaite aussi développer mon niveau en français avec l’aide de
                notre professeur.
              </p>
            </div>

            {/* Conclusion */}
            <h3 className="font-semibold text-gray-800 mt-6 mb-2">Conclusion</h3>
            <p className="text-gray-700">
              <strong>Marwa :</strong> Merci à toi, Khadija, pour ton temps et tes
              réponses. Merci à vous de nous avoir suivis, et à bientôt dans le
              journal de classe du Lycée collégial Abi Al Alaa Al Maari.
            </p>

            <p className="text-sm text-gray-500 mt-6">
              Interview réalisée par : <strong>Marwa</strong><br />
              Invitée : <strong>Khadija</strong>
            </p>
          </div>

          {/* ===== PROJET IMAGE ===== */}
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
            <Newspaper className="w-6 h-6 mr-2 text-amber-500" />
            Projets pédagogiques
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border">
              <img
                src={cultureImg}
                alt="Atelier de culture générale"
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Atelier de culture générale
                </h3>
                <p className="text-sm text-gray-600">
                  Atelier animé par <strong>Zineb Knifeh</strong> et{' '}
                  <strong>Khadija Klat</strong>, favorisant l’enrichissement
                  culturel des élèves.
                </p>
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
              <div
                key={video.id}
                className="bg-white rounded-2xl shadow-md border overflow-hidden"
              >
                <video
                  src={video.src}
                  controls
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
