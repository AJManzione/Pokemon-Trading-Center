import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import DexTabs from './components/DexTabs';
import Dashboard from './components/pages/Dashboard';
import GenOne from './components/pages/GenOne';
import GenTwo from './components/pages/GenTwo';
import GenThree from './components/pages/GenThree';
import GenFour from './components/pages/GenFour';
import GenFive from './components/pages/GenFive';
import GenSix from './components/pages/GenSix';
import GenSeven from './components/pages/GenSeven';
import GenEight from './components/pages/GenEight';
import GenNine from './components/pages/GenNine';
import Login from './components/pages/Login';
import Signup from './components/pages/SignUp';
import './styles/pokedex.css'
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
  return (
    <ApolloProvider client={client}>
      <Router>
        <DexTabs/>
          <Routes>
              <Route
                path='/Dashboard'
                element={<Dashboard />}
              />
              <Route
                path='/GenOne-Kanto'
                element={<GenOne />}
             />
              <Route
                path='/GenTwo-Johto'
                element={<GenTwo />}
              />
              <Route
                path='/GenThree-Hoenn'
                element={<GenThree />}
              />
              <Route
                path='/GenFour-Sinnoh'
                element={<GenFour />}
              />
              <Route
                path='/GenFive-Unova'
                element={<GenFive />}
              />
              <Route
                path='/GenSix-Kalos'
                element={<GenSix />}
              />
              <Route
                path='/GenSeven-Alola'
                element={<GenSeven />}
              />
              <Route
                path='/GenEight-Galar'
                element={<GenEight />}
              />
              <Route
                path='/GenNine-Paldea'
                element={<GenNine />}
              />
              <Route
                path='/Login'
                element={<Login />}
              />
              <Route
                path='/SignUp'
                element={<Signup />}
              />
          </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
