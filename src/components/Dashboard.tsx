import React from 'react';
import { TrendingUp, Users, AlertTriangle, CheckCircle, Baby, Calendar } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      title: 'Anak Terdaftar',
      value: '2,847',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Status Gizi Baik',
      value: '2,156',
      change: '+8%',
      trend: 'up',
      icon: CheckCircle,
      color: 'bg-green-500'
    },
    {
      title: 'Risiko Stunting',
      value: '245',
      change: '-15%',
      trend: 'down',
      icon: AlertTriangle,
      color: 'bg-orange-500'
    },
    {
      title: 'Balita 0-5 Tahun',
      value: '1,923',
      change: '+5%',
      trend: 'up',
      icon: Baby,
      color: 'bg-purple-500'
    }
  ];

  const recentActivities = [
    { child: 'Andi Putra', activity: 'Pemeriksaan rutin', time: '2 jam lalu', status: 'normal' },
    { child: 'Sari Dewi', activity: 'Imunisasi DPT-3', time: '4 jam lalu', status: 'completed' },
    { child: 'Budi Santoso', activity: 'Konsultasi gizi', time: '1 hari lalu', status: 'follow-up' },
    { child: 'Maya Sinta', activity: 'Pemeriksaan berat badan', time: '2 hari lalu', status: 'warning' }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className={`flex items-center text-sm ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                <TrendingUp className={`h-4 w-4 mr-1 ${stat.trend === 'down' ? 'transform rotate-180' : ''}`} />
                {stat.change}
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-gray-600 text-sm mt-1">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Growth Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Trend Pertumbuhan Anak</h3>
            <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm">
              <option>6 Bulan Terakhir</option>
              <option>12 Bulan Terakhir</option>
              <option>2 Tahun Terakhir</option>
            </select>
          </div>
          <div className="h-64 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-2" />
              <p className="text-gray-600">Grafik Pertumbuhan Interaktif</p>
              <p className="text-sm text-gray-500">Data visualisasi akan ditampilkan di sini</p>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Aktivitas Terbaru</h3>
            <Calendar className="h-5 w-5 text-gray-500" />
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.status === 'normal' ? 'bg-green-500' :
                  activity.status === 'completed' ? 'bg-blue-500' :
                  activity.status === 'warning' ? 'bg-orange-500' : 'bg-purple-500'
                }`}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.child}</p>
                  <p className="text-sm text-gray-600">{activity.activity}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Aksi Cepat</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center space-x-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
            <Baby className="h-6 w-6 text-green-600" />
            <span className="text-sm font-medium text-green-700">Tambah Anak Baru</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
            <CheckCircle className="h-6 w-6 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Catat Pemeriksaan</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
            <Calendar className="h-6 w-6 text-orange-600" />
            <span className="text-sm font-medium text-orange-700">Jadwal Imunisasi</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
            <Users className="h-6 w-6 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Konsultasi Online</span>
          </button>
        </div>
      </div>
    </div>
  );
}