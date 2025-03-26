
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FAQ from "./pages/FAQ";
import Delivery from "./pages/Delivery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <ThemeProvider>
          <AuthProvider>
            <CartProvider>
              <Toaster />
              <Sonner />
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/product/:productId" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/place-order" element={<PlaceOrder />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/delivery" element={<Delivery />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
