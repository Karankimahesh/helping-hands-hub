import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Donate from "./pages/Donate";
import RequestHelp from "./pages/RequestHelp";
import Drives from "./pages/Drives";
import OrganizeDrive from "./pages/OrganizeDrive";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DonorDashboard from "./pages/DonorDashboard";
import RecipientDashboard from "./pages/RecipientDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import LogisticsDashboard from "./pages/LogisticsDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/request-help" element={<RequestHelp />} />
          <Route path="/drives" element={<Drives />} />
          <Route path="/drives/:id" element={<Drives />} />
          <Route path="/organize-drive" element={<OrganizeDrive />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donor-dashboard" element={<DonorDashboard />} />
          <Route path="/recipient-dashboard" element={<RecipientDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/logistics-dashboard" element={<LogisticsDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
