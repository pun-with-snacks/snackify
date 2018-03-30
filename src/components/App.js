import React, {Component} from 'react';
import Header from './header';
import SubmissionForm from './submission-form';

class App extends Component{


    render(){
        return (
            <div>
                <Header id='header' />
                <SubmissionForm />
            </div>
        );
    }
}

export default App;

