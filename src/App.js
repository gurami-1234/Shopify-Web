import MyRouters from "MyRouters/MyRouters";
import AuthModal from "components/AuthModal/AuthModal";
import { AuthModalContext } from "contexts/AuthModalContext/AuthModalContext";
import { useContext } from "react";

function App() {
  const {isAuthModalOpen} = useContext(AuthModalContext)
  return (
    <div className="App">
      {isAuthModalOpen && <AuthModal/>}
      <MyRouters/>
    </div>
  );
}

export default App;
