<template>
  <header class="bg-gray-800 py-4">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="text-white font-bold text-xl">
        <img src="../assets/logo.jpg" alt="Logo" class="h-20">
      </div>
      <div class="text-4xl font-bold text-white">Re-Write</div>
      <!-- Nav Bar -->
      <nav class="hidden md:flex space-x-4">
        <a href="#" class="text-white hover:text-gray-200">Home</a>
        <a href="#" class="text-white hover:text-gray-200">About</a>
        <a href="#" class="text-white hover:text-gray-200">Services</a>
        <a href="#" class="text-white hover:text-gray-200">Contact</a>
      </nav>

      <!-- Mobile Menu Button (shown on small screens) -->
      <div class="md:hidden">
        <button class="text-white">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
