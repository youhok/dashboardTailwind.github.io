<template>
  <aside
      class="hidden md:block bg-white px-6 py-5 h-full w-full sm:relative sm:w-64 lg:w-1/5"
    >
      <a
        href="#"
        class="flex min-w-max-content items-center font-bold text-lg p-2 mb-12"
      >
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-6 w-6 mr-2 text-indigo-700"
        >
          <path
            d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
          />
        </svg>
        Shirt Produst UI
      </a>
      <nav
        class="text-gray-600 text-lg font-semibold min-w-max-content space-y-2"
      >
        <a
          href="#"
          class="flex items-center flex-shrink-0 px-5 py-3 rounded-full text-indigo-700 bg-indigo-100 bg-opacity-25"
        >
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-7 w-7 mr-2.5 flex-shrink-0"
          >
            <path
              d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
            />
          </svg>
          <router-link to="/">Dashboard</router-link>
        </a>
        <a
          href="#"
          class="flex items-center flex-shrink-0 px-5 py-3 rounded-full hover:bg-gray-100 hover:bg-opacity-50"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6 mx-0.5 mr-3 text-gray-400 flex-shrink-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <router-link to="/object">Objects </router-link>
        </a>
        <a
          href="#"
          class="flex items-center flex-shrink-0 px-5 py-3 rounded-full hover:bg-gray-100 hover:bg-opacity-50"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6 mx-0.5 mr-3 text-gray-400 flex-shrink-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <router-link to="/about">Teamwork</router-link>
        </a>
        <a
          href="#"
          class="flex items-center flex-shrink-0 px-5 py-3 rounded-full hover:bg-gray-100 hover:bg-opacity-50"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6 mx-0.5 mr-3 text-gray-400 flex-shrink-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
           <router-link to="/project">Project</router-link>
        </a>
        <a
          href="#"
          class="flex items-center flex-shrink-0 px-5 py-3 rounded-full hover:bg-gray-100 hover:bg-opacity-50"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6 mx-0.5 mr-3 text-gray-400 flex-shrink-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
            />
          </svg>
          <router-link to="/produst">Produst</router-link>
        </a>
        <a
          href="#"
          class="flex items-center flex-shrink-0 px-5 py-3 rounded-full hover:bg-gray-100 hover:bg-opacity-50"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6 mx-0.5 mr-3 text-gray-400 flex-shrink-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
          
          <router-link to="/document">Documents</router-link>
        </a>
      </nav>
    </aside>
</template>

<script setup>

</script>

<style scoped>

</style>