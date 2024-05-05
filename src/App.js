import "./App.css";

import Stats from "./Stats";
import Form from "./Form";
import TransactionList from "./TransactionList";
import { useState } from "react";
function App() {
  const [items, setItems] = useState([]);
  function addItem(i) {
    let newItems = [...items, i];
    setItems(newItems);
  }
  function removeItem(filteredItems) {
    setItems(filteredItems);
  }
  return (
    <div class="container">
      <div class="ledger">
        <Stats items={items} />
        <Form handler={addItem} />
      </div>
      <div class="transaction">
        <h3>Transaction Details</h3>
        <TransactionList items={items} removeItem={removeItem} />
      </div>
    </div>
  );
}

export default App;
