/*
 * Created on Sun Mar 08 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import { FETCH_DOG_BREEDS, FETCH_DOG_BREED_IMAGES, FETCH_ERROR, GET_TOP_DOGS } from '../actions/types';

const initialState = {
	dogs: [],
	topDogs: [],
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DOG_BREEDS:
			return {
				...state,
				dogs: action.payload.map(breed => ({
					breed,
					numImages: 0
				}))
			};
		case FETCH_DOG_BREED_IMAGES:
			const dogBreedIndex = state.dogs.findIndex(dog => dog.breed === action.breed);

			state.dogs[dogBreedIndex].numImages = action.payload;

			return {
				...state,
				isLastBreedLoaded: action.isLastBreedLoaded
			};
		case FETCH_ERROR:
			return {
				...state,
				error: action.payload
			};
		case GET_TOP_DOGS:
			return {
				...state,
				topDogs: action.payload,
				areTopDogsCalculated: action.areTopDogsCalculated
			};

		default:
			return state;
	}
};
