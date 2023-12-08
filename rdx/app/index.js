import store from "./store.js";
import {cakeActions} from '../features/cake/cakeSlice.js'
import {icecreamActions} from '../features/icecream/icecreamSlice.js'
import { fetchUsers } from "../features/user/userSlice.js";

console.log('Initiale State', store.getState()) 
const ubsub = store.subscribe(() =>{})

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(5))
// store.dispatch(icecreamActions.buyed())
// store.dispatch(icecreamActions.buyed())
// store.dispatch(icecreamActions.buyed())
// store.dispatch(icecreamActions.restocked(5))

store.dispatch(fetchUsers())
// ubsub()