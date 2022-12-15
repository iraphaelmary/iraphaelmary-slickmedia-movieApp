import React from 'react';
import './Scroll.scss';

const Scroll = function(){
    return(
        <main>
            <div className='wrapper'>
                <section>
                    <form>
                        <h2>search</h2>
                        <input type='text' />
                    </form>
                    <article>
                        <h1>category 1</h1>
                        <div className='movie__box'>
                            <aside>
                                <h1>image</h1>
                            </aside>
                            <aside>
                                <h1>image</h1>
                            </aside>
                            <aside>
                                <h1>image</h1>
                            </aside>
                            <aside>
                                <h1>image</h1>
                            </aside>
                        </div>
                    </article>
                    <article>
                        <h1>category 2</h1>
                        <div className='movie__box'>
                            <aside>
                                <h1>image</h1>
                            </aside>
                            <aside>
                                <h1>image</h1>
                            </aside>
                        </div>
                    </article>
                </section>
            </div>
        </main>
    )
};

export default Scroll;