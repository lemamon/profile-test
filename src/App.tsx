import "./App.css";
import Card from "./components/Card";
import useUser from "./hooks";

function App() {
  const { profile, loading } = useUser();

  return (
    <div className="App">
      {loading ? <p>loading...</p> : <Card data={profile} />}
    </div>
  );
}

export default App;
