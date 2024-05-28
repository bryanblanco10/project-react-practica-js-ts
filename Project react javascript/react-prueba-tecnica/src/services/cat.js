const apiCat = import.meta.env.VITE_API_CAT;
const apiImgCat = import.meta.env.VITE_API_IMG_CAT;

export const getRandomFact = async () => {
  try {
    const response = await fetch(apiCat);
    if (response.ok) {
      const { fact } = await response.json();
      return fact
    }
  } catch (error) {
    return error
  }
}

export const getImgCat = async (fact) => {
  try {
    const { url } = await fetch(`${apiImgCat}/${fact}`);
    return url
  } catch (error) {
    return error
  }
}