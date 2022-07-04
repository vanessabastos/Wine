import type { NextPage } from 'next';
import Bag from '../components/Bag';
import Header from '../components/Header';
import Main from '../components/Main';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Main />
      <Bag />
    </>
  )
}

export default Home;