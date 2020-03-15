import React from 'react';
import Loader from 'react-loader-spinner'
export default function MyLoader() {
    //other logic
    return (
        <Loader
            type="Puff"
            color="#7159c1"
            height={100}
            width={100}
        />
    );

}