import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Artwork from './components/Artwork';
import Projects from './components/Projects';
import SinglePost from './components/SinglePost';
import Post from './components/Post';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={Artwork} path='/artwork' />
        <Route component={Projects} path='/projects' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
