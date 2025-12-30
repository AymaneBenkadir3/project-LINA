import { useState, useEffect } from 'react';
import {
  X,
  ZoomIn,
  Camera,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

import img from '../assets/img.jpeg';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const images = [
    {
      url: img,
      title: 'La drogue',
      date: '2025',
      realisePar: 'khadija Saibari',
      description:
        'Affiche de prévention qui alerte sur les dangers de la drogue et encourage à dire non pour protéger sa santé et son avenir.'
    },
    {
      url: img1,
      title: 'La sécheresse',
      date: '2025',
      realisePar: 'LABDYOUI Yasmine',
      description:
        'Affiche de sensibilisation sur le manque d’eau et ses effets sur la vie.'
    },
    {
      url: img2,
      title: 'Victoire du Maroc 🇲🇦',
      date: '2025',
      realisePar: 'Khadija',
      description:
        'Une immense fierté nationale et un message d’espoir pour la jeunesse.'
    },
    {
      url: img3,
      title: 'Travail de groupe – Découverte des plantes',
      date: '2024',
      description:
        'Activité de travail en groupe consacrée à la découverte des plantes, où les participants apprennent à identifier, planter et entretenir différentes espèces tout en développant l’esprit de coopération.'
    },
    {
      url: img4,
      title: 'Atelier environnemental',
      date: '2024',
      description:
        'Atelier pratique autour des plantes et de l’environnement, permettant aux participants de collaborer et de renforcer leur sensibilisation à la protection de la nature.'
    }
  ];

  const openImage = (index: number) => {
    setSelectedImage(images[index].url);
    setSelectedImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setSelectedImageIndex(null);
  };

  const navigate = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;

    const newIndex =
      direction === 'prev'
        ? (selectedImageIndex - 1 + images.length) % images.length
        : (selectedImageIndex + 1) % images.length;

    setSelectedImage(images[newIndex].url);
    setSelectedImageIndex(newIndex);
  };

  /* 🔒 Bloquer le scroll quand la lightbox est ouverte */
  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : '';
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 rounded-full">
            <Camera className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-300">
              MÉMOIRES VISUELLES
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Galerie <span className="text-amber-400">Photographique</span>
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Un aperçu visuel des activités éducatives, environnementales et
            culturelles réalisées au sein de notre établissement.
          </p>
        </div>
      </section>

      {/* ================= GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => openImage(index)}
            className="group cursor-pointer bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
          >
            <div className="relative h-72 overflow-hidden">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition">
                <ZoomIn className="w-5 h-5 text-gray-800" />
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-bold text-gray-800 truncate">
                {image.title}
              </h3>

              <p className="text-sm text-gray-600 truncate mb-2">
                {image.description}
              </p>

              <p className="text-xs text-gray-500">
                <span className="font-semibold text-gray-700">
                  Réalisé par :
                </span>{' '}
                {image.realisePar}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ================= LIGHTBOX ================= */}
      {selectedImage && selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeImage}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white"
            onClick={closeImage}
          >
            <X className="w-10 h-10" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-6 text-white"
            onClick={e => {
              e.stopPropagation();
              navigate('prev');
            }}
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          {/* Next */}
          <button
            className="absolute right-6 text-white"
            onClick={e => {
              e.stopPropagation();
              navigate('next');
            }}
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          {/* Image */}
          <div
            className="flex items-center justify-center max-w-6xl max-h-[85vh] w-full h-full"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Image agrandie"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-zoomIn"
            />
          </div>

          {/* Info */}
          <div className="absolute bottom-6 text-center text-white px-6">
            <h3 className="text-xl font-bold">
              {images[selectedImageIndex].title}
            </h3>

            <p className="text-gray-300 max-w-2xl mx-auto">
              {images[selectedImageIndex].description}
            </p>

            <p className="text-sm text-gray-400 mt-2">
              <span className="font-semibold text-gray-300">
                Réalisé par :
              </span>{' '}
              {images[selectedImageIndex].realisePar}
            </p>

            <p className="text-sm text-gray-400 mt-1">
              {selectedImageIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
