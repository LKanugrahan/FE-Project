import { combineReducers } from "redux";
import loginReducer from './login'
import registerReducer from "./register";
import profileReducer from "./putProfile";
import profileMenuReducer from "./profileMenu";
import deleteMenuReducer from "./deleteMenu";
import addMenuReducer from "./addMenu";
import detailMenuReducer from "./detailMenu";
import searchMenuReducer from "./searchMenu";
import categoryReducer from "./category";
import updateMenuReducer from "./updateMenu";


const rootReducers = combineReducers({
    loginReducer,
    registerReducer,
    profileReducer,
    profileMenuReducer,
    deleteMenuReducer,
    addMenuReducer,
    detailMenuReducer,
    searchMenuReducer,
    updateMenuReducer,
    categoryReducer

})

export default rootReducers