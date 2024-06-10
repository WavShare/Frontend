<template>
  <main>
    <addSong @song-added="$refs.songList.fetchSongs()" />
    <songList ref="songList" />
  </main>
</template>

<script>
import AddSong from "~/components/song/AddSong.vue";
import SongList from "~/components/song/SongList.vue";

export default {
  components: {
    AddSong,
    SongList,
  },
  methods: {
    updateSongs() {
      this.$refs.SongList.fetchSongs();
    },
  },
};
</script>
