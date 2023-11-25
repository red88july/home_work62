import Toolbar from './components/Toolbar/Toolbar.tsx';
import About from './components/About/About.tsx';

function App() {

  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main>
        <About/>
      </main>
    </>
  );
}

export default App;
