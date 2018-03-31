import React, {Component} from 'react';
import Header from './header.jsx';
import SubmissionForm from './submission-form.jsx';
import PhotoGallery from './photoGallery.jsx';
import Footer from './footer.jsx'; 

class App extends Component{
    constructor(props) {
        super(props)
        this.state = {};
    }

    componentDidMount() {
        console.log(`componentDidMount fired!!! `);
        fetch('/test', {credentials: "same-origin"})
        .then(response => response.json())
        .then(myJson => {
					this.setState(JSON.parse(myJson));
        })
				.catch(err => console.log(err));
				fetch('/gallery', {credentials: "same-origin"})
				.then(res => res.json())
				.then(myJson => {
					const gallery = [];
					myJson = JSON.parse(myJson);
					for( key in myJson) {
						gallery.push(myJson.key)
					}
					this.setState({gallery});
				})
				
    }

    render(){
        return (
            <div>
                <Header id='header' userName={this.state.userName}  avatar={this.state.avatar} />
                <SubmissionForm userName={this.state.userName} />
                <PhotoGallery />
                <Footer />
            </div>
        );
    }
}

export default App;

