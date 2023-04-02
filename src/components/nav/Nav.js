import React ,{ Suspense, lazy} from 'react';
import './Nav.css';
const Search = lazy(() => import('../search/Search'));

function Nav() {
  return (
    <div className="nav">
        <div className="nav-contents">
          <div className="left-contents">
            <img src={'Back.png'} alt="back-img" />
            <p>Romantic Comedy</p>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <div className='right-contents'>
              <Search />
            </div>
          </Suspense>
        </div>
    </div>
  );
}

export default Nav;
