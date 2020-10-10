import React from 'react';
import ClipLoader from "react-spinners/FadeLoader";

const Loader = () => {
    return (
        <div className="d-flex center loader"> 
            <ClipLoader size={50} color={"#15509F"} loading={true} />
            <div>
                <p className="load-message">Loading ...</p>
            </div>
        </div>
    )
}

export default Loader;
