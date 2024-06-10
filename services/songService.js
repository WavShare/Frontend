async function addSong(song, config) {
  try {
    const response = await $fetch(`${config.public.apiBase}/song`, {
      method: "POST",
      body: song,
    });
    return response;
  } catch (error) {
    console.error("Error adding song:", error);
    throw error;
  }
}

async function getSongs(config) {
  try {
    const songs = await $fetch(`${config.public.apiBase}/song`, {
      method: "GET",
    });
    return songs;
  } catch (error) {
    console.error("Error fetching songs:", error);
    throw error;
  }
}

export { addSong, getSongs };
