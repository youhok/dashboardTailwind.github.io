<template>
      <header
        class="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto mb-4"
      >
        <button class="block md:hidden p-2 text-gray-700 mr-2">
          <svg viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6">
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div class="relative w-full max-w-4xl mr-6 sm:mr-8 md:mr-16 lg:mr-24">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            class="absolute h-6 w-6 text-gray-400 mt-2 ml-3"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="Search for objects, contacts, documents etc."
            class="pl-10 w-full pr-4 py-2 border border-gray-300 shadow-sm rounded-lg"
          />
        </div>
        <div class="flex flex-shrink-0">
          <button class="flex items-center p-2 sm:mr-2">
            Profile
            <svg viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 ml-2">
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div
            class="h-10 w-10 hidden sm:block border border-gray-400 bg-gray-300 overflow-hidden rounded-full"
          >
            <img
              src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1705968000&semt=ais"
              alt="user avatar"
              class="object-cover"
            />
          </div>
        </div>
      </header>
</template>

<script setup>

</script>

<style scoped>

</style>