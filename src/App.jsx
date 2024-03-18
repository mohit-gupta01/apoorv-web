import { Fragment } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Event from './pages/Event';
import Team from './pages/Team';
import Sponsor from './pages/Sponsor';
import Layout from './layout/Layout';
import Developer from './pages/Developer';

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/events' element={<Events />} />
          <Route exact path='/events/:category/:id' element={<Event />} />
          <Route exact path='/team' element={<Team />} />
          <Route exact path='/developers' element={<Developer />} />
          <Route exact path='/sponsor' element={<Sponsor />} />
        </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;