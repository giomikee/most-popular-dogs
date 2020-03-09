/*
 * Created on Sun Mar 08 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import { FETCH_DOG_BREEDS, FETCH_DOG_BREED_IMAGES, FETCH_ERROR, GET_TOP_DOGS } from './types';

/* eslint-disable no-magic-numbers */

const API_PREFIX = 'https://dog.ceo/api/breed';
const ALL_BREEDS = `${API_PREFIX}s/list/all`;

export const fetchDogBreeds = () => dispatch =>
	fetch(ALL_BREEDS)
		.then(res => res.json())
		.then(dogs => dispatch({
			type: FETCH_DOG_BREEDS,
			payload: Object.keys(dogs.message)
		}))
		.catch(error => dispatch({
			type: FETCH_ERROR,
			payload: error
		}));

export const fetchDogBreedImages = dogBreed => dispatch =>
	fetch(`${API_PREFIX}/${dogBreed}/images`)
		.then(res => res.json())
		.then(images => dispatch({
			type: FETCH_DOG_BREED_IMAGES,
			breed: dogBreed,
			payload: images.message.length
		}))
		.catch(error => dispatch({
			type: FETCH_ERROR,
			payload: error
		}));

export const getTopDogs = (dogs, compareFunc) => dispatch => {
	const topDogs = [...dogs].sort(compareFunc).slice(0, 10);

	dispatch({
		type: GET_TOP_DOGS,
		payload: topDogs,
		areTopDogsCalculated: true
	});
};
