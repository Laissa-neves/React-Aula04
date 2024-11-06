import React, { useEffect, useState } from "react";

export default function ExemploFecth() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/laissa-neves")
      .then((resposta) => resposta.json())
      .then((json) => setUser(json))
      .catch("Problema ao carregar os dados!");
  }, []);

  return (
    <div>
      <h1>Dados do Usuário</h1>
      <hr />
      <p>Login: {user.login}</p>
      <p>Link: {user.html_url}</p>
      <img src={user.avatar_url} alt="Foto" />
    </div>
  );
}
