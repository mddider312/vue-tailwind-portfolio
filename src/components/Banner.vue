<!-- src/components/HeroSection.vue -->
<template>
    <section class="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center">
      <div class="container mx-auto text-center px-6">
        <h1 class="text-5xl font-bold mb-6">Hi, I'm Mohammed Didar</h1>
        <p class="text-xl mb-8">Laravel Developer & Full-Stack Enthusiast</p>
        <router-link to="/projects" class="mt-8 px-6 py-3 bg-white text-blue-500 font-bold rounded-md hover:bg-gray-100">View My Work</router-link>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Banner',
  };
  </script>
  