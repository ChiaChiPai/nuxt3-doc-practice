<script setup>
const resetError = async(error) => {
  await navigateTo(
    '/nestedError'
  )
  error.value = null
}
</script>

<template>
  <div class="flex h-screen w-full">
    <div class="w-1/4 bg-gray-600" />
    <div class="flex-2 w-3/4 bg-red-100">
      <nuxt-link to="nestedError/child">
        /child
      </nuxt-link>
      <NuxtErrorBoundary>
        <NuxtPage />
        <template #error="{ error }">
          <p>
            Something went wrong
            <code>{{ error }}</code>
          </p>
          <button @click="resetError(error)">
            reset
          </button>
        </template>
      </NuxtErrorBoundary>
    </div>
  </div>
</template>

<style lang="postcss">
</style>