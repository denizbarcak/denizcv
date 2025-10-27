'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { getAuthToken, removeAuthToken, getAllCodes, createCode, deleteCode } from '@/lib/api';

// Types
interface AccessCode {
  id?: string;
  name: string;
  code: string;
  duration: string;
  createdAt: string;
  expiresAt?: string | null;
  isActive: boolean;
  createdBy?: string;
}

const AdminDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { language } = useLanguage();

  // Form states
  const [username, setUsername] = useState('');
  const [duration, setDuration] = useState('24h');
  const [generatedCode, setGeneratedCode] = useState('');

  // List states
  const [accessCodes, setAccessCodes] = useState<AccessCode[]>([]);

  // Modal states
  const [selectedCode, setSelectedCode] = useState<AccessCode | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  // Duration options
  const durationOptions = [
    { value: '1m', label: language === 'en' ? '1 Minute (Test)' : '1 Dakika (Test)' },
    { value: '1h', label: language === 'en' ? '1 Hour' : '1 Saat' },
    { value: '24h', label: language === 'en' ? '24 Hours' : '24 Saat' },
    { value: '7d', label: language === 'en' ? '7 Days' : '7 Gün' },
    { value: '30d', label: language === 'en' ? '30 Days' : '30 Gün' },
    { value: 'unlimited', label: language === 'en' ? 'Unlimited' : 'Sınırsız' },
  ];

  useEffect(() => {
    // Check if user is authenticated
    const token = getAuthToken();
    if (!token) {
      router.push('/admin');
      return;
    }
    // Initialize
    generateRandomCode();
    fetchCodes();
  }, [router]);

  // Fetch all codes from API
  const fetchCodes = async () => {
    try {
      const response = await getAllCodes();
      if (response.success && response.data) {
        setAccessCodes(response.data);
      }
    } catch (error) {
      console.error('Failed to fetch codes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Generate random code with guaranteed uppercase, lowercase, number, and symbol
  const generateRandomCode = () => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*_-';
    const allChars = uppercase + lowercase + numbers + symbols;
    const codeLength = 8;

    // Ensure at least one character from each category
    let code = '';

    // Add one from each category
    code += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    code += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    code += numbers.charAt(Math.floor(Math.random() * numbers.length));
    code += symbols.charAt(Math.floor(Math.random() * symbols.length));

    // Fill remaining positions
    for (let i = code.length; i < codeLength; i++) {
      code += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    // Shuffle the code
    const shuffled = code.split('').sort(() => Math.random() - 0.5).join('');
    setGeneratedCode(shuffled);
  };

  // Create new access code
  const handleCreateCode = async () => {
    if (!username.trim()) {
      alert(language === 'en' ? 'Please enter a username' : 'Lütfen kullanıcı adı girin');
      return;
    }

    try {
      const response = await createCode({
        name: username.trim(),
        code: generatedCode,
        duration: duration,
      });

      if (response.success && response.data) {
        // Add new code to the list
        setAccessCodes([response.data, ...accessCodes]);

        // Reset form
        setUsername('');
        generateRandomCode();
        setDuration('24h');

        // Show success message
        alert(language === 'en' ? 'Code created successfully!' : 'Kod başarıyla oluşturuldu!');
      }
    } catch (error) {
      console.error('Failed to create code:', error);
      alert(language === 'en' ? 'Failed to create code' : 'Kod oluşturulamadı');
    }
  };

  // Delete code
  const handleDeleteCode = async (id: string) => {
    if (!confirm(language === 'en' ? 'Are you sure you want to delete this code?' : 'Bu kodu silmek istediğinizden emin misiniz?')) {
      return;
    }

    try {
      await deleteCode(id);
      // Remove from list
      setAccessCodes(accessCodes.filter(code => code.id !== id));
      alert(language === 'en' ? 'Code deleted successfully!' : 'Kod başarıyla silindi!');
    } catch (error) {
      console.error('Failed to delete code:', error);
      alert(language === 'en' ? 'Failed to delete code' : 'Kod silinemedi');
    }
  };

  // Copy code to clipboard
  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    // You can add a toast notification here
  };

  // Show code details
  const handleShowDetails = (code: AccessCode) => {
    setSelectedCode(code);
    setShowDetailModal(true);
  };

  // Format duration for display
  const formatDuration = (duration: string) => {
    const option = durationOptions.find(opt => opt.value === duration);
    return option ? option.label : duration;
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(language === 'en' ? 'en-US' : 'tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const handleLogout = () => {
    removeAuthToken();
    router.push('/admin');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-secondary flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-secondary">
      {/* Header */}
      <header className="bg-secondary/30 backdrop-blur-xl border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">
                  {language === 'en' ? 'Admin Dashboard' : 'Yönetim Paneli'}
                </h1>
                <p className="text-sm text-gray-400">
                  {language === 'en' ? 'Manage access codes' : 'Erişim kodlarını yönet'}
                </p>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-all duration-300 border border-red-500/30"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>{language === 'en' ? 'Logout' : 'Çıkış'}</span>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Create Code Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-secondary/50 backdrop-blur-xl rounded-xl shadow-xl p-6 border border-gray-700/50"
          >
            <h2 className="text-xl font-semibold text-white mb-4">
              {language === 'en' ? 'Create New Access Code' : 'Yeni Erişim Kodu Oluştur'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Username Input */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                  {language === 'en' ? 'Username' : 'Kullanıcı Adı'}
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 bg-primary/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder={language === 'en' ? 'Enter username' : 'Kullanıcı adı girin'}
                />
              </div>

              {/* Duration Select */}
              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-300 mb-2">
                  {language === 'en' ? 'Access Duration' : 'Erişim Süresi'}
                </label>
                <div className="relative">
                  <select
                    id="duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full px-4 py-2 bg-primary/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all cursor-pointer appearance-none pr-10"
                  >
                    {durationOptions.map((option) => (
                      <option key={option.value} value={option.value} className="bg-primary text-white">
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Generated Code */}
              <div>
                <label htmlFor="code" className="block text-sm font-medium text-gray-300 mb-2">
                  {language === 'en' ? 'Security Code' : 'Güvenlik Kodu'}
                </label>
                <div className="flex gap-2">
                  <input
                    id="code"
                    type="text"
                    value={generatedCode}
                    readOnly
                    className="flex-1 px-4 py-2 bg-primary/30 border border-gray-600 rounded-lg text-white font-mono focus:outline-none"
                  />
                  <button
                    onClick={generateRandomCode}
                    className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all"
                    title={language === 'en' ? 'Generate new code' : 'Yeni kod oluştur'}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Create Button */}
            <div className="mt-4">
              <button
                onClick={handleCreateCode}
                className="w-full md:w-auto px-6 py-2.5 bg-accent hover:bg-accent/90 text-primary font-medium rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
                {language === 'en' ? 'Create Code' : 'Kod Oluştur'}
              </button>
            </div>
          </motion.div>

          {/* Codes List Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-secondary/50 backdrop-blur-xl rounded-xl shadow-xl border border-gray-700/50 overflow-hidden"
          >
            <div className="p-6 border-b border-gray-700/50">
              <h2 className="text-xl font-semibold text-white">
                {language === 'en' ? 'Access Codes' : 'Erişim Kodları'}
              </h2>
            </div>

            {accessCodes.length === 0 ? (
              <div className="p-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700/30 rounded-full mb-4">
                  <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <p className="text-gray-400">
                  {language === 'en' ? 'No access codes created yet' : 'Henüz erişim kodu oluşturulmadı'}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary/30">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        {language === 'en' ? 'Username' : 'Kullanıcı Adı'}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        {language === 'en' ? 'Code' : 'Kod'}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        {language === 'en' ? 'Duration' : 'Süre'}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        {language === 'en' ? 'Created At' : 'Oluşturulma Tarihi'}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        {language === 'en' ? 'Expires At' : 'Bitiş Tarihi'}
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                        {language === 'en' ? 'Actions' : 'İşlemler'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    {accessCodes.map((code, index) => (
                      <motion.tr
                        key={code.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="hover:bg-primary/20 transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-white">{code.name}</span>
                            <button
                              onClick={() => handleCopyCode(code.name)}
                              className="p-1 hover:bg-gray-700 rounded transition-colors"
                              title={language === 'en' ? 'Copy username' : 'Kullanıcı adını kopyala'}
                            >
                              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-mono text-gray-300">{code.code}</span>
                            <button
                              onClick={() => handleCopyCode(code.code)}
                              className="p-1 hover:bg-gray-700 rounded transition-colors"
                              title={language === 'en' ? 'Copy code' : 'Kodu kopyala'}
                            >
                              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-300">{formatDuration(code.duration)}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-400">{formatDate(code.createdAt)}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {code.expiresAt ? (
                            <span className={`text-sm font-medium ${code.isActive ? 'text-green-400' : 'text-red-400'}`}>
                              {formatDate(code.expiresAt)}
                            </span>
                          ) : (
                            <span className="text-sm text-gray-400">
                              {language === 'en' ? 'Unlimited' : 'Sınırsız'}
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleShowDetails(code)}
                              className="px-3 py-1.5 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-lg transition-all border border-blue-500/30"
                            >
                              {language === 'en' ? 'Details' : 'Detay'}
                            </button>
                            <button
                              onClick={() => code.id && handleDeleteCode(code.id)}
                              className="px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-all border border-red-500/30"
                            >
                              {language === 'en' ? 'Delete' : 'Sil'}
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>
        </div>
      </main>

      {/* Detail Modal */}
      <AnimatePresence>
        {showDetailModal && selectedCode && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-secondary border border-gray-700 rounded-xl p-6 max-w-lg w-full shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">
                  {language === 'en' ? 'Access Code Details' : 'Erişim Kodu Detayları'}
                </h3>
                <button
                  onClick={() => setShowDetailModal(false)}
                  className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-primary/30 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">
                    {language === 'en' ? 'Username' : 'Kullanıcı Adı'}
                  </div>
                  <div className="text-white font-medium">{selectedCode.name}</div>
                </div>

                <div className="p-4 bg-primary/30 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">
                    {language === 'en' ? 'Access Code' : 'Erişim Kodu'}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-white font-mono text-lg">{selectedCode.code}</div>
                    <button
                      onClick={() => handleCopyCode(selectedCode.code)}
                      className="p-2 hover:bg-gray-700 rounded transition-colors"
                    >
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-primary/30 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">
                      {language === 'en' ? 'Duration' : 'Süre'}
                    </div>
                    <div className="text-white">{formatDuration(selectedCode.duration)}</div>
                  </div>

                  <div className="p-4 bg-primary/30 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">
                      {language === 'en' ? 'Status' : 'Durum'}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${selectedCode.isActive ? 'bg-green-400' : 'bg-red-400'}`}></span>
                      <span className="text-white">
                        {selectedCode.isActive
                          ? (language === 'en' ? 'Active' : 'Aktif')
                          : (language === 'en' ? 'Inactive' : 'Pasif')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-primary/30 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">
                    {language === 'en' ? 'Created At' : 'Oluşturulma Tarihi'}
                  </div>
                  <div className="text-white">{formatDate(selectedCode.createdAt)}</div>
                </div>

                {selectedCode.expiresAt && (
                  <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                    <div className="text-sm text-yellow-400 mb-1">
                      {language === 'en' ? 'Expires At' : 'Bitiş Tarihi'}
                    </div>
                    <div className="text-white">{formatDate(selectedCode.expiresAt)}</div>
                  </div>
                )}
              </div>

              <div className="mt-6">
                <button
                  onClick={() => setShowDetailModal(false)}
                  className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all"
                >
                  {language === 'en' ? 'Close' : 'Kapat'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-center text-gray-400 text-sm">
          {language === 'en'
            ? '© 2025 Deniz Barçak. All rights reserved.'
            : '© 2025 Deniz Barçak. Tüm hakları saklıdır.'}
        </p>
      </footer>
    </div>
  );
};

export default AdminDashboard;
