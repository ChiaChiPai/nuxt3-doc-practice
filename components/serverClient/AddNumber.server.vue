<script setup>
const count = ref(0)
</script>

<template>
  <div class="flex">
    <p>{{ count }}</p>
    <button
      class="ml-2 border-2 bg-gray-100"
      @click="count++"
    >
      Add
    </button>
  </div>
</template>

<style lang="postcss">
</style>