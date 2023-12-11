import logo from './logo.svg';
import './App.css';
import ShoeEx_Redux from './shoeredux/ShoeEx_Redux';
import MovieSlice from './bookTicket/MovieSlice';
import Movie from './bookTicket/Movie';
import ExMovie from './bookTicket/ExMovie';

function App() {
  return (
    <div className="App">
     {/* <ShoeEx_Redux></ShoeEx_Redux> */}
     <ExMovie></ExMovie>
    </div>
  );
}

export default App;
