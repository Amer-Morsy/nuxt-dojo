export default defineEventHandler(async (event) => {
  // // handel query params
  // const { name } = getQuery(event);
  // // handel post body data
  // const { age } = await readBody(event);
  // return {
  //   message: `hello, ${name} your age is ${age} years old`,
  // };

  const { currencyKey } = useRuntimeConfig();
  // api call with private key
  const { data } = await $fetch(
    `https://api.currencyapi.com/v3/latest?currencies=USD&apikey=${currencyKey}`
  );

  return data;
});
