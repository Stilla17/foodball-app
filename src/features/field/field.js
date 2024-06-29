import { createSlice } from "@reduxjs/toolkit";

export const field = createSlice({
    name: "FIELDS",
    initialState: {
        value: ''
    },
    reducers: {
        inputText: (state, actions) => {
            state.value = actions.payload
        }
    }
})

export const { inputText } = field.actions

export default field.reducer