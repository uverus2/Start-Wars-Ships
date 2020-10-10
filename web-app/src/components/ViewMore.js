import React from 'react';

export default function ViewMore(props) {
    const {shipInfo, setToggle} = props;

    const closeMenu = () =>  {
        document.body.style.overflow = "auto";
        setToggle(false);
    };

    return (
        <>
            <div className="modal-wrap">
                <div className="card-wrap modal-inner">
                    <div className="card-header py-small">
                        <h4> <span>Ship Name: </span> {shipInfo.name}</h4>
                        <h4> <span>Model: </span> {shipInfo.model}</h4>
                        <h4> <span>Manufacturer: </span> {shipInfo.manufacturer}</h4>
                        <h4> <span>Class: </span> {shipInfo.starship_class}</h4>
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
                        <h4> <span>Price: </span>{shipInfo.cost_in_credits} Credits </h4>
                        <h4> <span>Length: </span>{shipInfo.length} Meters </h4>
                        <h4> <span>Crew: </span>{shipInfo.crew}</h4>
                        <h4> <span>Passengers: </span>{shipInfo.passengers}</h4>
                        <h4> <span>Cargo Capacity: </span>{shipInfo.cargo_capacity} Metric Cubes </h4>
                        <h4> <span>Hyperdrive Rating: </span>{shipInfo.hyperdrive_rating}/10 </h4>
                    </div>
                    <div className="view-more py-small">
                        <button onClick={closeMenu} className="secondary"> Close Menu </button>
                    </div>
                </div>
            </div>
        </>
    )
};
