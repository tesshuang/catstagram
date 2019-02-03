// Exercise 2: Set It Up
	// write a class component
	// make it a div with a class name of HomePage
	// import ImageUploaderForm and FeedList
	// include them inside of Homepage
	// export default the Homepage component!

// Exercise 3: Prop It Up
// Need to extract photos from data and then pass it into FeedList

// Exercise 5: Let’s Get InFormation - BONUS
	// In order to get Homepage render the photo url you have uploaded to ImageUploader form,
	// you will need to create a function called handleAddPhoto that updates photos state by
	// accepting a url and creating a new object in photos state of the homepage component.
    // Then pass in that function as props to ImageUploaderForm
    // and when the user submits, call that function with the user submitted url.

import React from 'react';
import data from '../../data.json';
import ImageUploaderForm from '../components/ImageUploaderForm';
import FeedList from '../components/FeedList';

class HomePage extends React.Component {
	state = {
		catData: data.photos
	}
	handleAddPhoto = (url) => {
		console.log('url', url);
		// let photoobj = this.state.catData;
		// photoobj.push(url);
		// console.log(photoobj)
		// this.setState({
		// 	catData: photoobj,
		// })
		// ES6 spread operator 
		this.setState({
			catData: [url,
			...this.state.catData]
		})
	}
	render() {
		// console.log(this.state.catData);
		return (
			<div className='Homepage'>
				<ImageUploaderForm 
				catData={this.state.catData}
				handleAddPhoto={this.handleAddPhoto}/>
				<FeedList catData={this.state.catData}/>
		 </div>
		)
	}
}

export default HomePage;