import React from 'react';
import { BookOpen, Play, Download, Users, Clock, Award, Video, FileText } from 'lucide-react';

export default function Education() {
  const educationContent = [
    {
      id: 1,
      title: 'Apa itu Stunting? Penyebab dan Dampaknya',
      type: 'video',
      duration: '8 menit',
      thumbnail: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '2.3k',
      category: 'Pengetahuan Dasar',
      description: 'Video edukatif tentang pengertian stunting, penyebab utama, dan dampak jangka panjang pada anak'
    },
    {
      id: 2,
      title: 'Panduan MPASI 6-24 Bulan untuk Mencegah Stunting',
      type: 'artikel',
      readTime: '5 menit',
      thumbnail: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '1.8k',
      category: 'MPASI',
      description: 'Panduan lengkap pemberian makanan pendamping ASI yang tepat untuk mencegah stunting'
    },
    {
      id: 3,
      title: 'Workshop: Deteksi Dini Stunting di Posyandu',
      type: 'webinar',
      duration: '45 menit',
      thumbnail: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=400',
      participants: '856',
      category: 'Pelatihan Kader',
      description: 'Pelatihan untuk kader posyandu dalam melakukan deteksi dini dan pencegahan stunting'
    },
    {
      id: 4,
      title: 'Buku Saku: 1000 Hari Pertama Kehidupan',
      type: 'download',
      size: '2.5 MB',
      thumbnail: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=400',
      downloads: '3.2k',
      category: 'Panduan Orang Tua',
      description: 'Panduan praktis untuk orang tua tentang pentingnya 1000 hari pertama kehidupan anak'
    },
    {
      id: 5,
      title: 'Mitos vs Fakta: Gizi Anak dan Stunting',
      type: 'video',
      duration: '12 menit',
      thumbnail: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '4.1k',
      category: 'Edukasi Masyarakat',
      description: 'Membongkar mitos seputar gizi anak dan menjelaskan fakta ilmiah tentang stunting'
    },
    {
      id: 6,
      title: 'Resep Praktis Anti-Stunting untuk Balita',
      type: 'artikel',
      readTime: '7 menit',
      thumbnail: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '2.7k',
      category: 'Resep & Nutrisi',
      description: 'Kumpulan resep praktis dan bergizi untuk membantu mencegah stunting pada balita'
    }
  ];

  const categories = [
    'Semua',
    'Pengetahuan Dasar',
    'MPASI',
    'Pelatihan Kader', 
    'Panduan Orang Tua',
    'Edukasi Masyarakat',
    'Resep & Nutrisi'
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="h-4 w-4" />;
      case 'artikel': return <FileText className="h-4 w-4" />;
      case 'webinar': return <Users className="h-4 w-4" />;
      case 'download': return <Download className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-red-100 text-red-600';
      case 'artikel': return 'bg-blue-100 text-blue-600';
      case 'webinar': return 'bg-purple-100 text-purple-600';
      case 'download': return 'bg-green-100 text-green-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Pusat Edukasi Stunting</h2>
        <p className="text-gray-600 mt-1">Materi pembelajaran dan sumber daya untuk pencegahan stunting</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-blue-600">24</p>
              <p className="text-sm text-gray-600">Video Edukasi</p>
            </div>
            <Video className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-green-600">18</p>
              <p className="text-sm text-gray-600">Artikel Panduan</p>
            </div>
            <FileText className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-purple-600">12</p>
              <p className="text-sm text-gray-600">Webinar</p>
            </div>
            <Users className="h-8 w-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-orange-600">8</p>
              <p className="text-sm text-gray-600">Materi Download</p>
            </div>
            <Download className="h-8 w-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {educationContent.map((content) => (
          <div key={content.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative">
              <img src={content.thumbnail} alt={content.title} className="w-full h-48 object-cover" />
              <div className="absolute top-3 left-3">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(content.type)}`}>
                  {getTypeIcon(content.type)}
                  <span className="ml-1 capitalize">{content.type}</span>
                </span>
              </div>
              {content.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 transition-all">
                    <Play className="h-6 w-6 text-gray-900 ml-1" />
                  </button>
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="mb-2">
                <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                  {content.category}
                </span>
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{content.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{content.description}</p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                {content.duration && (
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {content.duration}
                  </div>
                )}
                {content.readTime && (
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {content.readTime}
                  </div>
                )}
                {content.size && (
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-1" />
                    {content.size}
                  </div>
                )}
                
                <div className="flex items-center">
                  {content.views && (
                    <>
                      <Award className="h-4 w-4 mr-1" />
                      {content.views} views
                    </>
                  )}
                  {content.participants && (
                    <>
                      <Users className="h-4 w-4 mr-1" />
                      {content.participants} peserta
                    </>
                  )}
                  {content.downloads && (
                    <>
                      <Download className="h-4 w-4 mr-1" />
                      {content.downloads} downloads
                    </>
                  )}
                </div>
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                {content.type === 'video' ? 'Tonton Video' :
                 content.type === 'artikel' ? 'Baca Artikel' :
                 content.type === 'webinar' ? 'Daftar Webinar' : 'Download Materi'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors">
          Muat Lebih Banyak Konten
        </button>
      </div>
    </div>
  );
}