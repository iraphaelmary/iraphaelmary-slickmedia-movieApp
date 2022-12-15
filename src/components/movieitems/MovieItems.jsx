import React, { useState, useEffect } from 'react';
import './MovieItems.scss';

const MovieItems = function(props) {

    const [movies, setMovies] = useState({
        movieLists: []
    })

    const [actions, setAction] = useState({
        action: []
    })

    const [fantasy, setFantasy] = useState([])

    const [err, setErr] = useState({
        error: ''
    })

    const [search, setSearch] = useState('')

    const [loading, setLoading] = useState(true)

    const fetchApi = async () => {
        try {
            const api = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=9e27162`)
            if(!api.ok) throw Error('...error');
            const response = await api.json();
            
            if(response.Search){
                setMovies(()=>({
                    movieLists: response.Search
                }))
            }          
        }
        catch(error){
            setErr(()=> ({
                err: err.message
            }))
        }
    }

    useEffect(() => {
        fetchApi()
    })

    //GET ACTION MOVIES - SEAL TEAM

    const getMovies = async () => {
        try{
            const moviesapi = await fetch('http://www.omdbapi.com/?s=Seal Team&Season=1&apikey=9e27162&');
            const result = await moviesapi.json()
            setAction(() => ({
                action: result.Search
            }))
        }
        catch(err){
            console.log(err.message)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(()=> {
        getMovies()
    })

    //GET FANTASY MOVIES

    const getSuperman = async () => {
        try{
            const api = await fetch('http://www.omdbapi.com/?s=Game of Thrones&Season=1&apikey=9e27162&')
            if(!api.ok) throw Error('...error');
            const result = await api.json();
            setFantasy(result.Search)
        }
        catch(err){
            console.log(err.message)
        }
    }

    useEffect(()=> {
        getSuperman()
    })

    return(
        <>
            <main>
                <div className='wrapper'>
                    <form>
                        <h1>Search</h1>
                        <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
                    </form>
                </div>               
            </main>
            <section>
                <div className='img'>
                {
                    movies.movieLists.map((movie) => {
                        return(
                            <div className='img-row' key={movie.imdbID}>
                                <img src={movie.Poster} alt='poster name' />
                                <h1>{movie.l}</h1>
                                <div className='overlay'>
                                    <h1>{movie.Title}</h1>
                                </div>
                                <div className='wishlist'>
                                    <h1>Add to WishList</h1>
                                </div>
                            </div>
                        )
                    })
                }
                </div>

                {/* FANTASY INSTALLMENTS */}

                <h1 className='action-title'>{props.fantasy}</h1>
                <div className='img'>
                {loading &&   <div className="lds-roller">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>}
                {
                    fantasy.map((movie) => {
                        return(
                            <div className='img-row' key={movie.imdbID}>
                                <img src={movie.Poster} alt='poster name' />
                                <h1>{movie.l}</h1>
                                <div className='overlay'>
                                    <h1>{movie.Title}</h1>
                                </div>
                            </div>
                        )
                    })
                }
                </div>

                {/* SERIES SECTION */}

                <h1 className='action-title'>{props.action}</h1>
                <div className='img'>
                {loading &&   <div className="lds-roller">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>}
                {
                    actions.action.map((movie) => {
                        return(
                            <div className='img-row' key={movie.imdbID}>
                                <img src={movie.Poster} alt='poster name' />
                                <h1>{movie.l}</h1>
                                <div className='overlay'>
                                    <h1>{movie.Title}</h1>
                                </div>
                                <div className='wishlist'>
                                    <h1>Add to WishList</h1>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </section>
        </>
    )
};

export default MovieItems;