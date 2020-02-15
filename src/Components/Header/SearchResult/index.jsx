import React, { useState } from 'react';
import { connect } from 'react-redux';
import {saveResults, saveQuery} from '../../../actions/search';
import Search from '../../../search.svg';
import results from '../../../data/results';



const Header = ({query, loadResults, loadQuery}) => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [ queryStr, setQueryStr ] = useState(query);
    const [suggestions, setSuggestions] = useState(false);

    const clearInput = () => {
        setQueryStr('');
        setShowSuggestions();
    }

    const handleChange = (e) => {
        const {value} = e.target;
        let filteredResults = results.filter(result => result.text.match(new RegExp(value, 'gi')));
        setSuggestions(filteredResults);
        setQueryStr(value);
        if(value){
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    }

    const handleKey = (e) => {
        if(query && e.key === 'Enter'){
            loadResults(suggestions);
            loadQuery(queryStr)
            window.location.href="/search"
        }
    }

    return(
    <div className="flex justify-between items-center w-full text-xs py-4 px-8">
    <div className="w-3/5 flex items-center">
        <div className="w-32">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" className="w-24" alt="google" />
        </div>
        <div className={`relative w-4/5 h-12 ${showSuggestions ? 'rounded-b-none rounded-t-lg border-t border-l border-r' : 'rounded-full shadow-lg border'}`}>
        <div className="w-full h-12 transparent flex justify-center items-center px-2">
            <span className=""><img className="w-5" src={Search} alt="" /></span>
            <input onKeyPress={handleKey} className={`mx-1 w-5/6 p-2 ${showSuggestions ? 'border-b border-grey-400' : ''}`} onChange={handleChange} value={queryStr}/>
            <span  className="mic"/>
        </div>
        <div style={{top:"3rem"}} className={`${showSuggestions ? "w-full absolute rounded-b-lg border-b border-l border-r bg-white w-1/2" : "hidden"}`}>
           {results.filter(result => result.text.match(new RegExp(query, 'gi'))).slice(0,3).map( result => (
               <div className="w-full flex justify-center items-center px-2">
               <span className=""><img className="w-5" src={Search} alt="" /></span>
               <p className="w-4/5 mx-1 p-2 truncate">{result.title}</p>
               <span className="text-grey-600">remove</span>
           </div>
           )) }
        </div>
        </div>
    </div>
    <div className="flex items-center">
        <div className="googleApps mx-1"></div>
        <div className="mx-1 p-2 rounded-full bg-grey-600 text-white">DA</div>
    </div>
    </div>
)}

const mapStateToProps = (state) => {
    const { Search } = state;
    const { query, results } = Search;

    return { query, results }
}

const mapDispatchToProps = (dispatch) => ({
    loadResults: results => dispatch(saveResults(results)),
    loadQuery: query => dispatch(saveQuery(query))
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);