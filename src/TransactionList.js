import Transaction from "./Transaction";
function TransactionList({ items, removeItem }) {
  //inc for income
  //exp for expenses
  function deleteItemHandler(i) {
    let filteredItems = items.filter((item) => item !== i);
    removeItem(filteredItems);
  }
  return (
    <ul class="trans" id="trans">
      {items.map((i) => (
        <Transaction data={i} deleteItemHandler={deleteItemHandler} />
      ))}
    </ul>
  );
}
export default TransactionList;
