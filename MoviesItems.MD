import React, { useState, useEffect } from 'react';
import './MovieItems.scss';

const MovieItems = function() {

    const [movies, setMovies] = useState({
        movieLists: []
    })

    const [err, setErr] = useState({
        error: ''
    })

    // const [loading, setLoading] = useState({
    //     isLoading: true
    // })

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '999a817b1bmshf907771572626f7p174c00jsn171127c81103',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };

    const URL = 'https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr';

    const img = 'https://image.tmdb.org/t/p/w500/';

    const fetchApi = async () => {
        try {
            const api = await fetch(URL, options)
            if(!api.ok) throw Error('...error');
            const response = await api.json();
            console.log(response.d)
            setMovies(()=>({
                movieLists: response.d
            }))
            
        }
        catch(error){
            setErr(()=> ({
                err: err.message
            }))
        }
        // finally{

        // }
    }

    useEffect(() => {
        fetchApi()
    })

    return(
        <>
            <main>
                <div className='wrapper'>
                    <form>
                        <h1>Search</h1>
                        <input type='text' value=''onChange='' />
                    </form>
                </div>
            </main>
            <section>
                <div className='img'>
                {
                    movies.movieLists.map((movie) => {
                        return(
                            <div className='img-row'>
                                <img src={+movie.i.imageUrl} alt='poster name' />
                                <h1>{movie.l}</h1>
                                <div className='overlay'>
                                    <h1>{movie.l}</h1>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
                {/* <div className='img'>
                {
                    movies.movieLists.map((movie) => {
                        return(
                            <div className='img-row'>
                                <img src='#' alt='' />
                                <div className='overlay'>
                                    <h1>Title</h1>
                                </div>
                            </div>
                        )
                    })
                }
                </div> */}
            </section>
        </>
    )
};

export default MovieItems;