import './App.css';
import CardDetails from './components/CardDetails';
import Navigation from './components/Navigation';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App lg:pb-[7.75rem] lg:px-[22rem] md:pt-[3.625rem] md:pb-[7.375rem] md:px-[2.5rem] pt-[1.5rem] pb-[5.313rem] px-[1.5rem]">
    <Navigation />
    <SearchBar />
    <CardDetails />
    </div>
  );
}

export default App;
