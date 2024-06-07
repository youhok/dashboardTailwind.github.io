<template>
  <div>
    <!-- header page -->

    <!-- aside -->
    <aside
      class="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2"
      style="height: 95vh"
      x-show="asideOpen"
    >
     
       
        <router-link v-for="routes in route" :key="routes.name"  :to="routes.path" class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600" >
          <span class="text-2xl"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            data-slot="icon"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </span>
          {{ routes.name }}
        </router-link>
     

     
     
    </aside>
  </div>
</template>

<script setup>
import route from '@/router/route';

const routes = route[0].children.filter((rc) => rc.name !== 'routeChecker' && rc.name !== 'project.detail');
</script>

<style lang="scss" scoped>
</style>

  