import NavVar from "./components/NavBar";
import HomePage from "./components/HomePage";
import OurDayPage from "./components/OurDayPage";
import MemoryPage from "./components/MemoryPage";
import GalleryPage from "./components/GalleryPage";
function App() {
  return (
    <div className="App">
      <NavVar />
      <HomePage />
      <OurDayPage />
      <MemoryPage />
      <GalleryPage />
    </div>
  );
}

export default App;
