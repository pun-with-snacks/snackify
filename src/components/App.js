import React, {Component} from 'react';
import Header from './header';
import SubmissionForm from './submission-form';
import PhotoGallery from './photoGallery';

class App extends Component{


    render(){
        return (
            <div>
                <Header id='header' />
                <SubmissionForm />
                <PhotoGallery />
            </div>
        );
    }
}

export default App;

