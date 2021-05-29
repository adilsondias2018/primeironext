import { useState } from "react";

function Sobre() {
  const [counter, setCounter] = useState(1);

  function contador() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1>Sobre</h1>
      {counter}
      <button type="button" onClick={contador}>
        <h1>+</h1>
      </button>

      <div>Sobre askljd fçalksjd flasdjfçlasdkj</div>

      <a href="/index">Home</a>
    </div>
  );
}

export default Sobre;
