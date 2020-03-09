/*
 * Created on Mon Mar 09 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import React from 'react';
import { render } from '@testing-library/react';
import DogBreedsAPI from '../components/DogBreedsAPI';
import { Provider } from 'react-redux';
import store from '../store';


test('fetch is loading correctly', () => {
	const { getByText } = render(
		<Provider store={store}>
			<DogBreedsAPI />
		</Provider>
	);
	const loadingChart = /Loading chart/i;
	const loadingChartElement = getByText(loadingChart);

	expect(loadingChartElement).toBeInTheDocument();
});
