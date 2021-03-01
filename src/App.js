import './App.less';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import Sidebar from './components/Sidebar.js';



function App() {
  return (
    <div className="App">
     <Header />
     <div>
      <Main />
      <Sidebar />
      </div>
      <Footer />
     </div>
  );
}

export default App;
