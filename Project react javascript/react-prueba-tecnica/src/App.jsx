import { useEffect } from "react";
import { useCat } from "./hooks/cat";

export const App = () => {
  const { loadRandomFact, loading, fact, imgUrl } = useCat();

  useEffect(() => {
    loadRandomFact();
  }, []);

  return (
    <main>
      <h1>App de Gaticos</h1>
      {loading && <p>Loading...</p>}
      {!loading && imgUrl && (
        <section className="content">
          <button onClick={loadRandomFact}>Nueva imagen</button>
          <img loading="lazy" src={imgUrl} alt={fact} />
          <div>{fact}</div>
        </section>
      )}
    </main>
  );
};
