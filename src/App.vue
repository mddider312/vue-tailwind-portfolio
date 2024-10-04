<!-- src/App.vue -->
<template>
  <div class="font-sans antialiased text-gray-900">
    <Navbar />
    <Banner />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Banner from './components/Banner.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Banner,
    Footer,
  },
};
</script>
