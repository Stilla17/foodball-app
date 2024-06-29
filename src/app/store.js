import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice/counterSlice';
import switcherReducer from '../features/switch/switchSlice';
import fieldReducer from '../features/field/field'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        switcher: switcherReducer,
        fields: fieldReducer,
    }
})

export default store;
