import   '../styles/home.scss'
import Apy from './Apy';
import RoiResult from './RoiResult';
import ShowDetails from './ShowDetails';
import SubmitDetails from './SubmitDetails';
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
        <RoiResult />
        <SubmitDetails />
        <ShowDetails />
    </div>
  )
}

export default Home;