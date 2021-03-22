<template>
  <div class="shadow-lg bg-white dark:bg-gray-800 px-6 pt-4 lg:rounded-md pb-8">
    <h2 class="text-xl font-semibold text-gray-500 mb-4 dark:text-white">Employees</h2>
    <div
      class="border-gray-200 dark:border-gray-700 rounded-md border border-b-0 my-4 overflow-x-scroll md:overflow-auto"
    >
      <table class="w-full">
        <tr class="border-gray-100 dark:border-gray-700 border-b text-gray-400 text-left text-xs dark:text-gray-200">
          <th class="pb-2 pt-6 px-4">Employee</th>
          <th class="pb-2 pt-6 px-4">Last login</th>
          <th class="pb-2 pt-6 px-4">Department</th>
          <th class="pb-2 pt-6 px-4">Status</th>
          <th class="pb-2 pt-6 px-4"></th>
        </tr>

        <tr
          v-for="(user, index) in users"
          :key="index"
          class="border-gray-100 border-b dark:border-gray-700"
        >
          <td class="py-2 px-4">
            <div class="flex items-center">
              <div class="h-6 w-6 flex-none mr-2">
                <img v-if="user.profile_img"
                  class="w-full h-full rounded-full object-cover"
                  :src="user.profile_img"
                  alt=""
                />

              </div>

              <div>
                <h3 class="text-black text-sm font-medium dark:text-gray-200">
                  {{ user.first_name }} {{ user.last_name }}
                </h3>
                <p class="text-xs text-gray-400 font-medium lowercase">
                  {{ user.email }}
                </p>
              </div>
            </div>
          </td>
          <td class="py-2 px-4">
            <h3 class="text-black text-sm font-medium dark:text-gray-200">{{ user.sessions[0] | formatDate }}</h3>
            <p class="text-xs text-gray-400 font-medium">{{ user.sessions[0] | formatDateRelative }}</p>
          </td>
          <td class="py-2 px-4">
            <h3 class="text-black text-sm font-medium dark:text-gray-200">
              {{ user.department }}
            </h3>
          </td>
          <td class=" text-sm font-medium py-2 px-4">
            <span class="text-green-500" v-if="user.status">Active</span>
            <span class="text-red-500" v-else>Inactivo</span>
          </td>
          <td class="text-center py-2 px-4">
            <button class="w-5 h-5 text-gray-400 focus:outline-none">
              <svg
                class="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import HumanizeDate from '@videsk/humanize-date'

export default {
  name: 'VueTable',
  async mounted() {
    // Users
    await this.getUsers();

  },
  data() {
    return {
      users: [],
    };
  },
  filters: {
    formatDate: value => new HumanizeDate().toLocale(value),
    formatDateRelative: (value) => new HumanizeDate().dates(value, new Date()).ago('months'),
  },
  methods: {
    async getUsers() {
      const userResponse = await fetch("/api/users");
      const resp = await userResponse.json();
      this.users = this.sortSessions(resp.users);
    },
    sortSessions(users) {
      return users.map((user) => {
        user.sessions = user.sessions.sort((a,b) => new Date(b) - new Date(a));
        return user;
      });
    },
  },
};
</script>
