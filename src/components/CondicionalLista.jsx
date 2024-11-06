import React from "react";

export default function CondicionalLista() {
  const produtos = ["TV", "Notebook", "Mouse", "Teclado", "Monitor"];
  return (
    <div>
      {produtos.length > 0 ? (
        produtos.map((p, index) => <p key={index}>{p}</p>)
      ) : (
        <p>Não existem produtos</p>
      )}
    </div>
  );
}
