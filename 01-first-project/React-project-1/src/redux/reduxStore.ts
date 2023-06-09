

import { Action, applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profileReducer.ts";
import dialogsReducer from "./dialogsReducer.ts";
import usersReducer from "./usersReducer.ts";
import authReducer from "./authReducer.ts";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./appReducer.ts";





// type PropertiesTypes<T>= T extends {[key:string]: infer U} ? U: never ;
// export type InferActionsTypes<T extends {[key:string]: (...args:any[])=>any}>=ReturnType<PropertiesTypes<T>>


export type InferActionsTypes<T>= T extends {[keys:string]:(...args:any[])=>infer U} ? U :never


export type BaseThunkType<A extends Action<any>,R=Promise<void>> = ThunkAction<R,AppStateType,unknown,A>



let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ; //это дообавили для расширения редакс в браузере
// || compose;
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))//это дообавили для расширения редакс в браузере

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware)); // это дефолтно было, если что - верни его.

export default store;