import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Star, Filter } from 'lucide-react';
import MapComponent from './MapComponent';

export default function Facilities() {
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedFacility, setSelectedFacility] = useState<any>(null);

  const healthFacilities = [
    {
      id: 1,
      name: 'RSUP Prof. Dr. R. D. Kandou Manado',
      type: 'Rumah Sakit',
      city: 'Manado',
      address: 'Jl. Raya Tanawangko, Malalayang, Manado',
      phone: '(0431) 859091',
      hours: '24 Jam',
      services: ['Gizi Anak', 'Tumbuh Kembang', 'Konsultasi Stunting', 'Imunisasi'],
      rating: 4.5,
      distance: '2.3 km',
      coordinates: { lat: -1.4748, lng: 124.8421 }
    },
    {
      id: 2,
      name: 'Puskesmas Tuminting',
      type: 'Puskesmas',
      city: 'Manado',
      address: 'Jl. Tuminting Raya, Tuminting, Manado',
      phone: '(0431) 863248',
      hours: '07:00 - 16:00',
      services: ['Posyandu', 'Pemeriksaan Gizi', 'Konseling Laktasi', 'MPASI'],
      rating: 4.2,
      distance: '1.8 km',
      coordinates: { lat: -1.4686, lng: 124.8365 }
    },
    {
      id: 3,
      name: 'RSU Bethesda Tomohon',
      type: 'Rumah Sakit',
      city: 'Tomohon',
      address: 'Jl. Raya Tomohon-Manado, Tomohon',
      phone: '(0431) 351351',
      hours: '24 Jam',
      services: ['Pediatri', 'Gizi Klinis', 'Tumbuh Kembang', 'Lab Gizi'],
      rating: 4.3,
      distance: '15.2 km',
      coordinates: { lat: -1.3336, lng: 124.8378 }
    },
    {
      id: 4,
      name: 'Puskesmas Bitung Utara',
      type: 'Puskesmas',
      city: 'Bitung',
      address: 'Jl. Sam Ratulangi, Bitung Utara, Bitung',
      phone: '(0438) 21045',
      hours: '07:00 - 16:00',
      services: ['Program Gizi', 'Posyandu Balita', 'Deteksi Stunting', 'Edukasi Gizi'],
      rating: 4.0,
      distance: '28.5 km',
      coordinates: { lat: -1.4454, lng: 125.1838 }
    },
    {
      id: 5,
      name: 'RSUD Tondano',
      type: 'Rumah Sakit',
      city: 'Minahasa',
      address: 'Jl. Suprapto, Tondano, Minahasa',
      phone: '(0431) 321019',
      hours: '24 Jam',
      services: ['Anak', 'Gizi', 'Konsultasi Stunting', 'Rehabilitasi Gizi'],
      rating: 4.1,
      distance: '32.1 km',
      coordinates: { lat: -1.3028, lng: 124.9175 }
    },
    {
      id: 6,
      name: 'Puskesmas Airmadidi',
      type: 'Puskesmas',
      city: 'Minahasa Utara',
      address: 'Jl. Trans Sulawesi, Airmadidi, Minahasa Utara',
      phone: '(0431) 341234',
      hours: '07:00 - 16:00',
      services: ['Posyandu', 'Konseling Gizi', 'MPASI', 'Pemantauan Pertumbuhan'],
      rating: 3.9,
      distance: '25.7 km',
      coordinates: { lat: -1.3985, lng: 124.9456 }
    }
  ];

  const cities = ['all', 'Manado', 'Tomohon', 'Bitung', 'Minahasa', 'Minahasa Utara'];
  const facilityTypes = ['all', 'Rumah Sakit', 'Puskesmas'];

  const filteredFacilities = healthFacilities.filter(facility => {
    const cityMatch = selectedCity === 'all' || facility.city === selectedCity;
    const typeMatch = selectedType === 'all' || facility.type === selectedType;
    return cityMatch && typeMatch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Fasilitas Kesehatan</h2>
        <p className="text-gray-600 mt-1">Temukan fasilitas kesehatan terdekat untuk layanan gizi dan pencegahan stunting</p>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Kota/Kabupaten</label>
            <select 
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">Semua Wilayah</option>
              {cities.slice(1).map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Fasilitas</label>
            <select 
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">Semua Jenis</option>
              {facilityTypes.slice(1).map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
          <p className="text-2xl font-bold text-green-600">45</p>
          <p className="text-sm text-gray-600">Total Fasilitas Kesehatan</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
          <p className="text-2xl font-bold text-blue-600">12</p>
          <p className="text-sm text-gray-600">Rumah Sakit</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
          <p className="text-2xl font-bold text-purple-600">33</p>
          <p className="text-sm text-gray-600">Puskesmas</p>
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredFacilities.map((facility) => (
          <div key={facility.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{facility.name}</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      facility.type === 'Rumah Sakit' 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'bg-green-100 text-green-600'
                    }`}>
                      {facility.type}
                    </span>
                    <span>•</span>
                    <span>{facility.city}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{facility.rating}</span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-start space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mt-0.5 text-gray-400" />
                  <span>{facility.address}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span>{facility.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span>{facility.hours}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Navigation className="h-4 w-4 text-gray-400" />
                  <span>{facility.distance}</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Layanan Tersedia:</p>
                <div className="flex flex-wrap gap-2">
                  {facility.services.map((service, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  Lihat Detail
                </button>
                <button 
                  onClick={() => setSelectedFacility(facility)}
                  className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  title="Lihat di Peta"
                >
                  <Navigation className="h-4 w-4 text-gray-600" />
                </button>
                <button className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Phone className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Map Placeholder */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Peta Lokasi Fasilitas Kesehatan</h3>
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">
              <span className="inline-flex items-center mr-4">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                Rumah Sakit
              </span>
              <span className="inline-flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                Puskesmas
              </span>
            </p>
          </div>
          <MapComponent 
            facilities={filteredFacilities} 
            selectedFacility={selectedFacility}
          />
        </div>
      </div>
    </div>
  );
}