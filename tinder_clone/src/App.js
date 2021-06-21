import "./App.css";
import Header from "./components/Header";
import Swipebuttons from "./components/Swipebuttons";
import TinderCards from "./components/TinderCards"
function App() {
  return (
    <>
      <div className="app">
        {/* Header */}
          <Header />
        {/* TinderCards */}
          <TinderCards />
        {/* Swipe Buttons */}
        <Swipebuttons />

      </div>
    </>
  );
}

export default App;
