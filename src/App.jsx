import { useSelector } from 'react-redux';
import  Counter from './components/Counter';
import Header from './components/Header';
const App = () => {
 const {is_dark_theme} = useSelector(store => store.counter)
  return (
    <div style={{ height : '100vh', width: '100vw'}}
     className={is_dark_theme ? "text-bg-dark" : "text-bg-light"}>
      <Header />
    
      <Counter />
    </div>
  );
};

export default App;

