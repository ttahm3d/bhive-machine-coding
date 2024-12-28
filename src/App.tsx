import Header from "@/components/header";
import Footer from "@/components/footer";
import HomePage from "./pages/home";

function App() {
  return (
    <main className="flex flex-col min-h-screen  bg-[#f9faff]">
      <Header />
      <HomePage />
      <Footer />
    </main>
  );
}

export default App;
