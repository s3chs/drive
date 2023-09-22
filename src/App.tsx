import './reset.css';
import './fonts/typography.css';
import './fonts/PPNeueMontreal-Regular.ttf';
import './fonts/PPSupplyMono-Regular.ttf';
import React from 'react';
import Layout from './components/Layout/Layout';
import Gallery from './components/Gallery/Gallery';
import GalleryItemDetails from './components/GalleryItemDetails/GalleryItemDetails';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Welcome from './components/Welcome/Welcome';
import Nav from './components/Nav/Nav';

function App() {
    const location = useLocation();
    return (
        <Layout>
            <Nav/>
            <AnimatePresence mode={'wait'}>
                <Routes location={location} key={location.pathname}>
                    <Route index element={<Gallery/>}/>
                    <Route path="/welcome" element={<Welcome/>}/>
                    <Route path="/:id" element={<GalleryItemDetails/>}/>
                </Routes>
            </AnimatePresence>
        </Layout>
    );

}

export default App;
