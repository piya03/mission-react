import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from './components/Error';
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

const About = lazy(() => import("./components/About"))
const GroceryLazyComponent = lazy(() => import('./components/Grocery'))

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";




const App = () => {

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
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

    }
    ]
  },

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
