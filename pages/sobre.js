import { useState } from "react";

function sobre() {
  const [counter, setCounter] = useState(1);

  function contador() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1>Sobre</h1>
      {counter}
      <button type="button" onClick={contador}>
        +
      </button>

      <div>Sobre askljd fçalksjd flasdjfçlasdkj</div>

      <a href="/index">Home</a>
    </div>
  );
}

export default Home;
