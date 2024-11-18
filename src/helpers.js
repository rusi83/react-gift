
export const getGift = async ( category ) => {
  const apiKey = import.meta.env.VITE_API_KEY_GIPHY;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=5`;
  // Función para simular el retraso
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  // Simular un retraso de 1 segundo
  await delay(1000);

  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifts = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
  }));
  return gifts;
}
