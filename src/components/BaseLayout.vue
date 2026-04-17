<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
    <nav class="bg-surface-50 dark:bg-gray-800 shadow-lg rounded-t-md border-b-2 border-primary">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <h1 class="text-2xl font-bold text-blue-600">Toko Surya Abadi</h1>
          <div class="space-x-4">
            <a href="#" class="text-gray-600 hover:text-blue-600">Kontak: +62-812-581-0410</a>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-6xl mx-auto px-4 py-8">
      <slot></slot>
    </main>

    <footer class="bg-gray-900 text-white mt-8 border-t-2 border-primary">
      <div class="max-w-6xl mx-auto px-4 py-4">
        <p>&copy; 2023 Toko Surya Abadi. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
