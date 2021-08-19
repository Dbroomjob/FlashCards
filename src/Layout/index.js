import React, { useState, useEffect } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Switch, Route } from "react-router-dom";
import { listDecks } from "../utils/api/index.js";

import Home from "../Home/Home.js";
import DeckCreate from "../Deck/DeckCreate.js";
import Deck from "../Deck/Deck.js";
import DeckEdit from "../Deck/DeckEdit.js";

function Layout() {
  const [decks, setDecks] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    async function getDecks() {
      const response = await listDecks();
      setDecks(response);
    }
    getDecks();
  }, [setDecks]);
  return (
    <>
      <Header />

      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home decks={decks} />
          </Route>
          <Route exact path="/decks/new">
            <DeckCreate
              decks={decks}
              name={name}
              setName={setName}
              description={description}
              setDescription={setDescription}
            />
          </Route>
          <Route exact path={`/decks/:deckId/edit`}>
            <DeckEdit
              name={name}
              setName={setName}
              description={description}
              setDescription={setDescription}
            />
          </Route>
          <Route path="/decks/:deckId">
            <Deck />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
