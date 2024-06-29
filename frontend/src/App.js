import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ChakraProvider, Box } from '@chakra-ui/react';

import Header from './components/Header';
import Footer from './components/Footer';

import Landing from './components/Landing';
import B0xx from './components/B0xx';
import LaunchLanding from './components/LaunchLanding';
import PayLaunch from './components/PayLaunch';
import PayB0xx from './components/PayB0xx';

import Structure from './components/Structure';
import DAO from './components/Structure/DAO';
import Team from './components/Structure/Team';
import Support from './components/Structure/Support';

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

import NotFound from './components/NotFound';

import customTheme from './theme';
import ScrollToTopButton from './components/ScrollToTopButton';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <AuthProvider>
        <Box bg="#fff">
          <Box
            maxWidth="1440px"
            mx="auto"
            overflowX="hidden"
            width="100%"
            pos="relative"
          >
            <Router>
              <Header />
              <Routes>
                <Route path="/launchpay" element={<PayLaunch />} />
                <Route path="/b0xxpay" element={<PayB0xx />} />
                <Route exact path="/" element={<Landing />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/b0xx" element={<B0xx />} />
                  {/* This is main branchs */}
                  <Route path="/launchlanding" element={<LaunchLanding />} />
                  <Route path="/structure" element={<Structure />} />
                  <Route path="/development" element={<Development />} />
                  <Route path="/presence" element={<Presence />} />
                  <Route path="/launch" element={<Launch />} />
                  {/* Structure branches */}
                  <Route path="/structure/dao" element={<DAO />} />
                  <Route path="/structure/team" element={<Team />} />
                  <Route path="/structure/support" element={<Support />} />
                  {/* Development branches */}
                  <Route
                    path="/development/documentation"
                    element={<Documentation />}
                  />
                  <Route
                    path="/development/contracts"
                    element={<Contracts />}
                  />
                  <Route path="/development/graphics" element={<Graphics />} />
                  <Route
                    path="/development/gamification"
                    element={<Gamification />}
                  />
                  <Route
                    path="/development/realestate"
                    element={<RealEstate />}
                  />
                  {/* Presence branches */}
                  <Route path="/presence/website" element={<Website />} />
                  <Route path="/presence/socials" element={<Socials />} />
                  <Route path="/presence/marketing" element={<Marketing />} />

                  {/* Launch branches */}
                  <Route path="/launch/assembly" element={<Assembly />} />
                  <Route path="/launch/launchsub" element={<LaunchSub />} />
                  <Route path="/launch/maintain" element={<Maintain />} />

                  {/* b0xx branches */}
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </Router>
            <ScrollToTopButton />
          </Box>
        </Box>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
