<template>
  <div class=" mx-auto px-4 py-8 min-h-screen bg-surface-50 dark:bg-gray-800">
    <!-- About Us Section -->
    <section class="h-screen flex flex-col items-center justify-center snap-start">
      <h2 class="text-3xl font-bold text-primary dark:text-secondary mb-4 text-center">
        Tentang Kami
      </h2>
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Visi -->
          <div class="bg-surface-100 dark:bg-gray-700 p-6 rounded-md">
            <h3 class="text-xl font-semibold mb-4 text-primary dark:text-secondary">
              Visi
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Menjadi toko penyedia kebutuhan harian utama di Samarinda yang dikenal karena kelengkapan produk dan
              keandalan pelayanannya.
            </p>
          </div>

          <!-- Misi -->
          <div class="bg-surface-100 dark:bg-gray-700 p-6 rounded-md">
            <h3 class="text-xl font-semibold mb-4 text-primary dark:text-secondary">
              Misi
            </h3>
            <ul class="list-disc pl-5 mt-2 space-y-1">
              <li class="text-gray-600 dark:text-gray-300">Konsisten menyediakan barang kebutuhan pokok berkualitas bagi
                rumah tangga.</li>
              <li class="text-gray-600 dark:text-gray-300">Memberikan pengalaman belanja yang nyaman dengan sistem
                operasional yang teratur.</li>
              <li class="text-gray-600 dark:text-gray-300">Membangun kepercayaan pelanggan melalui transparansi harga
                dan metode pembayaran yang fleksibel.</li>
            </ul>
          </div>

          <!-- Jam Operasional -->
          <div class="bg-surface-100 dark:bg-gray-700 p-6 rounded-md">
            <h3 class="text-xl font-semibold mb-4 text-primary dark:text-secondary">
              Jam Operasional
            </h3>
            <ul class="space-y-2">
              <li class="text-gray-600 dark:text-gray-300">Senin - Sabtu: 09:30 - 12:00 & 13:30 - 18:00</li>
              <li class="text-gray-600 dark:text-gray-300">Minggu: Tutup</li>
            </ul>
          </div>

          <!-- Lokasi -->
          <div class="bg-surface-100 dark:bg-gray-700 p-6 rounded-md">
            <h3 class="text-xl font-semibold mb-4 text-primary dark:text-secondary">
              Lokasi
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Jl. D.I. Panjaitan No. 6, Sungai Pinang Dalam, Kec. Sungai Pinang, Kota Samarinda, Kalimantan Timur 75117
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Facility Section -->
    <section class="h-screen flex items-center justify-center snap-start">
      <div class="max-w-6xl mx-auto px-4">
        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-primary dark:text-secondary mb-6">
            Fasilitas Toko
          </h2>
          <div class="flex flex-col md:flex-row gap-4">
            <div class="md:w-1/2">
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Toko Surya Abadi dilengkapi dengan fasilitas yang memudahkan pelanggan dalam berbelanja.
              </p>
              <ul class="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                <li>Parkir yang luas dan aman</li>
                <li>Fasilitas pembayaran yang lengkap</li>
                <li>Area tunggu yang nyaman</li>
                <li>Penyimpanan barang yang aman</li>
              </ul>
            </div>
            <div class="md:w-1/2 flex items-center justify-center">
              <div
                class="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 flex items-center justify-center text-gray-500">
                Gambar Fasilitas Toko
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Payment Policy Section -->
    <section class="h-screen flex items-center justify-center snap-start">
      <div class="max-w-6xl mx-auto px-4">
        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-primary dark:text-secondary mb-6">
            Kebijakan Pembayaran
          </h2>
          <p class="text-gray-600 dark:text-gray-300">
            Transaksi di Toko Surya Abadi dapat dilakukan melalui dua metode:
          </p>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li class="text-gray-600 dark:text-gray-300">Tunai (Cash)</li>
            <li class="text-gray-600 dark:text-gray-300">Transfer Bank</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Product Catalog Section -->
    <section class="h-screen flex items-center justify-center snap-start">
      <div class="max-w-6xl mx-auto px-4">
        <div class="space-y-6">
          <h2 class="text-3xl font-bold mb-4">Katalog Produk Utama</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
