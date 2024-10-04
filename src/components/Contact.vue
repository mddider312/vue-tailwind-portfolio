<!-- src/components/ContactSection.vue -->
<template>
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-semibold mb-8">Contact Me</h2>
        <form class="max-w-lg mx-auto">
          <div class="mb-4">
            <label for="name" class="block text-left text-gray-700">Name</label>
            <input id="name" type="text" class="w-full p-3 border rounded-md" placeholder="Your Name" />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-left text-gray-700">Email</label>
            <input id="email" type="email" class="w-full p-3 border rounded-md" placeholder="Your Email" />
          </div>
          <div class="mb-4">
            <label for="message" class="block text-left text-gray-700">Message</label>
            <textarea id="message" rows="4" class="w-full p-3 border rounded-md" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" class="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">Send Message</button>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Contact',
  };
  </script>
  