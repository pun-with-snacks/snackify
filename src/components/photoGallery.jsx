import React, { Component } from 'react';
import Entry from './entry.jsx';

class PhotoGallery extends Component {

    render() {
        // temp. images to test with
        let tempPics = [
            'https://goo.gl/WBG2F4',
            'https://goo.gl/34b24F',
            'https://goo.gl/ay2Qtc',
            'https://goo.gl/3uS5nn',
            'https://goo.gl/qyCFzs'
        ];
        let images = tempPics.map((e, i) => <Entry src={e} key={i} />);
        return (
            <div id='photoGallery'>
                {images}
            </div>
        );
    }
}

export default PhotoGallery;