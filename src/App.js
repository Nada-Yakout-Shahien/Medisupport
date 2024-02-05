import React from 'react';
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop'; 
import router from './router'; // افترض أنك قمت بنقل تكوين الـrouter إلى ملف خارجي لتنظيم أفضل

const App = () => {
  return (
    <HelmetProvider>
      <RouterProvider router={router}>
        <ScrollToTop />
      </RouterProvider>
    </HelmetProvider>
  );
};

export default App;
