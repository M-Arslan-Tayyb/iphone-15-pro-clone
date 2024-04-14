
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
function App(){
  return (
      <main className="w-screen">
          <Navbar></Navbar>
          <Hero></Hero>
          <Highlight></Highlight>
          <Features></Features>
          <HowItWorks></HowItWorks>
          
      </main>
  );
}

export default App;
