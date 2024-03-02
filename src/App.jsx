import { Fragment } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Team from './pages/Team';
import Sponsor from './pages/Sponsor';
import Event from './pages/Event';
import Layout from './layout/Layout';

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/events' element={<Events />} />
          <Route exact path='/team' element={<Team />} />
          <Route exact path='/sponsor' element={<Sponsor />} />
          <Route exact path='/events/:id' element={<Event />} />
        </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;