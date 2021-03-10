<template>
  <div id="app" class="dark">
    <home class="bg-gray-50 dark:bg-gray-900 h-screen dark" />
  </div>
</template>

<script>
import Home from './pages/Home.vue';

export default {
  components: { Home },
  name: 'app',
  mounted () {
    localStorage.theme = 'dark'
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
  localStorage.theme = 'dark'
} else {
  document.documentElement.classList.remove('dark')
  localStorage.theme = 'light'
}

  },
}
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

/* html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: auto;
} */

</style>
