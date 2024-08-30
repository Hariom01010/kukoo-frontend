import { createSlice } from "@reduxjs/toolkit";

export const mainScreenSlice = createSlice({
    name: "mainscreen",
    initialState: {
        value: "friends"
    },
    reducers: {
        setMainScreenRequests: ((state)=>{
            state.value = "requests"
        }),
        setMainScreenFriends: ((state)=>{
            state.value = "friends"
        })
    }
})

export const {setMainScreenFriends, setMainScreenRequests} = mainScreenSlice.actions
export default mainScreenSlice.reducer