import React from "react";
import '../App.css'
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
    return (
        <div className="App">
            <div className="App">
                <Header />
                <Body />
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)