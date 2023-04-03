import React ,{ Suspense, lazy} from 'react';
import './Nav.css';
import { useDispatch } from 'react-redux';
import {
  resetSearch
} from '../../features/counterSlice';
const Search = lazy(() => import('../search/Search'));

function Nav() {
  const dispatch = useDispatch();
  return (
    <div className="nav">
        <div className="nav-contents">
          <div className="left-contents">
            <img src={'Back.png'} alt="back-img" onClick={() => dispatch(resetSearch())}/>
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
