import React from "react";
import Navbar from "./component/Navbar";
import CartContainer from "./component/cartContainer";
function App() {
  return (
    <main className="container-fluid container-xxl">
        <Navbar />
        <CartContainer />
    </main>
  );
}

export default App;
