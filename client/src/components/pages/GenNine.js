import React, { useState, useEffect, useRef } from "react";
import pokeballOpen from "../../images/pokeball-open.png";
import pokeballClosed from "../../images/pokeball-closed.png";
import Tada from "react-reveal/Tada";
import { useMutation, useQuery } from "@apollo/client";
import { CATCH_POKEMON, UNCATCH_POKEMON } from "../../utils/mutations";
import { QUERY_USER } from "../../utils/queries";
import bug from "../../images/types/bug.png";
import dark from "../../images/types/dark.png";
import dragon from "../../images/types/dragon.png";
import electric from "../../images/types/electric.png";
import fairy from "../../images/types/fairy.png";
import fire from "../../images/types/fire.png";
import flying from "../../images/types/flying.png";
import fighting from "../../images/types/fighting.png";
import ghost from "../../images/types/ghost.png";
import grass from "../../images/types/grass.png";
import ground from "../../images/types/ground.png";
import ice from "../../images/types/ice.png";
import normal from "../../images/types/normal.png";
import poison from "../../images/types/poison.png";
import psychic from "../../images/types/psychic.png";
import rock from "../../images/types/rock.png";
import steel from "../../images/types/steel.png";
import water from "../../images/types/water.png";

export default function GenNine() {
  // fetching all pokemon from JSON Data
  const [JSONdata, setJSONData] = useState([]);

  const getData = () => {
    fetch("./gen-9.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setJSONData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  // end of fetch

  // username
  const currentUser = localStorage.getItem("username");

  // queries and mutations
  const [catchPokemon, { catchErr, catchData }] = useMutation(CATCH_POKEMON);
  const [unCatchPokemon, { unCatchErr, unCatchData }] =
    useMutation(UNCATCH_POKEMON);

  const { loading, data: userValue } = useQuery(QUERY_USER, {
    variables: { username: currentUser },
  });

  // users pokemon caught state
  const [userData, setUserData] = useState({
    pokemonCaught: [],
  });

  //  setting the state of pokemon caught
  useEffect(() => {
    if (!loading && userValue) {
      setUserData({
        pokemonCaught: userValue?.user?.pokemonCaught?.map(
          (caught) => caught.entry
        ),
      });
    }
  }, [loading, userValue]);

  function newCatch(entry) {
    catchPokemon({
      variables: {
        username: currentUser,
        entry: parseFloat(entry),
      },
    });
  }

  function releaseCatch(entry) {
    unCatchPokemon({
      variables: {
        username: currentUser,
        entry: parseFloat(entry),
      },
    });
  }

  function toggleCatch(entry) {
    if (!userData.pokemonCaught.includes(parseFloat(entry))) {
      newCatch(entry);
      userData.pokemonCaught = [...userData.pokemonCaught, parseFloat(entry)];
      document.getElementById(`${entry}`).src = pokeballClosed;
      console.log(userData.pokemonCaught);
    } else {
      releaseCatch(entry);
      userData.pokemonCaught = userData.pokemonCaught.filter(
        (pokemon) => pokemon != parseFloat(entry)
      );
      document.getElementById(`${entry}`).src = pokeballOpen;
      console.log(userData.pokemonCaught);
    }
  }

  const getTypeOne = (splitFirst) => {
    let type = splitFirst.trim();
    let split = type.split(" ");

    switch (split[0]) {
      case "Bug":
        return bug;
      case "Dark":
        return dark;
      case "Dragon":
        return dragon;
      case "Electric":
        return electric;
      case "Fairy":
        return fairy;
      case "Fire":
        return fire;
      case "Flying":
        return flying;
      case "Fighting":
        return fighting;
      case "Ghost":
        return ghost;
      case "Ground":
        return ground;
      case "Ice":
        return ice;
      case "Normal":
        return normal;
      case "Poison":
        return poison;
      case "Psychic":
        return psychic;
      case "Rock":
        return rock;
      case "Steel":
        return steel;
      case "Water":
        return water;
      case "Grass":
        return grass;
    }
  };

  const getTypeTwo = (splitSecond) => {
    let types = splitSecond.trim();
    let split = types.split(" ");

    switch (split[1]) {
      case "Bug":
        return bug;
      case "Dark":
        return dark;
      case "Dragon":
        return dragon;
      case "Electric":
        return electric;
      case "Fairy":
        return fairy;
      case "Fire":
        return fire;
      case "Flying":
        return flying;
      case "Fighting":
        return fighting;
      case "Ghost":
        return ghost;
      case "Ground":
        return ground;
      case "Ice":
        return ice;
      case "Normal":
        return normal;
      case "Poison":
        return poison;
      case "Psychic":
        return psychic;
      case "Rock":
        return rock;
      case "Steel":
        return steel;
      case "Water":
        return water;
      case "Grass":
        return grass;
    }
  };

  return (
    <div className="gen-nine-bg">
      <div className="container pt-3">
        <h1 
          style={{color: 'white'}}
          className="text-center">Paldea
        </h1>
        <hr
            style={{borderTop: '2px solid white'}}>
        </hr>
        <ul className="list-group">
          {JSONdata.map((pokemon, i) => {
            return (
              <li
                className="list-group-item-success m-1"
                key={parseFloat(pokemon.entry)}
              >
                <ul className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center justify-content-around">
                    <li>
                      <img
                        width="70px"
                        src={`../../assets/sprites/Gen-9-Sprites/${parseFloat(
                          pokemon.entry
                        )}.png`}
                      ></img>
                    </li>
                    <li className="m-4">
                      <h4>#{pokemon.entry}</h4>
                    </li>
                  </div>
                  <li>
                    <h4>{pokemon.name}</h4>
                  </li>
                  <li>
                    <img width="50px" src={getTypeOne(pokemon.type)}></img>
                    <img width="50px" src={getTypeTwo(pokemon.type)}></img>
                  </li>
                  <li>
                    <Tada duration={2500}>
                      <img
                        id={parseFloat(parseFloat(pokemon.entry))}
                        key={parseFloat(parseFloat(pokemon.entry))}
                        className="pokeball"
                        src={
                          !userData.pokemonCaught.includes(
                            parseFloat(pokemon.entry)
                          )
                            ? pokeballOpen
                            : pokeballClosed
                        }
                        onClick={() => toggleCatch(parseFloat(pokemon.entry))}
                      ></img>
                    </Tada>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
