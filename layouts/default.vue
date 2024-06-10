<template>
  <nav class="navbar">
    <NuxtLink to="/">Home</NuxtLink> |
    <NuxtLink to="/song">Add a Song</NuxtLink>
  </nav>
  <main class="main-content">
    <slot />
  </main>
</template>
