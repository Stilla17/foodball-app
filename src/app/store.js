import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice/counterSlice';
import switcherReducer from '../features/switch/switchSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        switcher: switcherReducer
    }
})

export default store;