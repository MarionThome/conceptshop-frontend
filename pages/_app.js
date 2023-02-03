import "../styles/globals.css";
import Head from "next/head";
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import products from "../reducers/products";
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';


const reducers = combineReducers({ products }); // permet d'enregistrer les reducers
const persistConfig = { key: 'ConceptStore', storage };

// configuration du store
const store = configureStore({
 reducer: persistReducer(persistConfig, reducers),
 middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store); // transforme le store pour qu'il soit persistant


function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Head>
        <title>Concept Store</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Livvic:wght@700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default App;
