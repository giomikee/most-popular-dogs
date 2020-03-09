/*
 * Created on Mon Mar 09 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';

test('renders App in document', () => {
	const { getByText } = render(
		<Header />
	);
	const title = /Most Popular Dog Breeds/i;
	const titleElement = getByText(title);

	expect(titleElement).toBeInTheDocument();
});
