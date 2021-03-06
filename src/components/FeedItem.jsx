// Exercise 2: Set It Up
	// write a class component
	// make it a div with className FeedItem
	// make an img element inside
	// import Likes, include it underneath img
	// export default the component!

// Exercise 3: Prop It Up
	// pass in props as params to the component
	// destructure what you need from the props
	// Hint: what do you need in order to get the image to display?
	// Hint: what do you need in order to get likes to display in the Likes component?

import React from 'react';
import Likes from './Likes';


class FeedItem extends React.Component {

	render() {
		console.log(this.props.photo);
		return (
			<div className='FeedItem'>
				<img src={this.props.photo.url} alt='img'/>
				<p>{this.props.photo.title}</p>
				<Likes 
					likes={this.props.photo.likes}
					userLiked = {this.props.photo.userLiked}
					/>
			</div>
		)
	}
}

export default FeedItem;