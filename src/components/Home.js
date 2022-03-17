import   '../styles/home.scss'
import Apy from './Apy';
import TakeInput from './TakeInput';
import Tier from './Tier';
import TimeFrame from './TimeFrame';
const Home = () => {
  return (
    <div className='home'>
        <h1>Calculator</h1>
        <TakeInput />
        <TimeFrame />
        <Apy />
        <Tier />
    </div>
  )
}

export default Home;