import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { createServer, Model } from "miragejs"

createServer({
  models: {
    transaction: Model
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance website",
          type: "deposit",
          category: "Desenvolvimento",
          value: 5000,
          createdAt: new Date("2021-08-31 17:00:00"),
        },
        {
          id: 2,
          title: "Alugel de apartamento",
          type: "withdraw",
          category: "Aluguel",
          value: 1000,
          createdAt: new Date("2021-08-31 17:00:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api"
    this.get("/transactions", () => {
     return this.schema.all("transactions")
    })
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create("transactions", data)
    })
  }
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


