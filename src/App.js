import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import Header from "./components/Header";
import { DataProvider } from "./components/Context"
import Section from "./components/Section";

class App extends React.Component {
  render() {
    return (
      <DataProvider>

        <div className="app">
          <Router>
            <Header />
            <Section />
          </Router>
        </div>
      </DataProvider>




    )

  }
}

export default App;
