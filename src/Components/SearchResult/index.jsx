import React from 'react';


const Result = ({title, text, links, mainLink, dir}) => (
    <div className="my-4">
    <p>{mainLink} <span>&#x203A;</span> {dir} <span className="text-xs">&#x25BC;</span></p>
    <h3 style={{ color: "#1a0dab"}} className="text-lg font-semibold hover:underline">{title}</h3>
    <p>{text}</p>
    <div style={{ color: "#1a0dab"}} className="font-medium flex w-full">
        { links && links.length > 0 ? links.map( (link, index) =>
            (<div key={link.title}>
            <a className="hover:underline" href={link.link}>‎{link.title} </a> <span className={`${index !== links.length-1? 'mx-2' : 'hidden'}`}>&#183;</span>
            </div>)
        ):''}
    </div>
 </div> 
)
export default Result;