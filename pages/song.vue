<template>
  <main>
    <div>
      <h1>Create a song</h1>
      <form @submit="addSongAndClear(song)">
        <h3>Name & describe your song</h3>

        <label>Title</label>
        <input
          v-model="song.title"
          type="text"
          placeholder="Title"
          class="field"
        />

        <label>Description</label>
        <input
          v-model="song.description"
          type="text"
          placeholder="Description"
          class="field"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
    <songList />
  </main>
</template>

<script setup>
import songList from "~/components/songList.vue";

const runtimeConfig = useRuntimeConfig();

const song = {
  title: "",
  description: "",
};

async function addSongAndClear(song) {
  if (song.title.length === 0 || song.description.length === 0) {
    return;
  }

  await $fetch(runtimeConfig.public.apiBase + "/song", {
    method: "POST",
    body: song,
  });

  song.title = "";
  song.description = "";
}
</script>
