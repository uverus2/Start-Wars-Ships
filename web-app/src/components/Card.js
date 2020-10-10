import React, {useState} from 'react';

import ViewMore from "../components/ViewMore";

export default function Card(props) {
    const [toggle, setToggle] = useState(false);
    const {ship} = props;

    const openModal = () => {
        document.body.style.overflow = "hidden";
        window.scrollTo(0,0);
        setToggle(true);
    };

    return (
        <div className="card-wrap">
            <div className="card-header py-small">
                <h4> <span>Ship Name: </span> {ship.name}</h4>
                <h4> <span>Model: </span> {ship.model}</h4>
            </div>
            <div className="text-center">
                <hr/>
            </div>
            <div className="card-image py-small">
                <img alt="card-main" src="/images/card-image.png" alt=""/>
            </div>
            <div className="text-center">
                <hr/>
            </div>
            <div className="card-details py-small">
                <h4> <span>Price: </span>{ship.cost_in_credits} Credits </h4>
                <h4> <span>Price: </span>{ship.length} Meters </h4>
                <div className="view-more">
                    <button onClick={openModal} className="main"> More Details</button>
                </div>
            </div>
            {toggle && ( 
                <ViewMore shipInfo={ship} setToggle={setToggle}/>
            )}
        </div>
    )
};
