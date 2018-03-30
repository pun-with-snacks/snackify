import React, { Component } from 'react';

class SubmissionForm extends Component {

    submitEntry(e) {
        e.preventDefault(); 
        console.log(`The Add Snack button was cliked (summissionForm.js)`); 
    }


    render() {
        return (
            <div id='submissionForm'>
                <h1>Add your Snack!!!</h1>
                {/* add action and method!!!! */}
                <form onSubmit={this.submitEntry}>
                    Image: <input type='text' name='image' /> <br/>
                    Comment: <input type='text' name='comment' /> <br />
                    <input type='submit' value='Add Snack' />
                </form>
            </div>
        );
    }
}

export default SubmissionForm;