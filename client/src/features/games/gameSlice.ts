import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { apiUrl } from "@/common/apiurl";
import axios from "axios";


export const fetchAllGames = createAsyncThunk('games/allGames', async () => {
    const response = await axios.get(`${apiUrl}/games?key=${import.meta.env.API_KEY}`)
    return response.data.results;
})

export const fetchGameDetails = createAsyncThunk('games/gameDetails', async (id: string) => {
    const response = await axios.get(`${apiUrl}/games/${id}/key=${import.meta.env.API_KEY}`)
    return response.data;
})

interface gameTypes{
    allGames: [],
    gameDetails:object
}
interface allGameState{
    games: {
        allGames:[]
    }
}

interface gameDetailState{
    games: {
        gameDetails:object
    }
}
const initialState :gameTypes= {
    allGames: [],
    gameDetails:{},
}

const gameSlice = createSlice({
    name: "games",
    initialState, 
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllGames.pending, () => {
            console.log("pending")
        })
        builder.addCase(fetchAllGames.fulfilled, (state, action:PayloadAction<[]>) => {
            state.allGames = action.payload
        })
        builder.addCase(fetchGameDetails.pending, () => {
            console.log("pending")
        })
        builder.addCase(fetchGameDetails.fulfilled, (state, action:PayloadAction<object>) => {
            state.gameDetails=action.payload
        })
    }
})

export const getAllGames = (state: allGameState) => state.games.allGames;
export const gameDetails = (state: gameDetailState) => state.games.gameDetails;

export default gameSlice.reducer