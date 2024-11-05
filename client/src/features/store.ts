import { configureStore } from "@reduxjs/toolkit";
import gameReducer from './games/gameSlice'

export const store = configureStore({
    reducer: {
        games: gameReducer
    }
});