import React, {Component} from 'react';
import Header from './header';
import SubmissionForm from './submission-form';
import PhotoGallery from './photoGallery';
import Footer from './footer'; 

class App extends Component{
    constructor(props) {
        super(props)
        this.state = {};
    }

    componentDidMount() {
        console.log(`componentDidMount fired!!!`);
        fetch('/test', {credentials: "same-origin"})
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.log(err)); 
    }

    render(){
        return (
            <div>
                <Header id='header' />
                <SubmissionForm />
                <PhotoGallery />
                <Footer />
            </div>
        );
    }
}

export default App;

