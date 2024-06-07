<template>
 <main class="min-h-screen w-full bg-gray-100 text-gray-700" x-data="layout">
  <Navbar />
  <div class="flex">
  <Sidebar />
    <RouterView />
    </div>
  </main>
</template>
<script setup>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";


</script>
<style scoped>


</style>
