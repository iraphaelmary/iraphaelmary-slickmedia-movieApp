import React from 'react';
import Loader from './components/loader/Loader';
const MovieItems = React.lazy(() => import('./components/movieitems/MovieItems'));
const Nav = React.lazy(() => import('./components/nav/Nav'));
const Hero = React.lazy(()=> import('./components/hero/Hero'));

function App() {
  return (
   <React.Suspense fallback={<Loader />}>
    <Nav />
    <Hero />
    <MovieItems action='Popular: Action Movies' fantasy='Fantasy: Series' />
   </React.Suspense>
  );
}

export default App;
