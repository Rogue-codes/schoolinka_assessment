import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Backdrop from "./widgets/modal/Backdrop";
import { useEffect, useState } from "react";

function App() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    // Use setTimeout to set showWelcomeModal to true after 5000 milliseconds (5 seconds)
    const timeout = setTimeout(() => {
      setShowWelcomeModal(true);
    }, 5000);

    // Clear the timeout if the component unmounts to prevent memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="lg:p-8 px-4 py-8">
      <Home />
      <ToastContainer />
      {showWelcomeModal && <Backdrop setShowWelcomeModal={setShowWelcomeModal} />}
    </main>
  );
}

export default App;
