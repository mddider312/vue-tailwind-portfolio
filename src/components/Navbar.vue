<!-- src/components/Navbar.vue -->
<template>
    <nav class="bg-gray-800 text-white py-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-2xl font-bold">My Portfolio</div>
        <div class="space-x-4">
          <router-link to="/" class="hover:text-gray-300">Home</router-link>
          <router-link to="/about" class="hover:text-gray-300">About</router-link>
          <router-link to="/projects" class="hover:text-gray-300">Projects</router-link>
          <router-link to="/skills" class="hover:text-gray-300">Skills</router-link>
          <router-link to="/contact" class="hover:text-gray-300">Contact</router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  