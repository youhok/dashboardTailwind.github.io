<template>
  <!-- main content page -->
  <div >
      <a
  class="relative block p-8 overflow-hidden border bg-white border-slate-100 rounded-lg ml-6 mr-6"
  href=""
>
  <span
    class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

  <div class="justify-between sm:flex">
    <div>
      <h5 class="text-xl font-bold text-slate-900">
    {{ props.message }} 
      </h5>
      <p class="mt-1 text-xs font-medium text-slate-600">{{ props.price }}</p>
    </div>

    <div class="flex-shrink-0 hidden ml-3 sm:block">
      <img
        class="object-cover w-16 h-16 rounded-lg shadow-sm"
        src="https://github.com/creativetimofficial/argon-design-system/blob/master/assets/img/faces/team-2.jpg?raw=true"
        alt=""
      />
    </div>
  </div>

  <div class="mt-4 sm:pr-8">
    <p class="text-sm text-slate-500">
      Open source Tailwind UI components and templates to
bootstrap your new apps, projects or landing sites! Open source Tailwind UI.
    </p>
    </div>
    <dl class="flex mt-6">
    <div class="flex flex-col-reverse">
      <dt class="text-sm font-medium text-slate-600">Published</dt>
      <dd class="text-xs text-slate-500">31st June, 2022</dd>
    </div>

    <div class="flex flex-col-reverse ml-3 sm:ml-6">
      <dt class="text-sm font-medium text-slate-600">Reading time</dt>
      <dd class="text-xs text-slate-500">5 minutes</dd>
    </div>
  </dl>
</a>
        </div>
</template>

<script setup>
const props = defineProps({
  message: {
    type: String,
  },
  price:{
    type:Number,
    default: 0
  }
});

</script>

<style scoped>
</style>