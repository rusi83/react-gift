//BtYXZ65qDFFT4GgGWLWBfEfTRGA3907J


export const getGift = async ( category ) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=BtYXZ65qDFFT4GgGWLWBfEfTRGA3907J&q=${category}&limit=5`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifts = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
  }));
  return gifts;
}