import React, {useState} from 'react';
import {connect} from 'react-redux';
import {saveResults, saveQuery} from '../../actions/search';
import Search from '../../search.svg'
import Close from '../../close.svg'
import Header from '../../Components/Header';
import LocationFooter from '../../Components/Footer/LocationFooter';
import MenuFooter from '../../Components/Footer/MenuFooter';
import results from '../../data/results';

const Home = ({loadQuery, loadResults}) => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [query, setQuery] = useState('');
    const handleChange = (e) => {
        const {value} = e.target;
        let filteredResults = results.filter(result => result.text.match(new RegExp(value, 'gi')));
        setSuggestions(filteredResults);
        setQuery(value);
        if(value){
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    }
    const clearInput = () => {
        setQuery('');
        setShowSuggestions();
    }
    const handleClick = () => {
        if(query){
            loadResults(suggestions);
            loadQuery(query)
            window.location.href="/search"
        }
    }
    const handleKey = (e) => {
        if(query && e.key === 'Enter'){
            loadResults(suggestions);
            loadQuery(query)
            window.location.href="/search"
        }
    }
    return(
    <div className="flex flex-col items-center justify-center h-screen w-full relative">
        <Header />
        <div className="mb-8">
            <img className="max-w-xs" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google"/>
        </div>
        <div className="relative w-1/2">
        <div className={`w-full flex justify-center items-center ${showSuggestions ? 'rounded-b-none rounded-t-lg border-t border-l border-r' : 'rounded-full shadow-lg border'} h-fit-content py-2`}>
            <span><img className="w-5" src={Search} alt="" /></span>
            <input onKeyPress={handleKey} className={`mx-1 w-5/6 p-2 ${showSuggestions ? 'border-b border-grey-400' : ''}`} onChange={handleChange} value={query}/>
            {showSuggestions ? <button onClick={clearInput} style={{ left: '2rem' }} className=""><img className="w-5" src={Close} alt="" /></button> : <span style={{ right: '2rem' }} className="mic"/>}
        </div>
        <div style={{ top: "4rem" }} className={`${showSuggestions ? "rounded-b-lg border-b border-l border-r bg-white w-full absolute" : "hidden"}`}>
           {suggestions.length > 0 && suggestions.map( result => (
               <div className="w-full flex justify-center items-center px-2" key={result.title}>
               <span className=""><img className="w-5" src={Search} alt="" /></span>
               <p className="w-4/5 mx-1 p-2 truncate">{result.title}</p>
               <span className="text-grey-600">remove</span>
           </div>
           )) }
        </div>
        </div>
        <div className="w-1/5 flex justify-between my-4">
            <button onClick={handleClick} onKeyPress={handleKey} type="submit" className="p-2 rounded">Google Search</button>
            <button type="submit" className="p-2 rounded">I'm Feeling Lucky</button>
        </div>
        <div>
            <p className="text-sm">Google offered in: <span style={{ color: "#1a0dab"}} className="hover:underline mr-1" ><a href="https://www.google.com/setprefs?sig=0_aSWSAtcE3lO0_jZxHc2OnBvBl7U%3D&hl=ha&source=homepage&sa=X&ved=0ahUKEwj8kLXpvNHnAhUox4UKHUwgAboQ2ZgBCA4">Hausa</a></span> <span style={{ color: "#1a0dab"}} className="hover:underline mr-1"  ><a href="https://www.google.com/setprefs?sig=0_aSWSAtcE3lO0_jZxHc2OnBvBl7U%3D&hl=ig&source=homepage&sa=X&ved=0ahUKEwj8kLXpvNHnAhUox4UKHUwgAboQ2ZgBCA8">Igbo</a></span> <span style={{ color: "#1a0dab"}} className="hover:underline mr-1" ><a href="https://www.google.com/setprefs?sig=0_aSWSAtcE3lO0_jZxHc2OnBvBl7U%3D&hl=ig&source=homepage&sa=X&ved=0ahUKEwj8kLXpvNHnAhUox4UKHUwgAboQ2ZgBCA8">Èdè Yorùbá</a></span> <span style={{ color: "#1a0dab"}} className="hover:underline" ><a href="https://www.google.com/setprefs?sig=0_aSWSAtcE3lO0_jZxHc2OnBvBl7U%3D&hl=ig&source=homepage&sa=X&ved=0ahUKEwj8kLXpvNHnAhUox4UKHUwgAboQ2ZgBCA8">Nigerian Pidgin</a></span></p>
        </div>
        <div className="absolute bottom-0 w-full">
            <LocationFooter />
            <MenuFooter />
        </div>
    </div>)
}

const mapDispatchToProps = (dispatch) => ({
    loadResults: results => dispatch(saveResults(results)),
    loadQuery: query => dispatch(saveQuery(query))
})

export default connect(null, mapDispatchToProps)(Home);