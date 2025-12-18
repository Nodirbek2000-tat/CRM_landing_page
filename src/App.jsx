import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './Components/Header';
import Main1 from './Components/Main1';
// import Main2 from './Components/Main2';
import Main3 from './Components/Main3';
import Main4 from './Components/Main4';
import Main5 from './Components/Main5';
import Main6 from './Components/Main6';
import Main7 from './Components/Main7';
import Main8 from './Components/Main8';
import Price from './Components/Price';
import Footer from './Components/Footer';
import Contact from './Components/Conatct';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

// Layout component
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

// Home page
function Home() {
  return (
    <>
      <Main1 />
      {/* <Main2 /> */}
      <Main3 />
      <Main4 />
      <Main5 />
      <Main6 />
      <Main7 />
      <Main8 />
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 150,
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/price',
          element: <Price />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
