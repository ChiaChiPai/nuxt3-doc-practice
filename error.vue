<template>
  <div class="flex flex-col">
    <div v-if="error.statusCode === '404'">
      <h1>404</h1>
      <p>Page does not exist</p>
    </div>
    <div v-else>
      <h1>Dong</h1>
      <p>It looks like something went wrong</p>
      <p>Sorry for that</p>
    </div>
    <div class="mt-5">
      <p>
        <strong>{{ error.message }}</strong>
      </p>
      <p>
        Go
        <a
          @click="handleError"
        >
          back
        </a>
      </p>
    </div>
  </div>
</template>

<script setup>
// useError 和 clearError 只能在 server side 使用
const error = useError()
const handleError = () => {
  clearError({
    redirect: '/nestedError'
  })
}
</script>