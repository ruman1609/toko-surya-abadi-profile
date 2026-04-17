<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-surface-50 dark:bg-gray-800">
    <div class="space-y-6 p-6 rounded-lg border-2 border-primary/50 dark:border-gray-700/50">
      <h2 class="text-3xl font-bold text-primary dark:text-secondary">
        Toko Surya Abadi
      </h2>
      <div class="space-y-2 bg-surface-100 dark:bg-gray-700 p-4 rounded-md">
        <p class="text-gray-600 dark:text-gray-300">Berdiri sejak 2011</p>
        <p class="text-gray-600 dark:text-gray-300">Pemilik: Anton Rachman (Iwan)</p>
      </div>
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
          <li class="text-gray-600 dark:text-gray-300">Senin - Jumat: 09:30 - 12:00 & 13:30 - 18:00</li>
          <li class="text-gray-600 dark:text-gray-300">Sabtu: 09:30 - 12:00 & 13:30 - 18:00</li>
          <li class="text-gray-600 dark:text-gray-300">Minggu: Tutup</li>
        </ul>
      </section>
    </div>

    <div class="space-y-6">
      <h2 class="text-3xl font-bold mb-4">Produk Utama</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProductCategory v-for="category in categories" :key="category" :name="category" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const categories = ref([
  'Beras', 'Minyak', 'Air', 'Gula', 'Tepung',
  'Bumbu-bumbuan', 'Makanan ringan', 'Rokok'
])
</script>
