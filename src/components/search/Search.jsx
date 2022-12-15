import React from 'react';
import './Search.scss';

const Search = function(props){
    return(
       <section className='wrapper'>
            <article>
                <h1>{props.title}</h1>
            </article>
       </section>
    )
};

export default Search;