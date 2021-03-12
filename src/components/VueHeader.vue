<template>
  <nav
    class="flex justify-between items-center bg-blue-600 px-4 py-2 lg:py-3 lg:rounded-md z-30"
  >
    <div class="text-white flex items-center">
      <a
        href="#"
        class="font-semibold text-lg lg:text-xl md:text-xl lg:mr-20 lg:ml-6"
      >
        LOGO
      </a>
      <div class="space-x-10 hidden md:block">
        <a v-for="(item, index) in Array(4)" :key="index" ref="#"
          >Menu</a
        >
      </div>
    </div>

    <div class="relative">
      <button
        @click="isDrawer = !isDrawer"
        class="border-2 border-white w-8 h-8 lg:w-9 lg:h-9 rounded-full focus:outline-none overflow-hidden"
      >
        <img
          class="w-full h-full object-cover"
          src="../assets/img/avatar.jpg"
          alt=""
        />
      </button>

      <div
        v-if="isDrawer"
        class="bg-white dark:bg-gray-800 rounded-sm w-52 border shadow-md absolute top-10 -left-44 z-50 dark:border-gray-700"
      >
        <div class=" px-3 py-2">
          <div class="flex items-center">
            <div
              class="h-5 w-5  text-gray-400 flex-none flex items-center mr-2"
            >
              <svg
                class="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="text-gray-600 text-base dark:text-gray-300">
              My Profile
            </h3>
          </div>
          <p class="text-gray-400 text-sm dark:text-gray-100 ml-7">
            Change settings of your account
          </p>
        </div>

        <div
          class="border-t border-gray-100 dark:border-gray-700 py-2 px-3 flex items-center"
        >
          <div class="h-4 w-4 text-red-500 mr-2">
            <svg
              class="h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <span class="text-red-500 text-sm">Logout</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "VueHeader",
  data() {
    return {
      isDrawer: true,
    };
  },
};
</script>

<style scoped>
/* * {
    border: 1px solid red;
  } */
</style>
