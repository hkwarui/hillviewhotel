import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import './App.css'
import Footer from './components/Footer';
import RoomListScreen from './screens/RoomListScreen';
import RoomDetailsScreen from './screens/RoomDetailsScreen';
import BlogPostScreen from './screens/BlogPostScreen';
import GalleryScreen from './screens/GalleryScreen';
import BlogGridScreen from './screens/BlogGridScreen';

function App() {
  return (
    <Router>
      <Header className="header1"  />

          <Route path='/roomlistview' component={RoomListScreen}  />
          <Route path='/roomdetails' component={RoomDetailsScreen}  />
          <Route path='/bloggrid' component={BlogGridScreen}  />
          <Route path='/blogpost' component={BlogPostScreen}  />
          <Route path='/gallery' component={GalleryScreen}  />
          <Route path='/' component={HomeScreen} exact />
          

    <Footer/>
    </Router>
  );
}

export default App;
