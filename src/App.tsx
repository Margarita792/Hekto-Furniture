import GridDefault from './components/GridDefault/GridDefault';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import ProductShoppingCart from './components/ShoppingCart/ProductShoppingCart/ProductShoppingCart';
import ShopLeftSidebar from './components/shopLeftSidebar/ShopLeftSidebar';
import AboutUs from './components/AboutUs/AboutUs';
import OrderCompleted from './components/OrderCompleted/OrderCompleted';
import Wishlist from './components/Wishlist/Wishlist';
import Account from './components/Account/Register/LogIn';
import NewUser from './components/Account/NewUser/NewUser';
import Register from './components/Account/Register/LogIn';
import SignUp from './components/Account/SignUp/SignUp';
import LogIn from './components/Account/Register/LogIn';
import HektoDemo from './components/HektoDemo/HektoDemo';
import NotFound from './components/NotFound/NotFound';
import ContactUs from './components/ContactUs/ContactUs';
import BlogPage from './components/BlogPage/BlogPage';
import PageSingleBlog from './components/BlogPage/PageSingleBlog/PageSingleBlog';

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/gridDefault" element={<GridDefault />}/>
        <Route path="/productDetails/:id" element={<ProductDetails/>}/>
        <Route path="/shoppingCart" element={<ShoppingCart/>}/>
        <Route path="/productShoppingCart" element={<ProductShoppingCart/>}/>
        <Route path="/shopLeftSidebar" element={<ShopLeftSidebar/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/OrderCompleted" element={<OrderCompleted/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/newUser" element={<NewUser/>}/>
        <Route path="/logIn" element={<LogIn/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/hektoDemo" element={<HektoDemo/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
        <Route path="/blogPage" element={<BlogPage/>}/>
        <Route path="/postSingleBlog/:id" element={<PageSingleBlog/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}
export default App;
