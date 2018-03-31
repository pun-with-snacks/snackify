import React, { Component } from 'react';

class SubmissionForm extends Component {
	constructor(props){
		super(props)
		this.submitEntry = this.submitEntry.bind(this);
	}

	submitEntry(e) {
		e.preventDefault();
		console.log('submitEntry clicked'+this.props.userName);
		fetch('/', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: {
				snackPhoto: document.getElementById('imageinput').value,
				comments: document.getElementById('commentinput').value,
				userName: this.props.userName,
			},
		}).then(res => console.log(res))
			.catch(err => err);
	}


	render() {
		return (
			<div id='submissionForm'>
				<h1>Add your Snack!!!</h1>
				{/* add action and method!!!! */}
				Image: <input id="imageinput" type='text' name='image' /> <br />
				Comment: <input id="commentinput" type='text' name='comment' /> <br />
				<button type='submit' onClick={this.submitEntry} > Add Snack </button>
			</div>
		);
	}
}

export default SubmissionForm;