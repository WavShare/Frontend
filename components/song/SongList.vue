<template>
  <main>
    <div>
      <h1>Songs on the website</h1>
      <div v-for="song in songs" :key="song.id">
        <h3>{{ song.title }}</h3>
      </div>
    </div>
  </main>
</template>

<script setup>
import { getSongs } from "~/services/songService";
import { ref, onMounted } from "vue";
import { useRuntimeConfig } from "#imports";

const songs = ref([]);

async function fetchSongs() {
  songs.value = await getSongs(useRuntimeConfig());
}

onMounted(() => {
  fetchSongs();
});

defineExpose({ fetchSongs });
</script>
