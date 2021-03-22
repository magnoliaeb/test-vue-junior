<template>
  <div id="app" class="bg-gray-50 h-full dark:bg-gray-900" >
    <home />
  </div>
</template>

<script>
import Home from './pages/Home.vue';

export default {
  components: { Home },
  name: 'app',
}
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body {
  @apply w-full h-full m-0;
}

</style>
