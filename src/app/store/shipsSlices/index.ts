import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getShipsData } from "../../../shared/http/graphaqldata";
import { IShip } from "../../types";

export interface IStore {
    vehicles: IShip[]
    isLoading: boolean
    status: null | string
    error: null | unknown
    nation: string | null
    level: number | null
    classShip: string | null

    filteredShips: IShip[]
    filter: boolean
}

const initialState: IStore = {
    vehicles: [],
    isLoading: false,
    status: null,
    error: null,
    nation: null,
    level: null,
    classShip: null,

    filteredShips: [],
    filter: false,
}

export const fetchVehicles = createAsyncThunk<IShip[], void>(
    'vehicles/fetchVehicles',
    async function (_, {rejectWithValue}) {
        try {
            const response = await getShipsData()

            if(!response) {
                throw new Error('Error!')
            }

            return response
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

export const vehiclesSlice = createSlice({
    name: 'vehicles',
    initialState,
    reducers: {
        filteredNation: (state, action: PayloadAction<string | null>) => {
            state.nation = action.payload
            state.filteredShips = state.vehicles.filter((item) => item.nation.title === action.payload)
            if (state.level) {
                state.filteredShips = state.filteredShips.filter((item) => item.level === state.level)
            }
            if (state.classShip) {
                state.filteredShips = state.filteredShips.filter((item) => item.type.title === state.classShip)
            }

            if (state.filteredShips) {
                state.filter = true
            } else {
                state.filter = false
            }
        },
        filteredLevel: (state, action: PayloadAction<number | null>) => {
            state.filteredShips = state.vehicles.filter((item) => item.level === action.payload)
            if (state.nation) {
                state.filteredShips = state.filteredShips.filter(
                    (item) => item.nation.title === state.nation
                )
            }
            if (state.classShip) {
                state.filteredShips = state.filteredShips.filter((item) => item.type.title === state.classShip)
            }
        },
        filteredClass: (state, action: PayloadAction<string | null>) => {
            state.classShip = action.payload
            state.filteredShips = state.vehicles.filter((item) => item.type.title === action.payload)
            if (state.nation) {
                state.filteredShips = state.filteredShips.filter(
                    (item) => item.nation.title === state.nation
                )
            }
            if (state.level) {
                state.filteredShips = state.filteredShips.filter((item) => item.level === state.level)
            }
            if (state.filteredShips) {
                state.filter = true
            } else {
                state.filter = false
            }
        },
        resetFilter: (state, action) => {
            state.filter = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchVehicles.pending, (state) => {
                state.isLoading = true;
                state.error = null;
                state.status = 'loading'
            })
            .addCase(fetchVehicles.fulfilled, (state, action) => {
                state.vehicles = action.payload;
                state.status = 'resolved'
                state.isLoading = false
            })
            .addCase(fetchVehicles.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            })
    }
})

export const {
    filteredNation,
    filteredLevel,
    filteredClass,
    resetFilter
} = vehiclesSlice.actions

export default vehiclesSlice.reducer