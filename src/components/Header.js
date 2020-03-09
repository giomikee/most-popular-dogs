/*
 * Created on Sun Mar 08 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import React from 'react';
import '../css/Header.css';

export default function Header() {
	return (
		<header>
			<h1>
            Most Popular Dog Breeds
			</h1>
			<h2 className='subtitle'>
                (based on number of stored images)
			</h2>
		</header>
	);
}
