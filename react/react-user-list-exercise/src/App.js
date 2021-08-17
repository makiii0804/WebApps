import { Fragment } from 'react';

import { Header } from './components/Header/Header'

import { Footer } from './components/Footer/Footer'

import { UserList } from './components/UserList/UserList';




function App() {
  return (
 
  <Fragment>  
    <Header />
    <UserList />
    <Footer />
  </Fragment>   
  );
}

export default App;