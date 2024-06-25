import { createSlice } from '@reduxjs/toolkit'

export const switchSlice = createSlice({
    name: "SWITCHER",
    initialState: {
        value: false,
        text: ''
    },
    reducers: {
        switchs: state => {
            state.value = !state.value
        },
        inputText: (state, actions) => {
            state.value = actions.payload
        }
    }
})

export const { switchs, inputText } = switchSlice.actions

export default switchSlice.reducer