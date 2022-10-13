import React from 'react';
import Loading from '../components/Loading';
import Uploader from '../components/uploader';

const Home = () => {
    return (
        <div>
            {true ? (
                <Uploader />
            ) : (
                <Loading />
            )}
        </div>
    );
}

export default Home;
