/*
 * Created on Mon Mar 09 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../store';


test('renders App in document', () => {
	const { container } = render(
		<Provider store={store}>
			<App />
		</Provider>
	);
	const app = container.querySelector('.App');

	expect(app).toBeInTheDocument();
});
