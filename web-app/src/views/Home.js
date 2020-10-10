import React, {useState, useContext} from 'react';
import shipContext from "../store/shipStore";

//Components
import Card from "../components/Card";

// Form validation
import { useForm } from 'react-hook-form';

//Requires
const axios = require('axios');

export default function Home() {
    // Context Data
    const shipData = useContext(shipContext);
    
    //Limit and Load more
    const [limit, setLimit] = useState(5);
    const [hideLoadMore, setHideLoadMore] = useState(true);

    // Ship Data
    const [shipFilterData, setFilterData] = useState(shipData.slice(0, limit));

    //React hook form spreader
    const { register, handleSubmit, reset, errors } = useForm();

    //Form Errors
    const [dbError, setDbError] = useState("");

    //Show reset button
    const [resetButton, setReset] = useState(false);

    //On form Submit
    const handleInnerSubmit = async(data) => {
        try{
            const {name} = data;

            // Grab Ships
            const searchData = await axios.get(`http://localhost:80/pcs-app/public/index.php/api/ships/${name}`);

            //Checks if I am receiving results
            if(typeof searchData.data === 'array'){
                setFilterData(searchData.data);
                setReset(true);
            }else{
                //Set error message if not
                setDbError(searchData.data.message);
            }
            
            //Hide load more if no more than 5 results
            if(searchData.data.length < 5){
                setHideLoadMore(false);
            }

            //Resets search data
            reset();
        }catch(e){
            setDbError(e.message);
        }
    };

    const resetData = () =>{
        //Resets the to the original data
        setFilterData(shipData.slice(0, 5));
        //Hides reset afterwards
        setReset(false)
    };
    
    //Loop over the ship cards
    const ships = shipFilterData.map(i => {
        return <Card ship={i} key={i.id}/>
     });

     // Change the limit after load more
     const change = () => {
        const changeLimit = limit + 5;
        //Sets the new limit
        setLimit(changeLimit);
        setFilterData(shipData.slice(0, changeLimit));
        //Check if there no more results and hide the load button
        if(shipData.length < limit){
            setHideLoadMore(false);
        }
    };

    return (
        <>
            <div className="main-page">
                <div className="text-center welcome">
                    <h1>Welcome to <span> Star Wars </span> Spaceships </h1>
                </div>
                <div className="search">
                <form onSubmit={handleSubmit(handleInnerSubmit)} >
                    <div className="form-elements-wrap">
                        <div className="d-flex flex-col center py-small">
                            <h2>Search by Ship Name</h2>
                            <input type="text" name="name" ref={register({ required: 'Name is required'})}/>
                            {/* Error messages from the form and Back end */}
                            {errors.name && (<p className="error py-small"> {errors.name.message} </p>)}
                            {dbError !== "" && (<p className="error py-small text-center">{dbError}</p>)}
                        </div>
                        <div className="d-flex flex-col center py-small">
                            <button className="main">Search</button>
                        </div>
                    </div>
                </form>
                {resetButton && (
                    <div className="d-flex flex-col center py-small">
                        <button onClick={resetData} className="secondary">Reset</button>
                    </div>
                )}
                </div>
                <div className="cards-container">
                    {ships}
                </div>
                {hideLoadMore && (
                    <div className="text-center py-medium">
                        <button className="secondary" onClick={change}>Load More</button>
                    </div>
                )}
            </div>
        </>
    )
}
