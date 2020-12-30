import React from 'react';
import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



import HomePage from './pages/HomePage'




function App() {
  const [myState,setMyState] = useState([])
  //const url = 'http://auction-house.us-west-2.elasticbeanstalk.com/'
  //const url = 'https://us.api.blizzard.com/data/wow/search/connected-realm?namespace=dynamic-us&locale=en_US&status.type=UP&realms.timezone=America%2FNew_York&orderby=id&_page=1&access_token=USsOmWoLuqNVybBpyU4ON7rfSbML8MDmUm'
  //const url = 'https://u2m1wy13j2.execute-api.us-west-2.amazonaws.com/test/tests'
  // const fetchTest = async () => {
  //   try {
  //     const res = await axios.get(url)
  //     console.log(res)
  //     // setMyState(res.data.title)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => { 
  //   fetchTest()

  // }, [url])
  
  return (
    <Router>
      <Route exact path="/">
        <HomePage/>
      </Route>
    </Router>
  );
}

export default App;
