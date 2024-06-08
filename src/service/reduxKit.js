import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {
            authentication: false,
        }
    },
    reducers: {
        login: (state, action) => {
            state.value.authentication = action.payload
        }
    }
})

export const { login} = userSlice.actions
export default userSlice