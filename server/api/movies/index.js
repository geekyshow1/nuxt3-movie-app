export default defineEventHandler(async () => {
  const { movieKey } = useRuntimeConfig()
  try {
    const data = await $fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${movieKey}`)
    // console.log(data)
    return data
  } catch (error) {
    console.error(error);
    return null;
  }
})