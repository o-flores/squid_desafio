import './App.css';
import Logo from './assets/logo.svg';
import PostsContainer from './components/PostsContainer';

function App() {
  return (
    <div>
      <img src={Logo} alt="Squid Logo" />
      <PostsContainer />
    </div>
  );
}

export default App;
