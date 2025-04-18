
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { HealthProvider } from "./contexts/HealthContext";
import { EmergencyProvider } from "./contexts/EmergencyContext";
import { WelfareProvider } from "./contexts/WelfareContext";
import Index from "./pages/Index";
import Health from "./pages/Health";
import Emergency from "./pages/Emergency";
import Welfare from "./pages/Welfare";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <HealthProvider>
        <EmergencyProvider>
          <WelfareProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/health" element={<Health />} />
                  <Route path="/emergency" element={<Emergency />} />
                  <Route path="/welfare" element={<Welfare />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </WelfareProvider>
        </EmergencyProvider>
      </HealthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
