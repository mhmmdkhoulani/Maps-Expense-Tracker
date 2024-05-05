function Stats({ items }) {
  let expenses = 0;
  let incomes = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].amount >= 0) {
      incomes = incomes + items[i].amount;
    } else {
      expenses = expenses + items[i].amount;
    }
  }
  let balance = incomes + expenses;
  return (
    <div>
      <h2>Income Expense Tracker</h2>
      <h4>Your Balance</h4>
      <h1 id="balance">$ {balance}.00</h1>
      <div class="inc-exp-container">
        <div class="inc">
          <h4>Income</h4>
          <p id="inc-amt" class="amt plus">
            $ {incomes}.00
          </p>
        </div>
        <div class="exp">
          <h4>Expense</h4>
          <p id="exp-amt" class="amt minus">
            $ {expenses}.00
          </p>
        </div>
      </div>
    </div>
  );
}
export default Stats;
