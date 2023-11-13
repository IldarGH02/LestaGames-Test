// import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
//
// export const client = new ApolloClient({
//     uri: 'https://vortex.korabli.su/api/graphql/glossary/',
//     cache: new InMemoryCache(),
// });

import { gql } from 'urql'
import { request } from 'graphql-request'
import {IShip} from "../../app/types";

export const getShipsData = async(): Promise<IShip[]> => {
    const shipsQuery = gql`
       query getVehicles {
          vehicles {
            title
            description
            icons {
              large
              medium
            }
            level
            type {
              name
              title
              icons {
                default
              }
            }
            nation {
              name
              title
              color
              icons {
                small
                medium
                large
              }
            }
          }
        }
    `
    const result = await request('https://vortex.korabli.su/api/graphql/glossary/', shipsQuery)

    return result.vehicles
}