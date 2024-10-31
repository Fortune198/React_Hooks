import React from "react";
import Products from "./Products";
import JumbotronComponent from "./JumbotronComponent";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div>
      <JumbotronComponent>
        This is a long sentence, and I want to insert content into the
        jumbotron component from the outside.
      </JumbotronComponent>
      {/* <Products /> */}
    </div>
  );
}

export default App;
