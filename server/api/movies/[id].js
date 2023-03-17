export default defineEventHandler(async (event) => {
  const { movieKey } = useRuntimeConfig()
  const movieid = event.context.params.id
  try {
    const data = await $fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=${movieKey}&language=en-US`)
    // console.log(data)
    return data
  } catch (error) {
    console.error(error);
    return null;
  }
})