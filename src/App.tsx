// import Greetings from "@components/Greetings";

import Aboutme from "@components/Aboutme";
import Hero from "@components/Hero";
import PhotoPortfolio from "@components/PhotoPortifolio";

function App() {
  return (
    <main className="mx-auto w-full max-w-[100rem] px-20">
      {/* <Greetings /> */}
      <Hero />
      <Aboutme />
      <PhotoPortfolio />
    </main>
  );
}

export default App;
