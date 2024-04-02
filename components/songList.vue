<template>
  <main>
    <h1>Songs on the website:</h1>
    <div v-for="song in songs" :key="song.id">
      <h3>{{ song.title }}:</h3>
      <p>{{ song.description }}</p>
      <p>ID: {{ song.id }}</p>
    </div>
  </main>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
const { data: songs } = await useFetch(runtimeConfig.public.apiBase + "/song");
</script>
