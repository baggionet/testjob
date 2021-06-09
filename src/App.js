import React from "react";
import { Provider } from "mobx-react";
import Users from "./stores/db";
import Tabla from "./dashboard";

export default function App() {
  return <Provider Users ={Users}>
    <Tabla />
  </Provider>
}