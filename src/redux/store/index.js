// import { createStore, combineReducers, compose, applyMiddleware } from "redux";

// import thunk from "redux-thunk";

// import userInfoReducer from "../reducers/userInfoReducer";

// import localStorage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";
// import { encryptTransform } from "redux-persist-transform-encrypt";

// const aComposeFunctionThatAlwaysWorks =
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const initialState = {
//   userInfo: {
//     _id: "",
//     name: "",
//     email: "",
//     avatar: "",
//   },
//   chats: {
//     active: "", // the _id of one of the chats among store.chats.list
//     list: [],
//   },
//   socket: "",
// };

// const persistConfig = {
//   key: "root",
//   storage: localStorage,
//   transforms: [
//     encryptTransform({
//       secretKey: process.env.REACT_APP_SECRET_PERSIST_KEY,
//     }),
//   ],
// };

// const bigReducer = combineReducers({
//   chats: chatsReducer,
//   userInfo: userInfoReducer,
//   socket: socketReducer,
// });

// const persistedReducer = persistReducer(persistConfig, bigReducer);

// const configureStore = createStore(
//   persistedReducer,
//   initialState,

//   aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk))
// );

// const persistor = persistStore(configureStore);

// export { configureStore, persistor };
