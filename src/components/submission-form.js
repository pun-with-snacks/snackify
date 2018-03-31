import React, { Component } from 'react';

class SubmissionForm extends Component {

    submitEntry(e) {
        e.preventDefault(); 
				fetch('/submission', {
					method: 'POST',
					headers: {'Content=Type': 'Application/json'},
					body: e.target.value,
				})
				.then(res => res.json())
				.catch(err => err); 
    }


    render() {
        return (
            <div id='submissionForm'>
                <h1>Add your Snack!!!</h1>
                {/* add action and method!!!! */}
                <form action='/' onSubmit={this.submitEntry}>
                    Image: <input type='text' name='image' /> <br/>
                    Comment: <input type='text' name='comment' /> <br />
                    <input type='submit' value='Add Snack' />
                </form>
            </div>
        );
    }
}

export default SubmissionForm;