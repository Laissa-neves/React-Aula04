import { useEffect, useState } from "react";

export default function ExemploEffect() {
  const [cont, setCont] = useState(0);
  const [nome, setNome] = useState("");

  //Sempre que houver uma atualização na aplicação ele executa o useEffect
  useEffect(() => {
    console.log("Executou useEffect");
  }, [cont]); //quando tiver um array como parametro vazio indica que o useEffect é executado apenas uma vez ao carregar a página
  //colocando o cont a cada atualização de cont executa o useEffect

  useEffect(() => {
    // setTimeout(() => {
    //   setNome("Laíssa perfeita! ><");
    // }, 5000);
    setInterval(() => {
      setHora(new Date());
    }, 1000);
  });

  return (
    <div>
      <h1>useEffect</h1>
      <hr />
      <h2>Contador:{cont}</h2>
      <button onClick={() => setCont(cont + 1)}>Incrementar</button>
      {/* <p>Nome:{nome}</p> */}
      <p>Hora:{hora.toLocaleTimeString()}</p>
    </div>
  );
}
