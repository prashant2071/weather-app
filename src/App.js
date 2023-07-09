import Search from "./components/Search";
import './App.css';
function App() {
  const handleSearchChange = (searchData) =>{
      console.log(searchData)
  }
  return (
    <div className="container">
      <Search onSearchChange={handleSearchChange}/>
    </div>
  );
}

export default App;
