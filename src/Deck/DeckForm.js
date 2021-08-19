import React from "react";

function DeckForm({ name, setName, description, setDescription }) {
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };
  
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  
  
  return (
    <form className="d-flex flex-column">
      <label className="font-weight-bold" name="name" id="name">
        Name:
        <input
          type="text"
          style={{ width: "100%" }}
          value={name}
          placeholder="Deck Name"
          onChange={handleChangeName}
        />
      </label>
      <label className="font-weight-bold" name="description" id="description">
        Description:
        <textarea
          style={{ width: "100%" }}
          value={description}
          placeholder="description of the deck"
          onChange={handleChangeDescription}
        ></textarea>
      </label>
    </form>
  );
}

export default DeckForm;
