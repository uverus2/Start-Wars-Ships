import React, {useState,useEffect} from 'react';
import {Switch,Route} from "react-router-dom";
import 'reset-css';
import "./styles/index.scss";

//Store
import shipContext from "./store/shipStore";

//Components
import Loader from "./components/Loader";
import Header from "./components/Header";

// Views
import Home from "./views/Home";

//Requires
const axios = require('axios');

function IncludeHeader(props) {
  return(
    <>
      <Header/>
      {props.children}
      
    </>
  );
}

function App() {
  const [retriveShips, setShipsRetrive] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dbError, setDbError] = useState("");

  
  useEffect(() => {
    (async () => {
        try {
            // Grab Ships
            const grabData = await axios.get(`http://localhost:80/pcs-app/public/index.php/api/all`);

            //Storing the Ship data into the local state
            setShipsRetrive(grabData.data);

            //Stop Loader
            setLoading(false);
        }catch (e) {
            //Setting error and turning off Spinner
            console.log(e);
            setDbError(e);
            setLoading(false);
        }
    })();
}, []);

  if (loading) {
    return  <Loader />;
  };

  return (
    <div className="App">
      {/* Pass Ship data to context */}
       <shipContext.Provider value={retriveShips}>
          <Switch>
            <Route path="/">
             {dbError !== "" && ( <h1 className="db-error">dbError</h1> )}
             <IncludeHeader children={<Home setLoadingState={setLoading} setShips={setShipsRetrive}/>}/>
            </Route>
          </Switch>
        </shipContext.Provider>
    </div>
  );
}

export default App;
