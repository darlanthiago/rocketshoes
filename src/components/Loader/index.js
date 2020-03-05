import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
export default class MyLoader extends Component {
    //other logic
    render() {
        return (
            <Loader
                type="Puff"
                color="#7159c1"
                height={100}
                width={100}
            />
        );
    }
}