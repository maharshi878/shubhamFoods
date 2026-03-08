import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlackGarlic from "./pages/products/BlackGarlic";
import PeeledGarlic from "./pages/products/PeeledGarlic";
import FreezeDried from "./pages/products/FreezeDried";
import VacuumFried from "./pages/products/VacuumFried";
import RoastedMasala from "./pages/products/RoastedMasala";
import ScrollToTop from './components/ScrollToTop';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products/black-garlic" element={<BlackGarlic />} />
            <Route path="/products/peeled-garlic" element={<PeeledGarlic />} />
            <Route path="/products/freeze-dried" element={<FreezeDried />} />
            <Route path="/products/vacuum-fried" element={<VacuumFried />} />
            <Route path="/products/roasted-masala" element={<RoastedMasala />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;


