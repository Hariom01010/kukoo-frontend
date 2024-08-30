import {configureStore} from "@reduxjs/toolkit"
import authenticateReducer from "./Slice/tokenSlice.js"
import mainScreenReducer from "./Slice/screenSlice.js"

export default configureStore({
        reducer: {
                isAuthenticate: authenticateReducer,
                mainScreen: mainScreenReducer
        }
})