<template>
  <div class="min-h-screen bg-surface-50 dark:bg-gray-800">
    <!-- About Us Section -->
    <section class="py-12 px-8">
      <div class="max-w-6xl mx-auto">
        <div class="space-y-6">
          <div class="space-y-6 p-6 rounded-lg border-2 border-primary/50 dark:border-gray-700/50">
            <h2 class="text-3xl font-bold text-primary dark:text-secondary">
              Tentang Kami
            </h2>
            <div class="space-y-2 bg-surface-100 dark:bg-gray-700 p-4 rounded-md">
              <p class="text-gray-600 dark:text-gray-300">Berdiri sejak 2011</p>
              <p class="text-gray-600 dark:text-gray-300">Pemilik: Anton Rachman (Iwan)</p>
            </div>
            <section class="mt-6 bg-surface-100 dark:bg-gray-700 p-6 rounded-md">
              <h3 class="text-xl font-semibold mb-4 text-primary dark:text-secondary">
                Visi
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Menjadi toko penyedia kebutuhan harian utama di Samarinda yang dikenal karena kelengkapan produk dan keandalan pelayanannya.
              </p>
            </section>
            <section class="mt-6 bg-surface-100 dark:bg-gray-700 p-6 rounded-md">
              <h3 class="text-xl font-semibold mb-4 text-primary dark:text-secondary">
                Misi
              </h3>
              <ul class="list-disc pl-5 mt-2 space-y-1">
                <li class="text-gray-600 dark:text-gray-300">Konsisten menyediakan barang kebutuhan pokok berkualitas bagi rumah tangga.</li>
                <li class="text-gray-600 dark:text-gray-300">Memberikan pengalaman belanja yang nyaman dengan sistem operasional yang teratur.</li>
                <li class="text-gray-600 dark:text-gray-300">Membangun kepercayaan pelanggan melalui transparansi harga dan metode pembayaran yang fleksibel.</li>
              </ul>
            </section>
            <section class="mt-6 bg-surface-100 dark:bg-gray-700 p-6 rounded-md">
              <h3 class="text-xl font-semibold mb-4 text-primary dark:text-secondary">
                Lokasi
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Jl. D.I. Panjaitan No. 6, Sungai Pinang Dalam, Kec. Sungai Pinang, Kota Samarinda, Kalimantan Timur 75117
              </p>
            </section>
            <section class="mt-6 bg-surface-100 dark:bg-gray-700 p-6 rounded-md">
              <h3 class="text-xl font-semibold mb-4 text-primary dark:text-secondary">
                Jam Operasional
              </h3>
              <ul class="space-y-2">
                <li class="text-gray-600 dark:text-gray-300">Senin - Sabtu: 09:30 - 12:00 & 13:30 - 18:00</li>
                <li class="text-gray-600 dark:text-gray-300">Minggu: Tutup</li>
              </ul>
            </section>
            
            <!-- Facility Section -->
            <section class="mt-6 bg-surface-100 dark:bg-gray-700 p-6 rounded-md">
              <h3 class="text-xl font-semibold mb-4 text-primary dark:text-secondary">
                Fasilitas Toko
              </h3>
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
                  <div class="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 flex items-center justify-center text-gray-500">
                    Gambar Fasilitas Toko
                  </div>
                </div>
              </div>
            </section>
            
            <section class="mt-6 bg-surface-100 dark:bg-gray-700 p-6 rounded-md">
              <h3 class="text-xl font-semibold mb-4 text-primary dark:text-secondary">
                Kebijakan Pembayaran
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Transaksi di Toko Surya Abadi dapat dilakukan melalui dua metode:
              </p>
              <ul class="list-disc pl-5 mt-2 space-y-1">
                <li class="text-gray-600 dark:text-gray-300">Tunai (Cash)</li>
                <li class="text-gray-600 dark:text-gray-300">Transfer Bank</li>
              </ul>
            </section>
          </div>

          <div class="space-y-6">
            <h2 class="text-3xl font-bold mb-4">Katalog Produk Utama</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ProductCategory v-for="category in categories" :key="category" :name="category" />
            </div>
            <div class="mt-6 bg-surface-100 dark:bg-gray-700 p-6 rounded-md">
              <h3 class="text-xl font-semibold mb-4 text-primary dark:text-secondary">
                Sejarah dan Latar Belakang
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Toko Surya Abadi didirikan pada tahun 2011 oleh Anton Rachman (Iwan). Sejak berdiri, toko ini telah menjadi mitra terpercaya masyarakat Samarinda dalam memenuhi kebutuhan sehari-hari. Dengan komitmen terhadap kualitas produk dan pelayanan yang baik, Toko Surya Abadi terus berkembang untuk memberikan pengalaman belanja yang nyaman dan bermakna bagi setiap pelanggan.
              </p>
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
