import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { ChakraProvider, Box, theme } from '@chakra-ui/react';

import Header from './components/Header';
import Footer from './components/Footer';

import Landing from './components/Landing';
import Structure from './components/Structure';
import Development from './components/Development';
import Presence from './components/Presence';
import Launch from './components/Launch';

import customTheme from './theme';
const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/structure" element={<Structure />} />
          <Route path="/development" element={<Development />} />
          <Route path="/presence" element={<Presence />} />
          <Route path="/launch" element={<Launch />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
