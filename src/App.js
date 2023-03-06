
import './App.css';
import Main from './Components/Main';
import NavBar from './Components/NavBar';
import Row from './Components/Row';
import {request} from './Request';

function App() {
  console.log('hello');
  return (
    <div className="App">
      <NavBar/>
      <Main/>
      <Row title={'Top Rated'} fetchUrl={request.requestTopRated}/>
      <Row title={'Upcoming'} fetchUrl={request.requestUpcoming}/>
      <Row title={'Popular'} fetchUrl={request.requestPopular}/>
    </div>
  );
}

export default App;
