import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { ChakraProvider, Box, theme } from '@chakra-ui/react';

import Header from './components/Header';
import Footer from './components/Footer';

import Landing from './components/Landing';

import Structure from './components/Structure';
import DAOStructure from './components/Structure/DAOStructure';
import TeamSolidarity from './components/Structure/TeamSolidarity';
import PlatformSupport from './components/Structure/PlatformSupport';

import Development from './components/Development';
import Documentation from './components/Development/Documentation';
import Contracts from './components/Development/Contracts';
import Graphics from './components/Development/Graphics';
import Gamification from './components/Development/Gamification';
import RealEstate from './components/Development/RealEstate';

import Presence from './components/Presence/';
import Website from './components/Presence/Website';
import Socials from './components/Presence/Socials';
import Marketing from './components/Presence/Marketing';

import Launch from './components/Launch/';
import Assembly from './components/Launch/Assembly';
import LaunchSub from './components/Launch/LaunchSub';
import Maintain from './components/Launch/Maintain';

import ConnectWallet from './components/ConnectWallet';

import customTheme from './theme';
const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Router>
        <Header />
        <Routes>
          {/* This is main branchs */}
          <Route path="/" element={<Landing />} />
          <Route path="/structure" element={<Structure />} />
          <Route path="/development" element={<Development />} />
          <Route path="/presence" element={<Presence />} />
          <Route path="/launch" element={<Launch />} />
          {/* Structure branches */}
          <Route path="/structure/daostructure" element={<DAOStructure />} />
          <Route
            path="/structure/teamsolidarity"
            element={<TeamSolidarity />}
          />
          <Route
            path="/structure/platformsupport"
            element={<PlatformSupport />}
          />
          {/* Development branches */}
          <Route
            path="/development/documentation"
            element={<Documentation />}
          />
          <Route path="/development/contracts" element={<Contracts />} />
          <Route path="/development/graphics" element={<Graphics />} />
          <Route path="/development/gamification" element={<Gamification />} />
          <Route path="/development/realestate" element={<RealEstate />} />
          {/* Presence branches */}
          <Route path="/presence/website" element={<Website />} />
          <Route path="/presence/socials" element={<Socials />} />
          <Route path="/presence/marketing" element={<Marketing />} />

          {/* Launch branches */}
          <Route path="/launch/assembly" element={<Assembly />} />
          <Route path="/launch/launchsub" element={<LaunchSub />} />
          <Route path="/launch/maintain" element={<Maintain />} />

          {/* b0xx branches */}
          <Route path="/connectwal" element={<ConnectWallet />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
