import { createSlice } from "@reduxjs/toolkit";

export const authenticateSlice = createSlice({
    name: "isAuthenticate",
    initialState: {
        value: [false,""]
    },
    reducers: {
        setIsAuthenticated: (state,action)=>{
            state.value = [true, action.payload]
        },
        resetIsAuthenticated: state=>{
            state.value = [false, ""]
        }
    }
})

export const { setIsAuthenticated, resetIsAuthenticated} = authenticateSlice.actions
export default authenticateSlice.reducer