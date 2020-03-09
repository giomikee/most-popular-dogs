/*
 * Created on Sun Mar 08 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */
import React from 'react';
import './css/App.css';
import Header from './components/Header';
import DogBreedsAPI from './components/DogBreedsAPI';

function App() {
	return (
		<div className="App">
			<Header />
			<DogBreedsAPI />
		</div>
	);
}

export default App;
