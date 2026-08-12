<template>
  <div class="mx-auto px-4 md:px-8 py-6 md:py-8 min-h-screen bg-surface-50 dark:bg-gray-800">
    <!-- Hero Section -->
    <section class="min-h-[80vh] md:min-h-screen flex items-center justify-center snap-start pt-36">
      <div class="max-w-6xl w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <!-- Left Column -->
          <div class="space-y-6">
            <!-- Badge -->
            <div class="inline-flex items-center space-x-2 bg-primary/10 dark:bg-secondary/10 px-4 py-2 rounded-full">
              <span class="text-xl">📍</span>
              <span class="text-sm font-medium text-primary dark:text-secondary">Hadir di Samarinda</span>
            </div>

            <!-- Heading -->
            <h1 class="text-3xl md:text-5xl font-bold text-primary dark:text-secondary leading-tight">
              Penyedia Kebutuhan Pokok Keluarga Anda
            </h1>

            <!-- Description -->
            <p class="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-md">
              Kami menyediakan berbagai kebutuhan harian dengan kualitas terbaik, harga terjangkau, dan pelayanan yang
              ramah.
            </p>

            <!-- Call-to-Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="#lokasi"
                class="bg-primary dark:bg-secondary text-on-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 dark:hover:bg-secondary/90 transition-all duration-300 text-center">
                Lihat Lokasi
              </a>
              <a href="https://wa.me/628125810410" target="_blank" rel="noopener noreferrer"
                class="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 text-center flex items-center justify-center space-x-2">
                <span>Hubungi Kami</span>
                <span class="text-lg">💬</span>
              </a>
            </div>

            <!-- Micro-Features -->
            <div class="flex flex-wrap gap-4 pt-4">
              <div class="flex items-center space-x-2">
                <span class="text-2xl">📦</span>
                <span class="text-sm font-medium text-gray-600 dark:text-gray-300">Lengkap</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-2xl">🚀</span>
                <span class="text-sm font-medium text-gray-600 dark:text-gray-300">Mudah</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-2xl">📍</span>
                <span class="text-sm font-medium text-gray-600 dark:text-gray-300">Strategis</span>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="flex flex-col items-center justify-center space-y-6">
            <!-- Welcome Card -->
            <div
              class="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-600 max-w-sm w-full">
              <div class="text-center space-y-4">
                <div
                  class="w-16 h-16 bg-primary/10 dark:bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-3xl">👋</span>
                </div>
                <h3 class="text-2xl font-bold text-primary dark:text-secondary">Selamat Datang!</h3>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Kami siap melayani kebutuhan harian Anda dengan sepenuh hati. Kunjungi toko kami untuk pengalaman
                  belanja yang nyaman.
                </p>

                <!-- Break Hours Badge -->
                <div
                  class="mt-4 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                  <div class="flex items-center justify-center space-x-2">
                    <span class="text-2xl">⏰</span>
                    <div class="text-left">
                      <p class="text-sm font-semibold text-yellow-800 dark:text-yellow-200">Jam Istirahat Harian</p>
                      <p class="text-xs text-yellow-700 dark:text-yellow-300">12:00 - 13:30 WITA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="min-h-[80vh] md:min-h-screen flex flex-col items-center justify-center snap-start pt-36">
      <h2 class="text-3xl md:text-4xl font-bold text-primary dark:text-secondary mb-8 text-center">
        Tentang Kami
      </h2>
      <div class="max-w-6xl w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <!-- Visi -->
          <div class="bg-white dark:bg-gray-700 p-6 md:p-8 rounded-xl shadow-md">
            <h3 class="text-xl md:text-2xl font-semibold mb-4 text-primary dark:text-secondary flex items-center">
              <span class="mr-3">👁️</span> Visi
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              Menjadi toko penyedia kebutuhan harian utama di Samarinda yang dikenal karena kelengkapan produk dan
              keandalan pelayanannya.
            </p>
          </div>

          <!-- Misi -->
          <div class="bg-white dark:bg-gray-700 p-6 md:p-8 rounded-xl shadow-md">
            <h3 class="text-xl md:text-2xl font-semibold mb-4 text-primary dark:text-secondary flex items-center">
              <span class="mr-3">🎯</span> Misi
            </h3>
            <ul class="list-none space-y-3 text-gray-600 dark:text-gray-300 text-base md:text-lg">
              <li class="flex items-start">
                <span class="mr-2 text-primary dark:text-secondary">•</span>
                Konsisten menyediakan barang kebutuhan pokok berkualitas bagi rumah tangga.
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-primary dark:text-secondary">•</span>
                Memberikan pengalaman belanja yang nyaman dengan sistem operasional yang teratur.
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-primary dark:text-secondary">•</span>
                Membangun kepercayaan pelanggan melalui transparansi harga dan metode pembayaran yang fleksibel.
              </li>
            </ul>
          </div>

          <!-- Lokasi & Jam Operasional -->
          <div class="md:col-span-2 bg-white dark:bg-gray-700 p-6 md:p-8 mb-4 rounded-xl shadow-md">
            <div class="flex flex-col md:flex-row gap-8">
              <!-- Lokasi -->
              <div class="md:w-1/2">
                <h3 class="text-xl md:text-2xl font-semibold mb-4 text-primary dark:text-secondary flex items-center">
                  <span class="mr-3">📍</span> Lokasi
                </h3>
                <div class="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-sm mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.888888888889!2d117.1817077!3d-0.4620274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df5d6039f656407%3A0xd5b7f1e3e3850f7!2sToko%20Surya%20Abadi!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                    width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
                <p class="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                  Jl. D.I. Panjaitan No. 6, Sungai Pinang Dalam, Kec. Sungai Pinang, Kota Samarinda, Kalimantan Timur
                  75117
                </p>
              </div>

              <!-- Jam Operasional -->
              <div class="md:w-1/2">
                <h3 class="text-xl md:text-2xl font-semibold mb-4 text-primary dark:text-secondary flex items-center">
                  <span class="mr-3">⏰</span> Jam Operasional
                </h3>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300 text-base md:text-lg">
                  <li class="flex justify-between">
                    <span>Senin - Sabtu:</span>
                    <span class="font-medium">09:30 - 12:00 & 13:30 - 18:00</span>
                  </li>
                  <li class="flex justify-between">
                    <span>Minggu:</span>
                    <span class="font-medium text-red-500">Tutup</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Payment Policy Section -->
    <section class="min-h-[80vh] md:min-h-screen flex items-center justify-center snap-start pt-24">
      <div class="max-w-6xl w-full">
        <div class="space-y-8">
          <h2 class="text-3xl md:text-4xl font-bold text-primary dark:text-secondary mb-6 text-center">
            Kebijakan Pembayaran
          </h2>
          <div class="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
            <p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Transaksi di Toko Surya Abadi dapat dilakukan melalui dua metode:
            </p>
            <div class="flex flex-col md:flex-row gap-6">
              <div class="flex-1 bg-gray-50 dark:bg-gray-600 p-6 rounded-lg text-center">
                <span class="text-4xl mb-2 block">💵</span>
                <h4 class="text-xl font-semibold text-primary dark:text-secondary">Tunai (Cash)</h4>
              </div>
              <div class="flex-1 bg-gray-50 dark:bg-gray-600 p-6 rounded-lg text-center">
                <span class="text-4xl mb-2 block">🏦</span>
                <h4 class="text-xl font-semibold text-primary dark:text-secondary">Transfer Bank</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Catalog Section -->
    <section class="min-h-[80vh] md:min-h-screen flex items-center justify-center snap-start pt-36">
      <div class="max-w-6xl w-full">
        <div class="space-y-8">
          <h2 id="katalog" class="text-3xl md:text-4xl font-bold text-primary dark:text-secondary mb-6 text-center">
            Katalog Produk Utama
          </h2>
          <p class="text-gray-600 dark:text-gray-300 text-lg text-center max-w-3xl mx-auto">
            Kami menyediakan berbagai produk kebutuhan harian dengan kualitas terbaik.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <ProductCategory v-for="category in categories" :key="category" :name="category" />
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="min-h-[80vh] md:min-h-screen flex items-center justify-center snap-start pt-36">
      <div class="max-w-4xl w-full">
        <div class="space-y-8">
          <h2 class="text-3xl md:text-4xl font-bold text-primary dark:text-secondary mb-6 text-center">
            Pertanyaan Umum
          </h2>
          <div class="space-y-4">
            <!-- FAQ Item 1 -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <h3 class="font-semibold text-lg mb-2 text-primary dark:text-secondary">
                Jam berapa toko buka?
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Senin - Sabtu: 09:30 - 12:00 & 13:30 - 18:00<br>
                Minggu: Tutup
              </p>
            </div>

            <!-- FAQ Item 2 -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <h3 class="font-semibold text-lg mb-2 text-primary dark:text-secondary">
                Apakah menerima pembayaran transfer?
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Ya, kami menerima pembayaran melalui transfer bank. Silakan hubungi kami untuk informasi rekening dan
                instruksi transfer.
              </p>
            </div>

            <!-- FAQ Item 3 -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <h3 class="font-semibold text-lg mb-2 text-primary dark:text-secondary">
                Apakah toko buka di hari Minggu?
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Tidak, toko tutup setiap hari Minggu untuk istirahat. Kami akan kembali buka pada hari Senin.
              </p>
            </div>

            <!-- FAQ Item 4 -->
            <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <h3 class="font-semibold text-lg mb-2 text-primary dark:text-secondary">
                Bagaimana cara memesan barang?
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Anda dapat datang langsung ke toko kami atau menghubungi kami melalui WhatsApp untuk pemesanan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Information Section -->
    <section class="min-h-[80vh] md:min-h-screen flex items-center justify-center snap-start pt-36">
      <div class="max-w-6xl w-full">
        <div class="space-y-8">
          <h2 id="lokasi" class="text-3xl md:text-4xl font-bold text-primary dark:text-secondary mb-6 text-center">
            Hubungi Kami
          </h2>
          <div class="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Contact Details -->
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div
                    class="w-12 h-12 rounded-full bg-primary/10 dark:bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <span class="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg mb-1">Telepon & WhatsApp</h3>
                    <p class="text-gray-600 dark:text-gray-300">
                      <a href="https://wa.me/628125810410" target="_blank" rel="noopener noreferrer"
                        class="text-primary dark:text-secondary hover:underline">
                        +62-812-581-0410
                      </a>
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div
                    class="w-12 h-12 rounded-full bg-primary/10 dark:bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <span class="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg mb-1">Lokasi Toko</h3>
                    <p class="text-gray-600 dark:text-gray-300">
                      Jl. D.I. Panjaitan No. 6, Sungai Pinang Dalam,<br>
                      Kec. Sungai Pinang, Kota Samarinda, Kalimantan Timur 75117
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div
                    class="w-12 h-12 rounded-full bg-primary/10 dark:bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <span class="text-2xl">⏰</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg mb-1">Jam Operasional</h3>
                    <p class="text-gray-600 dark:text-gray-300">
                      Senin - Sabtu: 09:30 - 12:00 & 13:30 - 18:00<br>
                      Minggu: Tutup
                    </p>
                  </div>
                </div>
              </div>

              <!-- Visit Us Button -->
              <div class="flex flex-col items-center justify-center space-y-4">
                <div
                  class="bg-primary dark:bg-secondary text-on-primary hover:bg-primary/90 dark:hover:bg-secondary/90 text-center px-8 py-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
                  <h3 class="text-xl font-bold mb-2">Kunjungi Toko Kami</h3>
                  <p class="text-sm opacity-90 mb-4">Buka di Google Maps</p>
                  <a href="https://www.google.com/maps/search/?api=1&query=Jl.+D.I.+Panjaitan+No.+6,+Sungai+Pinang+Dalam,+Kec.+Sungai+Pinang,+Kota+Samarinda,+Kalimantan+Timur+75117"
                    target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 text-primary dark:text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span>Buka di Google Maps</span>
                  </a>
                </div>

                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Klik tombol di atas untuk melihat lokasi toko kami di peta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProductCategory from '@/components/ProductCategory.vue'

const categories = ref([
  'Bahan Pangan Pokok', 'Kebutuhan Dapur', 'Minuman & Konsumsi', 'Produk Lainnya'
])
</script>
