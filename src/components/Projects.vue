<!-- src/components/ProjectsSection.vue -->
<template>
    <section class="bg-white py-16">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-semibold mb-8">My Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="border rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/300" alt="Project 1" class="w-full h-48 object-cover" />
            <div class="p-4">
              <h3 class="text-xl font-bold mb-2">Project 1</h3>
              <p class="text-gray-600 mb-4">This is a sample project description.</p>
              <a href="#" class="text-blue-500 hover:underline">View Project</a>
            </div>
          </div>
          <!-- Add more project cards if needed -->
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Projects',
  };
  </script>
  