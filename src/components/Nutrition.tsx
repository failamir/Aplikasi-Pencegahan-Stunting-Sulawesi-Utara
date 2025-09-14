import React, { useState } from 'react';
import { Apple, Clock, Users, Star, ChefHat, BookOpen, Calculator } from 'lucide-react';

export default function Nutrition() {
  const [activeTab, setActiveTab] = useState('recipes');

  const recipes = [
    {
      id: 1,
      name: 'Bubur Ayam Sayur untuk Bayi 6-12 Bulan',
      image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '30 menit',
      servings: '2 porsi',
      nutrition: {
        protein: '8g',
        carbs: '25g',
        fat: '5g',
        calories: '165 kal'
      },
      ingredients: [
        '2 sdm beras putih',
        '50g daging ayam tanpa lemak',
        '1 wortel kecil, potong dadu',
        '2 lembar bayam hijau',
        '200ml air'
      ],
      ageGroup: '6-12 bulan',
      difficulty: 'Mudah'
    },
    {
      id: 2,
      name: 'Sup Ikan Salmon dengan Kentang untuk Balita',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '25 menit',
      servings: '2 porsi',
      nutrition: {
        protein: '15g',
        carbs: '20g',
        fat: '8g',
        calories: '200 kal'
      },
      ingredients: [
        '100g ikan salmon segar',
        '1 buah kentang sedang',
        '1 batang wortel',
        '1 lembar daun bawang',
        '300ml kaldu ayam'
      ],
      ageGroup: '1-3 tahun',
      difficulty: 'Sedang'
    },
    {
      id: 3,
      name: 'Puding Alpukat Pisang Kaya Nutrisi',
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '15 menit',
      servings: '3 porsi',
      nutrition: {
        protein: '6g',
        carbs: '18g',
        fat: '12g',
        calories: '185 kal'
      },
      ingredients: [
        '1 buah alpukat matang',
        '2 buah pisang matang',
        '200ml susu formula',
        '1 sdm madu (untuk >1 tahun)',
        '1 sdt agar-agar bubuk'
      ],
      ageGroup: '12+ bulan',
      difficulty: 'Mudah'
    }
  ];

  const nutritionTips = [
    {
      title: 'Pemberian ASI Eksklusif',
      description: 'Berikan ASI eksklusif sampai bayi berusia 6 bulan untuk mencegah stunting',
      icon: '🤱',
      category: 'ASI & MPASI'
    },
    {
      title: 'MPASI Bergizi Seimbang',
      description: 'Mulai MPASI di usia 6 bulan dengan menu yang mengandung protein, karbohidrat, dan vitamin',
      icon: '🥄',
      category: 'MPASI'
    },
    {
      title: 'Protein Hewani Penting',
      description: 'Sertakan protein hewani seperti telur, ikan, ayam dalam menu harian anak',
      icon: '🐟',
      category: 'Protein'
    },
    {
      title: 'Sayur dan Buah Warna-warni',
      description: 'Berikan beragam sayur dan buah dengan warna berbeda untuk memenuhi kebutuhan vitamin',
      icon: '🥗',
      category: 'Vitamin'
    },
    {
      title: 'Hindari Makanan Ultra-Proses',
      description: 'Batasi pemberian snack kemasan dan makanan cepat saji pada anak',
      icon: '🚫',
      category: 'Pantangan'
    },
    {
      title: 'Porsi Sesuai Usia',
      description: 'Berikan porsi makanan yang sesuai dengan usia dan kebutuhan anak',
      icon: '⚖️',
      category: 'Porsi'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Panduan Gizi dan Nutrisi</h2>
        <p className="text-gray-600 mt-1">Resep dan tips nutrisi untuk mencegah stunting pada anak</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('recipes')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'recipes'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <ChefHat className="h-4 w-4 inline mr-2" />
              Resep Bergizi
            </button>
            <button
              onClick={() => setActiveTab('tips')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'tips'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <BookOpen className="h-4 w-4 inline mr-2" />
              Tips Nutrisi
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'calculator'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Calculator className="h-4 w-4 inline mr-2" />
              Kalkulator Gizi
            </button>
          </nav>
        </div>

        {/* Recipes Tab */}
        {activeTab === 'recipes' && (
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {recipes.map((recipe) => (
                <div key={recipe.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {recipe.ageGroup}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{recipe.name}</h3>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {recipe.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {recipe.servings}
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg mb-4">
                      <p className="text-xs font-medium text-gray-600 mb-2">Nilai Gizi per Porsi:</p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>Protein: <span className="font-medium">{recipe.nutrition.protein}</span></div>
                        <div>Karbohidrat: <span className="font-medium">{recipe.nutrition.carbs}</span></div>
                        <div>Lemak: <span className="font-medium">{recipe.nutrition.fat}</span></div>
                        <div>Kalori: <span className="font-medium">{recipe.nutrition.calories}</span></div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <p className="text-xs font-medium text-gray-600">Bahan-bahan:</p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                            {ingredient}
                          </li>
                        ))}
                        {recipe.ingredients.length > 3 && (
                          <li className="text-green-600 font-medium">+{recipe.ingredients.length - 3} bahan lainnya</li>
                        )}
                      </ul>
                    </div>

                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                      Lihat Resep Lengkap
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tips Tab */}
        {activeTab === 'tips' && (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nutritionTips.map((tip, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-gray-200">
                  <div className="text-3xl mb-3">{tip.icon}</div>
                  <div className="mb-2">
                    <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                      {tip.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Calculator Tab */}
        {activeTab === 'calculator' && (
          <div className="p-6">
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Kalkulator Status Gizi Anak</h3>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nama Anak</label>
                      <input type="text" className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Kelamin</label>
                      <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                        <option>Pilih Jenis Kelamin</option>
                        <option>Laki-laki</option>
                        <option>Perempuan</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Umur (bulan)</label>
                      <input type="number" className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Berat Badan (kg)</label>
                      <input type="number" step="0.1" className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tinggi Badan (cm)</label>
                      <input type="number" step="0.1" className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                    </div>
                  </div>

                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                    Hitung Status Gizi
                  </button>

                  <div className="bg-white p-4 rounded-lg border border-gray-200 mt-6">
                    <h4 className="font-medium text-gray-900 mb-2">Hasil Perhitungan:</h4>
                    <p className="text-gray-600 text-sm">Masukkan data anak untuk melihat status gizi dan rekomendasi nutrisi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}