import React, { useEffect } from "react";
import { Title } from "./components/Title";
import { Header } from "./containers/Header";
import { Card } from "./components/Card";
import { useCards } from "./hooks/useCards";

function App() {
  const { getCards, cards } = useCards();
  useEffect(() => {
    if (cards.length === 0) {
      getCards();
    }
  }, [cards, getCards]);
  return (
    <div className="min-h-full">
      <Header />
      <main className="min-w-full">
        <section
          className="
        flex
        justify-center
        my-14	
        "
        >
          <Title />
        </section>
        <section className="m-auto container grid sm:grid-cols-1 md:grid-cols-3 gap-4">
          {/* {console.log("CARDS", cards)} */}
          {cards.map((card) => (
            <Card images={card.images} title={card.title} />
          ))}
          <Card images={[]} title="Crear nueva lista" type="addNew" />
        </section>
      </main>
    </div>
  );
}

export default App;
