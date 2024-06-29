import { createSlice } from '@reduxjs/toolkit'

export const switchSlice = createSlice({
    name: "SWITCHER",
    initialState: {
        value: false,
    },
    reducers: {
        switchs: state => {
            state.value = !state.value
        }
    }
})

export const { switchs } = switchSlice.actions

export default switchSlice.reducer