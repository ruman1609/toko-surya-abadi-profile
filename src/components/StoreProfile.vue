<template>
  <div class="mx-auto px-4 md:px-8 py-6 md:py-8 min-h-screen bg-surface-50 dark:bg-gray-800">
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

          <!-- Jam Operasional -->
          <div class="bg-white dark:bg-gray-700 p-6 md:p-8 rounded-xl shadow-md">
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

          <!-- Lokasi -->
          <div class="bg-white dark:bg-gray-700 p-6 md:p-8 rounded-xl shadow-md">
            <h3 class="text-xl md:text-2xl font-semibold mb-4 text-primary dark:text-secondary flex items-center">
              <span class="mr-3">📍</span> Lokasi
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              Jl. D.I. Panjaitan No. 6, Sungai Pinang Dalam, Kec. Sungai Pinang, Kota Samarinda, Kalimantan Timur 75117
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Facility Section -->
    <section class="min-h-[80vh] md:min-h-screen flex items-center justify-center snap-start pt-24">
      <div class="max-w-6xl w-full">
        <div class="space-y-8">
          <h2 class="text-3xl md:text-4xl font-bold text-primary dark:text-secondary mb-6 text-center">
            Fasilitas Toko
          </h2>
          <div class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/2">
              <p class="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                Toko Surya Abadi dilengkapi dengan fasilitas yang memudahkan pelanggan dalam berbelanja.
              </p>
              <ul class="list-none space-y-4 text-gray-600 dark:text-gray-300 text-lg">
                <li class="flex items-center">
                  <span class="mr-3 text-primary dark:text-secondary">🚗</span>
                  Parkir yang luas dan aman
                </li>
                <li class="flex items-center">
                  <span class="mr-3 text-primary dark:text-secondary">💳</span>
                  Fasilitas pembayaran yang lengkap
                </li>
                <li class="flex items-center">
                  <span class="mr-3 text-primary dark:text-secondary">🛋️</span>
                  Area tunggu yang nyaman
                </li>
                <li class="flex items-center">
                  <span class="mr-3 text-primary dark:text-secondary">🔒</span>
                  Penyimpanan barang yang aman
                </li>
              </ul>
            </div>
            <div class="md:w-1/2 flex items-center justify-center">
              <div
                class="bg-gray-200 dark:bg-gray-700 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl w-full h-48 md:h-64 flex items-center justify-center text-gray-500 dark:text-gray-400 text-lg">
                Gambar Fasilitas Toko
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
          <h2 class="text-3xl md:text-4xl font-bold text-primary dark:text-secondary mb-6 text-center">
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProductCategory from '@/components/ProductCategory.vue'

const categories = ref([
  'Bahan Pangan Pokok', 'Kebutuhan Dapur', 'Minuman & Konsumsi', 'Produk Lainnya'
])
</script>
