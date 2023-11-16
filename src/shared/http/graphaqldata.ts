import { gql } from 'urql'
import { request } from 'graphql-request'
import { IShip } from "../../app/types";

const API_URL = process.env.REACT_APP_PUBLIC_API_URL

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
    const result = await request(`${API_URL}`, shipsQuery)

    return result.vehicles
}