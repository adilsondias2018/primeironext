import { useState } from "react";
import Btn from "../components/Button";

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
      <Btn>Botão</Btn>

      <ul>
        <li>
          <a href="/sobre">sobre</a>
        </li>
        <li>
          <a href="/contato">Contato</a>
        </li>
      </ul>
    </div>
  );
}

export default Home;
