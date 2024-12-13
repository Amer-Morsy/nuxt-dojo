export default defineEventHandler(async (event) => {
  const { code } = event.context.params;
  const { currencyKey } = useRuntimeConfig();
  // api call with private key
  const { data } = await $fetch(
    `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`
  );

  return data;
});