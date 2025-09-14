import React, { useState } from 'react';
import { Search, Plus, Filter, Download, Eye } from 'lucide-react';

export default function Monitoring() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const children = [
    {
      id: 1,
      name: 'Andi Putra Ramadhan',
      age: '2 tahun 4 bulan',
      weight: '11.5 kg',
      height: '85 cm',
      status: 'Normal',
      lastCheck: '15 Jan 2025',
      location: 'Manado Utara',
      statusColor: 'text-green-600 bg-green-50'
    },
    {
      id: 2,
      name: 'Sari Dewi Lestari',
      age: '1 tahun 8 bulan',
      weight: '9.2 kg',
      height: '78 cm',
      status: 'Risiko Stunting',
      lastCheck: '12 Jan 2025',
      location: 'Tomohon',
      statusColor: 'text-orange-600 bg-orange-50'
    },
    {
      id: 3,
      name: 'Budi Santoso',
      age: '3 tahun 2 bulan',
      weight: '13.8 kg',
      height: '92 cm',
      status: 'Normal',
      lastCheck: '10 Jan 2025',
      location: 'Bitung',
      statusColor: 'text-green-600 bg-green-50'
    },
    {
      id: 4,
      name: 'Maya Sinta',
      age: '2 tahun 10 bulan',
      weight: '10.1 kg',
      height: '80 cm',
      status: 'Stunting',
      lastCheck: '8 Jan 2025',
      location: 'Manado Selatan',
      statusColor: 'text-red-600 bg-red-50'
    },
    {
      id: 5,
      name: 'Rizki Abdullah',
      age: '1 tahun 5 bulan',
      weight: '8.9 kg',
      height: '76 cm',
      status: 'Normal',
      lastCheck: '14 Jan 2025',
      location: 'Minahasa',
      statusColor: 'text-green-600 bg-green-50'
    }
  ];

  const filteredChildren = children.filter(child =>
    child.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    child.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Monitoring Pertumbuhan Anak</h2>
          <p className="text-gray-600 mt-1">Pantau perkembangan pertumbuhan anak di Sulawesi Utara</p>
        </div>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="h-4 w-4" />
          <span>Tambah Anak</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Cari nama anak atau lokasi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center space-x-2 transition-colors">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </button>
            <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center space-x-2 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">2,156</p>
            <p className="text-sm text-gray-600">Status Normal</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="text-center">
            <p className="text-2xl font-bold text-orange-600">245</p>
            <p className="text-sm text-gray-600">Risiko Stunting</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="text-center">
            <p className="text-2xl font-bold text-red-600">124</p>
            <p className="text-sm text-gray-600">Stunting</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">322</p>
            <p className="text-sm text-gray-600">Perlu Follow-up</p>
          </div>
        </div>
      </div>

      {/* Children Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Anak</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Umur</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Berat/Tinggi</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pemeriksaan Terakhir</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lokasi</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredChildren.map((child) => (
                <tr key={child.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{child.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {child.age}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div>{child.weight}</div>
                    <div>{child.height}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${child.statusColor}`}>
                      {child.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {child.lastCheck}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {child.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-green-600 hover:text-green-900 mr-3 transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}