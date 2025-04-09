import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from './components/Error';
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./context/UserContext";
import Cart from './components/Cart';

// redux
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
const About = lazy(() => import("./components/About"))
const GroceryLazyComponent = lazy(() => import('./components/Grocery'))

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";





const App = () => {
  const [name, setName] = useState("")
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{
        loggedInUser: "Priyanka Nishad",
        name,
        setName
      }}>
        <div>

          <Header />

          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
function ErrorFallback() {
  return (
    <div>
      <pre>{'Oops'}</pre>
      <h1>Something went wrong!</h1>

    </div>
  );
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    children: [{
      path: "/",
      element: <Body />,
    },
    {
      path: "/about",
      element: <Suspense fallback={<h1>Loading...</h1>}>
        <About />
      </Suspense>
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/restaurants/:resId",
      element: <RestaurantMenu />,
    },
    {
      path: "/grocery",
      element:
        <Suspense fallback={<h1>Loading...</h1>}>
          <GroceryLazyComponent />
        </Suspense>

    },
    {
      path: "/cart",
      element:
        <Cart />

    }
    ]
  },

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
