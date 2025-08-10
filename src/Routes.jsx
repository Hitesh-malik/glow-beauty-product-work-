import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import TrustTransparencyCenter from './pages/trust-transparency-center';
import GlowLab from './pages/glow-lab';
import GlowAcademy from './pages/glow-academy';
import GlowProfileBuilder from './pages/glow-profile-builder';
import BeautyUniverse from './pages/beauty-universe';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<BeautyUniverse />} />
        <Route path="/trust-transparency-center" element={<TrustTransparencyCenter />} />
        <Route path="/glow-lab" element={<GlowLab />} />
        <Route path="/glow-academy" element={<GlowAcademy />} />
        <Route path="/glow-profile-builder" element={<GlowProfileBuilder />} />
        <Route path="/beauty-universe" element={<BeautyUniverse />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
