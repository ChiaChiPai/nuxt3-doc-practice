<script setup>
const route = useRoute()
console.log(typeof route.params.lessonSlug)
</script>

<template>
  <div>
    /{{ $route.params.chapterSlug }}/{{ $route.params.lessonSlug }}
  </div>
</template>

<style lang="postcss">
</style>