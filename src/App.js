import React from "react";
import './App.css';
import Mint from './Mint';
import Burn from './Burn';
import Wallat from './Wallat';
import Transfer from './Transfer';
import { ethers } from 'ethers';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import { ThemeProvider } from "styled-components";

const contAddr="0x262125829d8f9B693c525aB443709F6D958b0b92";
let ABI=[
  "function mint(address receiver, uint amount) public",
  "function balances(address)public view returns(uint256)",
  "function transfer (address receiver, uint amount) public",
  "function burn(address receiver, uint amount) public"

];
let nemonic="express author clap rail quantum daughter jump habit seek wrist slice spatial";
let wallet=ethers.Wallet.fromMnemonic(nemonic);
let provider=new ethers.providers.InfuraProvider(
  "rinkeby",
  "d45d013ff4d24c6f89aac01e98e07cf8"
);
wallet=wallet.connect(provider);
window.instance= new ethers.Contract(contAddr,ABI,wallet);

function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "rgb(219 229 235)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient: "Linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };
  return (

    <ThemeProvider theme ={theme}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path = "/wallat" element = { <Wallat /> } />
        <Route path = "/Mint" element = { <Mint /> } />
        <Route path = "/Burn" element = { <Burn /> } />
        <Route path = "/Transfer" element = { <Transfer /> } />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
