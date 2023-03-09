import { configureStore } from '@reduxjs/toolkit'


import languageReducer from './language';
import workReducer from './work';
import menuReducer from './menu';
import utbReducer from './utb';

export const store = configureStore({
	reducer: {
		language: languageReducer,
		menu: menuReducer,
		work: workReducer,
		utb: utbReducer,
	},
});


