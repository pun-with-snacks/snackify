import React, { Component } from 'react';

class SubmissionForm extends Component {

    render() {
        return (
            <div id='submissionForm'>
                <h1>Add your Snack!!!</h1>
                {/* add action and method!!!! */}
                <form>
                    Image: <input type='text' name='image' /> <br/>
                    Comment: <input type='text' name='comment' /> <br />
                    <input type='submit' value='Add Snack' />
                    
                </form>
            </div>
        );
    }
}

export default SubmissionForm;