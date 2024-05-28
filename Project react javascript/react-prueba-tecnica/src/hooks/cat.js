import { useState } from "react";
import { getRandomFact, getImgCat } from "../services/cat";
export const useCat = () => {
  const [fact, setFact] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadRandomFact = async () => {
    try {
      setLoading(true);
        const result = await getRandomFact();
        //Mas de una palabra usa el slice(0, n), split tiene segundo parametro (" ", 3)
        const newFact = result.split(" ")[0]
        setFact(newFact)
        loadCatFirstFat(newFact)
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  const loadCatFirstFat = async (newFact) => {
    try {
      const url = await getImgCat(newFact)
      setImgUrl(url)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  return {
    loadRandomFact,
    loading,
    fact,
    imgUrl
  }
}