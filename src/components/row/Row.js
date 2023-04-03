import React, { lazy, Suspense, useEffect } from 'react';
import './Row.css';
import { useSelector, useDispatch } from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";
import {
  filteredMovies, movieList, fetchMovies
} from '../../features/counterSlice';
const CardContainer = lazy(() => import('../cards-container/CardContainer'));

const refresh = (setMovies) => {};
let page = 1;
function Row() {
  const filteredItems = useSelector(filteredMovies);
  const movies = useSelector(movieList);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchMovies(1))
  },[])

  return (
    <InfiniteScroll
        dataLength={movies.length} //This is important field to render the next data
        next={() => {
          page=page+1
          dispatch(fetchMovies(page));
        }}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // below props only if you need pull down functionality
        refreshFunction={refresh}
        pullDownToRefresh
        pullDownToRefreshThreshold={3}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: "center" }}># 8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: "center" }}># 8593; Release to refresh</h3>
        }
      >
      <Suspense fallback={<div>Loading...</div>}>
        {
          filteredItems && filteredItems.length > 0 ? 
             <CardContainer items = {filteredItems} />
           :
           <CardContainer items = {movies} />
        }
        </Suspense>
    </InfiniteScroll>
  );
}

export default Row;