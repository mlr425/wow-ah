import React, {useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { 
    Container, Grid, MenuItem, FormControl,Select,
    TextField, InputBase, Button, InputLabel, CircularProgress
} from '@material-ui/core';
import axios from 'axios'

import Items from '../components/Items'
import '../css/homepage.css' //TODO: switch to material ui style 
import {ALL_REALMS_US, ALL_REALMS_EU} from '../constants/ActiveRealms'

export default function HomePage() {
    //states + setStates
    const url = 'https://us.api.blizzard.com/data/wow/search/connected-realm?namespace=dynamic-us&locale=en_US&status.type=UP&realms.timezone=America%2FNew_York&orderby=id&_page=1&access_token=USsOmWoLuqNVybBpyU4ON7rfSbML8MDmUm'
    const [region,setRegion] = useState('')
    const [realm,setRealm] = useState('')
    const [search,setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([1])
    const [activeRealms,setActiveRealms] = useState([]) //hardcoded realm names /constants/activerealms.js

    //functions for state handling
    const handleRegionChange = (e) => setRegion(e.target.value)
    const handleRealmChange = (e) => setRealm(e.target.value)
    const handleSearchChange = (e) => setSearch(e.target.value)
    const handleActiveRealms = (e) => setActiveRealms(e.target.value)
    const getRealmNames = activeRealms.map((realmName) => 
        <MenuItem value={realmName}> {realmName}</MenuItem>
    )
    
    //watch when user changes the region
    //bc we want to set the available region's realms 
    useEffect(() => { 
        setActiveRealms([])
        if (region == 'US'){ setActiveRealms(ALL_REALMS_US) }
        if (region == 'EU'){ setActiveRealms(ALL_REALMS_EU) }
    }, [region])

    
    

    //add circular progress instead 
    /*
        !posts.length ? <CircularProgress></CircularProgress> : (
            <Grid  container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
    */

    

    return (
        <>
        {/* <div>
            temp area
            <div>
                selected region = {region}
            </div>
            <div>
                selected realm = {realm}
            </div>
            <div>
                search value = {search} 
            </div>
            <div>
                active realm = {activeRealms}
            </div>
        </div> */}

        {/* nav bar -> move it to diff component */}
        <Container className="main"> 
            <div className="main-title-container">
                <h1 className="main-title"> WoW Auction House </h1>
            </div>

            {/* {nav menu} */}
            <Grid className="menu-container" container spacing={4} alignItems="center" justify="center">
                {/* select a region */}
                <Grid item>
                    <FormControl>
                        <Select
                            value={region}
                            displayEmpty
                            onChange={handleRegionChange}
                        >
                            <MenuItem value="" disabled> Select a region </MenuItem>
                            <MenuItem value={'US'}>US</MenuItem>
                            <MenuItem value={'EU'}>EU</MenuItem>
                            
                        </Select>
                    </FormControl>
                </Grid>

                {/* select a realm */}
                {region.length ? 
                    //pass
                    <Autocomplete 
                        className="autocompleteTextArea"
                        id="combo-box-demo"
                        options={activeRealms}
                        getOptionLabel={(option) => option}
                        style={{ width: 180 }}
                        onChange={handleRealmChange}
                        renderInput={(params) => <TextField {...params} label="Select a Realm" />}
                    />
                :
                //fail
                <FormControl>
                    <Select
                        value={realm}
                        onChange={handleRealmChange}
                        displayEmpty
                        style={{ width: 180 }} 
                    >
                        <MenuItem value="" disabled> Select a Realm </MenuItem>
                    </Select>
                </FormControl>
                }

                <Grid item>
                    <div className="searchBar">
                        <div> <SearchIcon /> </div>
                        <InputBase 
                        placeholder="Search…" 
                        onChange={handleSearchChange}
                        />
                    </div>
                </Grid>

                <Grid item>
                     {/* onClick={} add later */}
                     {/* user has to have selected realm + region before hitting here - err check */}
                    <Button variant="contained" color="primary" >
                            Search
                    </Button>
                </Grid>
            </Grid>
        </Container>
    

        {/* if (search and search results) =  display content
        if  search results == 0 -> loading */}

        {(search.length && searchResults.length) ? <Items/> : (!searchResults.length) ? <CircularProgress></CircularProgress> : null }

        {/* {(!search.length && !searchResults.length) ? <CircularProgress></CircularProgress> : <Items/>} */}
        
        {/* <div className="results-container">
            {!search.length ? <CircularProgress></CircularProgress> : <Items/>}
        </div> */}
        

        </>
    )
}



/*
old code - nav menu - no auto complete drop down for realm names
                //no autocomplete
                // <FormControl>
                //     <Select
                //         value={realm}
                //         onChange={handleRealmChange}
                //         displayEmpty
                //     >
                //         <MenuItem value="" disabled> Select a Realm </MenuItem>
                //             {getRealmNames}
                //     </Select>
                // </FormControl>

*/