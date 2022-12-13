import React, { useEffect, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import DexTabs from './components/DexTabs';
import Dashboard from "./components/pages/Dashboard";
import GenOne from "./components/pages/GenOne";
import GenTwo from "./components/pages/GenTwo";
import GenThree from "./components/pages/GenThree";
import GenFour from "./components/pages/GenFour";
import GenFive from "./components/pages/GenFive";
import GenSix from "./components/pages/GenSix";
import GenSeven from "./components/pages/GenSeven";
import GenEight from "./components/pages/GenEight";
import GenNine from "./components/pages/GenNine";
import Login from "./components/pages/Login";
import Signup from "./components/pages/SignUp";
import Trainers from "./components/pages/Trainers";
import "./styles/pokedex.css";
import DexTabs from "./components/DexTabs";


const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  useEffect(() => {
    getLocal();
  }, []);

  const [isLogged, setLogginStatus] = useState("");
  
  const getLocal = () => {
    const token = localStorage.getItem("id_token");
    setLogginStatus(token);
  };

  return (
    <ApolloProvider client={client}>
      <Router>
        <DexTabs isLogged={isLogged} />
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/GenOne" element={<GenOne />} />
          <Route path="/GenTwo" element={<GenTwo />} />
          <Route path="/GenThree" element={<GenThree />} />
          <Route path="/GenFour" element={<GenFour />} />
          <Route path="/GenFive" element={<GenFive />} />
          <Route path="/GenSix" element={<GenSix />} />
          <Route path="/GenSeven" element={<GenSeven />} />
          <Route path="/GenEight" element={<GenEight />} />
          <Route path="/GenNine" element={<GenNine />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/sprites" element={<Trainers />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
