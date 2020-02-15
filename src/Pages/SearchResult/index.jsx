import React from 'react';
import {connect} from 'react-redux';
import Header from '../../Components/Header/SearchResult';
import Navigation from '../../Components/Header/SearchResult/Navigation';
import Result from '../../Components/SearchResult';
import LocationFooter from '../../Components/Footer/SearchResultFooter/LocationFooter';
import MenuFooter from '../../Components/Footer/SearchResultFooter/MenuFooter';

const SearchResult = ({ results }) => {
    return(
    <div className="h-fit-content">
        <Header />
        <Navigation />
        <div style={{ minHeight:"73vh"}} className="px-8 pt-2 w-3/5 flex justify-between text-sm">
            <div className="pl-32">
            <p className="text-grey-700">About {results && results.length > 0 && results.length} results (0.01 seconds)</p>
                <div>
                        {
                           results && results.length > 0 && results.map((result) => (
                                <Result { ...result }/>
                            ))
                        }
                </div>
            </div>
        </div>
        <div className="w-full">
            <LocationFooter />
            <MenuFooter />
         </div>
    </div>

)}

const mapStateToProps = (state) => {
    const { Search } = state;
    const { results } = Search;

    return { results }
}


export default connect(mapStateToProps)(SearchResult);