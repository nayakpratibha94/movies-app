import React, { useState, useEffect } from 'react';
import './Row.css';
import Card from '../card/Card';
import { useSelector } from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";
import {
  filteredMovies
} from '../../features/counterSlice';
import ContentListing1 from '../../mockJsons/CONTENTLISTINGPAGE-PAGE1.json';
import ContentListing2 from '../../mockJsons/CONTENTLISTINGPAGE-PAGE2.json';
import ContentListing3 from '../../mockJsons/CONTENTLISTINGPAGE-PAGE3.json';

let page = 1;
const fetchData = (setMovies, movies) => {
  const newItems = []
  let result = [];
  console.log(page);
  if (page ===1) {
     result = ContentListing1['page']['content-items']['content'];
     page = page +1;
  } else if (page === 2) {
    result = ContentListing2['page']['content-items']['content'];
    page = page +1;
  } else if (page === 3) {
    result = ContentListing3['page']['content-items']['content'];
    page = page +1;
  }
  newItems.push(...result);
  if (newItems.length >0 ) {
    setMovies([...movies, ...newItems])
  }
};
 
const refresh = (setMovies) => {};

function Row() {
  const filteredItems = useSelector(filteredMovies);
  const [movies, setMovies] = useState([]);
  console.log('here', filteredItems)
  useEffect(()=>{
    fetchData(setMovies,movies)
  },[])

  return (
    <InfiniteScroll
        dataLength={movies.length} //This is important field to render the next data
        next={() => {
          fetchData(setMovies, movies);
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
        {
          filteredItems && filteredItems.length > 0 ? 
          <div className="row">
            <div className='cards' style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(90px, 1fr)", gridGap: 10 }}>
              {
                filteredItems.map((movie, index) => {
                  return (
                    <Card imgUrl={movie['poster-image']} title={movie['name']} id={index} />
                  )
                })
              }
              </div>
          </div> :
          <div className="row">
          <div className='cards' style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(90px, 1fr)", gridGap: 10 }}>
            {
               movies.map((movie, index) => {
                return (
                  <Card imgUrl={movie['poster-image']} title={movie['name']} id={index} />
                )
              })
            }
            </div>
        </div>
        }
    </InfiniteScroll>
  );
}

export default Row;