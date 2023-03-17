export default defineEventHandler(async (event) => {
  const { movieKey } = useRuntimeConfig()
  const { searchInput } = getQuery(event)
  try {
    const data = await $fetch(`https://api.themoviedb.org/3/search/movie?api_key=${movieKey}&language=en-US&query=${searchInput}&page=1&include_adult=false`)
    // console.log(data)
    return data
  } catch (error) {
    console.error(error);
    return null;
  }
})