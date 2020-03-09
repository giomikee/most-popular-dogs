/*
 * Created on Sun Mar 08 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDogBreeds, fetchDogBreedImages, getTopDogs } from '../actions';
import { Chart } from 'react-google-charts';
import '../css/DogBreedsAPI.css';

/* eslint-disable no-magic-numbers */
const sortDescending = (firstDog, secondDog) => {
	if (firstDog.numImages > secondDog.numImages) {
		return -1;
	} else if (firstDog.numImages < secondDog.numImages) {
		return 1;
	}

	return 0;
};

class DogBreedsAPI extends Component {
	componentDidMount() {
		this.props.fetchDogBreeds();
	}

	render() {
		const { error, isLoaded, isLastBreedLoaded, areTopDogsCalculated, dogs, topDogs } = this.props;

		if (error) {
			return <div>{error.message}</div>;
		} else if (!isLoaded || !isLastBreedLoaded) {
			if (isLoaded) {
				const lastDogIndex = dogs.length - 1;

				dogs.forEach((dog, index) => this.props.fetchDogBreedImages(dog.breed, index === lastDogIndex));
			}

			return <div>Loading chart...</div>;
		} else if (!areTopDogsCalculated) {
			this.props.getTopDogs(dogs, sortDescending);

			return <div>Loading chart...</div>;
		}

		return (
			<Chart
				className='pie-chart'
				width={'900px'}
				height={'700px'}
				chartType='PieChart'
				loader={<div>Loading Chart</div>}
				data={[
					['Breed', 'Images'],
					...topDogs.map(
						dog => [dog.breed, dog.numImages]
					)
				]}
				options={{
					title: 'Popular Dog Breeds',
					is3D: true,
					backgroundColor: '#6B849A'
				}}
			/>
		);
	}
}

const mapStateToProps = state => ({
	...state
});

export default connect(mapStateToProps, { fetchDogBreeds, fetchDogBreedImages, getTopDogs })(DogBreedsAPI);
