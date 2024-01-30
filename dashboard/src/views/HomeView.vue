<template>
  <main class="flex flex-col space-y-10 px-6 py-5 max-w-6xl mx-auto">
    <h1 class="text-3xl">
      <span class="text-gray-500">Welcome back,</span>
      <span class="font-semibold"> youhok</span>
    </h1>
    <section
      class="p-6 sm:p-8 flex items-center bg-indigo-700 shadow-md rounded-lg"
    >
      <div class="mr-6">
        <header class="text-xl text-indigo-50 mb-3">
          Link your bank account to your custom account
        </header>
        <p class="sm:max-w-md text-indigo-300 leading-tight mb-5">
          Get a better overview of your rental income by having us scan your
          account for you.
        </p>
        <div class="flex flex-wrap">
          <button
            class="py-2 px-5 text-indigo-700 font-semibold bg-white rounded-full mb-3 mr-5"
          >
            Link bank account
          </button>
          <button
            class="py-2 px-5 text-white font-semibold bg-indigo-900 rounded-full mb-3 mr-5"
          >
            Later
          </button>
        </div>
      </div>
      <div class="hidden sm:block mr-0 ml-auto md:mr-8">
        <div
          class="h-32 w-32 flex items-center justify-center text-3xl text-white font-semibold border-4 border-white rounded-full"
        >
          100%
        </div>
      </div>
    </section>
    <section>
      <div class="flex justify-between items-center mb-6">
        <header class="text-xl font-semibold">Your objects at a glance</header>
        <a
          href="#"
          class="hidden sm:flex flex-shrink-0 items-center text-lg font-medium text-gray-500"
        >
          More about finances
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5 ml-1 mt-1"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a
          href="#"
          class="flex sm:hidden flex-shrink-0 items-center text-lg font-medium text-gray-500"
        >
          More
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5 ml-1 mt-1"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
      <!-- <div class="h-64 bg-white border rounded-lg shadow-md py-4 px-6">
            <div class="text-lg font-semibold">Rental income</div>
            
          </div> -->
      <div class="flex flex-wrap -mx-2 mb-2 ">
        <div class="w-full max-w-full px-3 mb-6 mx-auto bg-white">
          <div class="flex flex-wrap mt-5 mx-5 removable">
            <div
              class="w-full max-w-full px-3 mb-6 sm:w-1/4 sm:flex-none xl:mb-0 xl:w-1/4 drop-zone"
            >
              <div
                class="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable"
                draggable="true"
              >
                <!-- card body  -->
                <div
                  class="flex flex-col items-start justify-between flex-auto py-8 px-9"
                >
                  <div class="m-0">
                    <img
                      class="w-[35px]"
                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/logos/instagram.svg"
                      alt="youtube"
                    />
                  </div>
                  <div class="flex flex-col my-7">
                    <span
                      class="text-secondary-inverse text-4xl tracking-[-0.115rem] font-bold"
                      >590k</span
                    >
                    <div class="m-0">
                      <span
                        class="font-medium text-secondary-dark text-lg/normal"
                        >Followers</span
                      >
                    </div>
                  </div>
                  <span
                    class="inline-flex items-center px-2 py-1 mr-auto font-semibold text-center align-baseline rounded-lg text-base/none text-success bg-success-light border border-success"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 mr-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      ></path>
                    </svg>
                    2.86%
                  </span>
                </div>
                <!-- end card body  -->
              </div>
            </div>
            <div
              class="w-full max-w-full px-3 mb-6 sm:w-1/4 sm:flex-none xl:mb-0 xl:w-1/4 drop-zone"
            >
              <div
                class="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable"
                draggable="true"
              >
                <!-- card body  -->
                <div
                  class="flex flex-col items-start justify-between flex-auto py-8 px-9"
                >
                  <div class="m-0">
                    <img
                      class="w-[35px]"
                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/logos/youtube.svg"
                      alt="youtube"
                    />
                  </div>
                  <div class="flex flex-col my-7">
                    <span
                      class="text-secondary-inverse text-4xl tracking-[-0.115rem] font-bold"
                      >58k</span
                    >
                    <div class="m-0">
                      <span
                        class="font-medium text-secondary-dark text-lg/normal"
                        >Subscribers</span
                      >
                    </div>
                  </div>
                  <span
                    class="inline-flex items-center px-2 py-1 mr-auto font-semibold text-center align-baseline rounded-lg text-base/none text-success bg-success-light border border-success"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 mr-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      ></path>
                    </svg>
                    7%
                  </span>
                </div>
                <!-- end card body  -->
              </div>
            </div>
            <div
              class="w-full max-w-full px-3 mb-6 sm:w-1/4 sm:flex-none xl:mb-0 xl:w-1/4 drop-zone"
            >
              <div
                class="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable"
                draggable="true"
              >
                <!-- card body  -->
                <div
                  class="flex flex-col items-start justify-between flex-auto py-8 px-9"
                >
                  <div class="m-0">
                    <img
                      class="w-[35px]"
                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/logos/facebook.svg"
                      alt="youtube"
                    />
                  </div>
                  <div class="flex flex-col my-7">
                    <span
                      class="text-secondary-inverse text-4xl tracking-[-0.115rem] font-bold"
                      >896k</span
                    >
                    <div class="m-0">
                      <span
                        class="font-medium text-secondary-dark text-lg/normal"
                        >Followers</span
                      >
                    </div>
                  </div>
                  <span
                    class="inline-flex items-center px-2 py-1 mr-auto font-semibold text-center align-baseline rounded-lg text-base/none text-danger bg-danger-light border border-danger"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 mr-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
                      ></path>
                    </svg>
                    1.12%
                  </span>
                </div>
                <!-- end card body  -->
              </div>
            </div>
            <div
              class="w-full max-w-full px-3 mb-6 sm:w-1/4 sm:flex-none xl:mb-0 xl:w-1/4 drop-zone"
            >
              <div
                class="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable"
                draggable="true"
              >
                <!-- card body  -->
                <div
                  class="flex flex-col items-start justify-between flex-auto py-8 px-9"
                >
                  <div class="m-0">
                    <img
                      class="w-[35px]"
                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/logos/twitter.svg"
                      alt="youtube"
                    />
                  </div>
                  <div class="flex flex-col my-7">
                    <span
                      class="text-secondary-inverse text-4xl tracking-[-0.115rem] font-bold"
                      >77k</span
                    >
                    <div class="m-0">
                      <span
                        class="font-medium text-secondary-dark text-lg/normal"
                        >Followers</span
                      >
                    </div>
                  </div>
                  <span
                    class="inline-flex items-center px-2 py-1 mr-auto font-semibold text-center align-baseline rounded-lg text-base/none text-success bg-success-light border border-success"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 mr-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      ></path>
                    </svg>
                    9.4%
                  </span>
                </div>
                <!-- end card body  -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
</script>

<style scoped>
</style>