function Transaction({ data, deleteItemHandler }) {
  return (
    <li class={data.amount >= 0 ? "inc" : "exp"}>
      {data.discription}
      <span>{data.amount}</span>
      <button class="btn-del" onClick={() => deleteItemHandler(data)}>
        x
      </button>
    </li>
  );
}
export default Transaction;
