import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ExemploAxios() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [clientes, setClientes] = useState([]);
  const [enviado, setEnviado] = useState(false);

  const listaClientes = () => {
    axios
      .get("https://6722c0382108960b9cc576e0.mockapi.io/clientes")
      .then((response) => {
        setClientes(response.data);
      });
  };

  useEffect(() => {
    listaClientes();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      nome: nome,
      email: email,
    };
    axios
      .post("https://6722c03a2108960b9cc57723.mockapi.io/clientes", newPost)
      .then(() => {
        setEnviado(true);
        listaClientes();
        setNome("");
        setEmail("");
      })
      .catch(() => console.error("Erro na requisição"));
  };
  return (
    <div className="container">
      <h1>Cadastro de Clientes</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="nome">Nome:</label>
            <input
              id="nome"
              type="text"
              name="nome"
              className="my-3 form-control"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="text"
              name="email"
              className="my-3 form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          Cadastrar
        </button>
      </form>

      <h2>Clientes Cadastrados</h2>
      <ul className="list-group">
        {clientes.map((cliente) => (
          <li key={cliente.id} className="list-group-item">
            {cliente.nome} - {cliente.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
