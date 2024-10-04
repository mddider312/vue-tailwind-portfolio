<!-- src/components/AboutSection.vue -->
<template>
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-semibold mb-8">About Me</h2>
        <div class="flex flex-col md:flex-row justify-center items-center">
          <img src="https://via.placeholder.com/150" alt="About Me" class="rounded-full mb-6 md:mb-0 md:mr-6" />
          <p class="max-w-lg text-lg">
            I'm a skilled Laravel developer with over six years of experience, specializing web application development, UI/UX design, and backend services.
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'About',
  };
  </script>
  