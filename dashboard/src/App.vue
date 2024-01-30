<script setup>
import navbar from "./components/navbar.vue";
import sidebar from "./components/sidebar.vue";
</script>

<template>
  <div class="flex text-gray-800 min-h-screen">
    <sidebar />
    <div class="flex-grow bg-gray-100">
      <navbar />
      
      <router-view v-slot="{ Component }">
        <transition 
        enter-active-class="animate__animated animate__backInRight"
        leave-active-class="animate__animated animate__backOutRight"
         mode="out-in">
          <Component :is="Component" />
        </transition>    
      </router-view>
    </div>
  </div>
</template>

<style scoped>

</style>
