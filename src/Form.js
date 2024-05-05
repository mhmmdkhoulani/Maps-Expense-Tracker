import { useState } from "react";

function Form({ handler }) {
  const [disc, setDisc] = useState("");
  const [amount, setAmount] = useState(0);

  function sumbitHandler(e) {
    e.preventDefault();
    let item = { discription: disc, amount: amount };
    handler(item);
    setDisc("");
    setAmount(0);
  }
  return (
    <form action="#" id="form" onSubmit={sumbitHandler}>
      <div class="form-control">
        <label for="desc">Description</label>
        <input
          type="text"
          name="desc"
          id="desc"
          placeholder="Enter Description"
          value={disc}
          onChange={(e) => setDisc(e.target.value)}
        />
      </div>

      <div class="form-control">
        <label for="amount">Amount</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={amount}
          placeholder="Amount"
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <button class="btn" type="submit">
        Add Transaction
      </button>
    </form>
  );
}

export default Form;
