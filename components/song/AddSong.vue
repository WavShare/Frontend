<template>
  <main>
    <div>
      <h1>Create a song</h1>
      <form @submit.prevent="addSongAndClear(song)">
        <h3>Name & describe your song</h3>
        <div>
          <label>Title</label>
          <input
            v-model="song.title"
            type="text"
            placeholder="Title"
            class="field"
          />
        </div>
        <div>
          <label>Description</label>
          <input
            v-model="song.description"
            type="text"
            placeholder="Description"
            class="field"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </main>
</template>

<script setup>
import { defineEmits, ref } from "vue";
import { addSong } from "~/services/songService";

const emit = defineEmits(["song-added"]);
const song = ref({
  title: "",
  description: "",
});

async function addSongAndClear() {
  if (song.value.title.length === 0 || song.value.description.length === 0) {
    return;
  }

  await addSong(song.value, useRuntimeConfig());
  song.value.title = "";
  song.value.description = "";
  emit("song-added");
}
</script>
