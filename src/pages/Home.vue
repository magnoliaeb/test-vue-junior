<template>
  <div class="lg:px-6 lg:py-2">
    <VueHeader />

    <section>
      <h1
        class="text-base my-4 pl-4 md:pl-6 font-semibold text-gray-400 dark:text-gray-400"
      >
        Home /
        <span class="text-gray-500 font-semibold underline dark:text-gray-300"
          >Reports &amp; Insights</span
        >
      </h1>

      <div class="flex flex-wrap lg:-mx-4  space-y-8 lg:space-y-0">
        <div class="lg:p-4 w-full lg:w-1/3">
          <VueGraphic class="h-full" />
        </div>
        <div class="lg:p-4 w-full lg:w-2/3">
          <VueTable class="h-full" />
        </div>
      </div>
    </section>

    <div class="fixed bottom-4 right-4">
      <button
        @click="selectedTheme"
        class="w-12 h-12 bg-blue-600 flex justify-center items-center shadow-lg rounded-full text-white focus:outline-none"
      >
        <div class="w-6 h-6" v-if="!isDark">
          <svg
            class="h-full w-full"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" />
          </svg>
        </div>
        <div class="w-6 h-6" v-else>
          <svg
            class="h-full w-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import VueHeader from "@/components/VueHeader.vue";
import VueTable from "@/components/VueTable.vue";
import VueGraphic from "../components/VueGraphic.vue";

export default {
  name: "Home",
  components: { VueHeader, VueTable, VueGraphic },

  data() {
    return {
      isDark: false,
    };
  },
  mounted () {
  
    this.selectedTheme();
  },
  methods: {
   
    selectedTheme() {
      
      let htmlClasses = document.querySelector("html").classList;


        let dark = localStorage.getItem('dark')

        if (dark) {
          localStorage.removeItem("dark");
          htmlClasses.remove("dark");
          this.isDark = false
        } else {
             htmlClasses.add("dark");
          localStorage.setItem('dark', true)
          this.isDark = true
          
        }

    },
  },
};
</script>
