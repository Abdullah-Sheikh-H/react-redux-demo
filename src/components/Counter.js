import classes from "./Counter.module.css"
import { useDispatch, useSelector } from "react-redux"
import { counterActions } from "../store"

const Counter = () => {
    const dispatch = useDispatch()
    const counter = useSelector((state) => state.counter.counter)
    const showCounter = useSelector((state) => state.counter.showCounter)

    const toggleCounterHandler = () => {
        dispatch(counterActions.show())
    }

    const incrementHandler = () => {
        // dispatch({ type: "increment" })
        dispatch(counterActions.increment())
    }

    const decrementHandler = () => {
        // dispatch({ type: "decrement" })
        dispatch(counterActions.decrement())
    }

    const increaseHandler = () => {
        dispatch(counterActions.increase(5))
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={increaseHandler}>Increase</button>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    )
}

export default Counter
