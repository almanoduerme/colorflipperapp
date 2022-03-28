import React, { useState } from "react";

// Button Component
import Button from "./components/Button/Button";

// React Icon
import { MdContentCopy } from "react-icons/md";

// Stylesheet
import "./App.css";

// CopyToClipboard Component
import { CopyToClipboard } from "react-copy-to-clipboard";

const App = () => {
  // States
  const [color, setColor] = useState("");
  const [copied, setCopied] = useState(false);

  // Button Click Handler
  const handleClick = () => {
    // Random Color
    const randomColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .toUpperCase()}`;
    setColor(randomColor);
  };

  // Copy to Clipboard Handler
  const handleCopy = () => {
    setTimeout(() => {
      setCopied(false);
    }, 2000);
    setCopied(true);
  };

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <h1 className="title">Color Flipper App</h1>
      <div className="container">
        <Button text="Click me!" handleClick={handleClick} className="button" disabled={copied} />
        <CopyToClipboard text={color} className="CopyToClipboard">
          <MdContentCopy size={30} color="white" onClick={handleCopy} />
        </CopyToClipboard>
      </div>
      <div className="copy-container">
        {copied && <span className="copied">¡Copiado! {color}</span>}
      </div>
    </div>
  );
};

export default App;
