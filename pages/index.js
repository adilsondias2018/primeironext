import { useState } from "react";

function Home() {
  const [counter, setCounter] = useState(1);

  function contador() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1>Pagina Inicial</h1>
      {counter}
      <button type="button" onClick={contador}>
        +
      </button>

      <div>açlsdkjf alksdjfçalksdjf açlksdjfç aslkdfjaçlsdjfaçlkj</div>
    </div>
  );
}

export default Home;
