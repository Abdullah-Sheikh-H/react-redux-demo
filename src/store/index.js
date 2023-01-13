import { createSlice, configureStore } from "@reduxjs/toolkit"

const initialCounterState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter += action.payload
        },
        show(state) {
            state.showCounter = !state.showCounter
        },
    },
})

const initialAuthState = { authentication: false }

const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.authentication = true
        },
        logout(state) {
            state.authentication = false
        },
    },
})

const store = configureStore({
    // reducer: counterSlice.reducer,
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    },
})

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions
export default store

// import { createStore } from "redux"

// const counterReducer = (state = { counter: 0 }, action) => {
//     if (action.type === "increment") {
//         return { counter: state.counter + 1 }
//     }

//     if (action.type === "decrement") {
//         return { counter: state.counter - 1 }
//     }

//     return state
// }

// const store = createStore(counterReducer)

// export default store
