import NavPage from '../GridDefault/NavPage/NavPage';
import Header from '../HomePage/Header/Header';
import Artboards from '../HomePage/Artboards/Artboards';
import LogIn from './Register/LogIn';

function Account() {
  return (<>
  <Header />
  <NavPage title="My account" redText='My account' />
    <LogIn/>
    <Artboards/>
    </>)
}

export default Account;