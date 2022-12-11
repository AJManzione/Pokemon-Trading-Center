import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query users {
        username
        pokemonCaught {
        _id
        entry
        name
        type
        }
        _id
    
` 
