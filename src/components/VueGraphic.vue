<template>

  <!-- <div class=""> -->
    <article class="shadow-lg bg-white dark:bg-gray-800 px-6 pt-4 rounded-md pb-6 md:pb-0">
      <div>
        <h2 class="text-lg text-gray-400 font-medium dark:text-white">
        Why do you create s startup?
      </h2>
      <p class="text-gray-300">Trends</p>
      </div>
     <div class=" ">
        <div class="flex justify-center my-6 items-center ">
        <!-- grafico -->
        <div class="w-52 h-52 rounded-full bg-purple-600"></div>
      </div>
      <footer>
        <ul class="flex justify-center space-x-6">
          <li v-for="(item, index) in Array(4)" :key="index">
            <div class="w-3 h-3 bg-purple-600 rounded-full"></div>
            <span class="text-sm dark:text-gray-200">DUNNO</span>
          </li>
        </ul>
      </footer>
     </div>
    </article>
  <!-- </div> -->
</template>

<script>
export default {};
</script>
