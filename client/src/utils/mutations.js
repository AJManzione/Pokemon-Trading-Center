import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation Mutation($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const CATCH_POKEMON = gql`
  mutation CatchPokemon($username: String!, $entry: Int!) {
    catchPokemon(username: $username, entry: $entry) {
      pokemonCaught {
        entry
    }
  }
}
`

export const UNCATCH_POKEMON = gql`
  mutation unCatchPokemon($username: String!, $entry: Int!) {
    unCatchPokemon(username: $username, entry: $entry) {
      pokemonCaught {
        entry
    }
    
  }
}
`

export const UPDATE_SPRITE = gql`
mutation Mutation($username: String!, $sprite: String!) {
  updateSprite(username: $username, sprite: $sprite) {
    sprite
  }
}
`

