import redux from 'redux'
import reduxLogger from 'redux-logger'
const createStore = redux.createStore;
const logger = reduxLogger.createLogger()
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware
const BOOK_BUY = 'BUY_BOOK'
const BUY_ICECREAM = 'BUY_ICECREAM'
const buyBook = () => {
  return {
    type: BOOK_BUY,
    info: 'A purchase made'
  }
}
const buyIcecream = () => {
  return {
    type: BUY_ICECREAM,
    info: 'A purchase made'
  }
}

const initialCakeState = { numOfCake: 10 }
const initialIcecreamState = { numOfIce: 20 }

const cakereducer =  (state = initialCakeState, action) => {
  switch (action.type) {
    case BOOK_BUY:
      return { ...state, numOfCake: state.numOfCake - 1}
    default:
      return state
  }
}

const icereducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numOfIce: state.numOfIce - 1}
    default:
      return state
  }
}
const rootReducer = combineReducers({
  cake: cakereducer,
  icecream: icereducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('initial store', store.getState())
const unsubscribe = store.subscribe(() => {})

store.dispatch(buyBook())
store.dispatch(buyBook())
store.dispatch(buyBook())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

unsubscribe()
