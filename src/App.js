import './settings.css'
import './ui.css'
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom';
import PartnersPage from './components/PartnersPage/PartnersPage';
import CouponsPage from './components/CouponsPage/CouponsPage';
import EmptyPage from './components/EmptyPage/EmptyPage';


function App() {
  return (
    <>
      <Header />
        <Route exact path="/" component={EmptyPage}/>
        <Route exact path="/coupons" component={CouponsPage}/>
        <Route exact path="/dreams" component={EmptyPage}/>
        <Route exact path="/avia" component={EmptyPage}/>
        <Route exact path="/tickets" component={EmptyPage}/>
        <Route exact path="/hotels" component={EmptyPage}/>
        <Route exact path="/carshering" component={EmptyPage}/>
        <Route exact path="/theaters" component={EmptyPage}/>
        <Route exact path="/save" component={EmptyPage}/>
        <Route exact path="/connect" component={EmptyPage}/>
        <Route exact path='/partners' component={PartnersPage}/>
      <Footer />
    </>
  );
}

export default App;
