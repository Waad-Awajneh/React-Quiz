import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
//reducers
import ThemeReducer from "./../reducers/ThemeReducer/reducer";
import QuizReducer from "./../reducers/QuizReducer/reducer";
//persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const allReducers = combineReducers({ ThemeReducer, QuizReducer });
const persistedReducer = persistReducer(persistConfig, allReducers);

const store = createStore(persistedReducer, {}, applyMiddleware(thunk));
export const persistor = persistStore(store);
export default store;
