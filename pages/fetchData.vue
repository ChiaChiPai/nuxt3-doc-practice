<template>
  <div>
    <p>get data{{ data }}</p>
    <p>post data {{ postFake }}</p>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/fake')

const { data: postFake } = await useFetch('/api/postFake', {
  method: 'POST', 
  body: { title: 'postFake' }
})
</script>