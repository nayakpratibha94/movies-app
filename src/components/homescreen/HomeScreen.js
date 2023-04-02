import React , { Suspense, lazy} from 'react';
import './HomeScreen.css';
const Nav = lazy(() => import('../nav/Nav'));
const Row = lazy(() => import('../row/Row'));


function HomeScreen() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="homeScreen">
          <Nav />
          <Row />
      </div>
    </Suspense>
  );
}

export default HomeScreen;
