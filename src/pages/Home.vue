<template>
  <div class="md:px-6 md:py-2">
    <VueHeader />

    <section>
      <h1 class="text-base my-4 pl-4 md:pl-6 font-light text-gray-400 dark:text-gray-300">
        Home /
        <span class="text-gray-500 font-semibold underline dark:text-gray-300"
          >Reports &amp; Insights</span
        >
      </h1>

        
    <div class="flex flex-wrap md:-mx-4 space-y-8 md:space-y-0">
      <div class="md:p-4 w-full md:w-1/2 lg:w-1/3 ">
        <VueGraphic class="w-full h-full" />
        
      </div>
      <div class="md:p-4 w-full md:w-1/2 lg:w-2/3 ">
        <VueTable :users="users" />
      </div>
  
    </div>

    </section>
  </div>
</template>

<script>
import VueHeader from "@/components/VueHeader.vue";
import VueTable from "@/components/VueTable.vue";
import VueGraphic from '../components/VueGraphic.vue';
export default {
  name: "Home",
  components: { VueHeader, VueTable, VueGraphic  },
    async mounted() {
      // Users
         await this.getUsers()
    // Reports
    // const reportResponse = await fetch('../api/reports');
    // const reports = await reportResponse.json();
     },
     data() {
         return {
             users: []
         }
     },
    methods: {
        async getUsers() {
            const userResponse = await fetch('/api/users');
            const users = await userResponse.json();
            this.users = users.users;
        }
    },
};
</script>

<style lang="scss" scoped></style>
