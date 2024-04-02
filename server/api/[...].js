const runtimeConfig = useRuntimeConfig();

export default defineEventHandler((event) => {
  return $fetch(runtimeConfig.public.apiBase + event.node.req.url);
});
