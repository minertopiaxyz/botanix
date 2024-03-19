import React from 'react'
import { FaHome } from "react-icons/fa";

const Lib = require('../Lib');
const client = require('../client.json');
const { projectName, ethSymbol, tokenSymbol } = client;
const { clearStorageValue } = Lib;

const WalletUI = ({ onConnectWallet, walletConnected, data }) => {
  const headerTitle = projectName;
  const num1 = data.userETH;
  const num2 = Lib.simpleNum(data.userToken);
  const headerMsg = `$${ethSymbol}:${num1} $${tokenSymbol}:${num2}`;

  const goHome = async () => {
    await clearStorageValue();
    const url = Lib.getBaseURL();
    Lib.openUrl(url);
  }

  let msg = 'Connected';

  if (data && data.userAddress && data.userAddress.length > 8) {
    const str = data.userAddress;
    const last4 = str.slice(-5);
    const first4 = str.slice(0, 7);
    msg = first4 + '..' + last4;
  }

  return (
    <div className="flex gap-2 mb-2 flex-col-reverse md:flex-row">
      <div className="flex-1">
        <h1 className="text-2xl font-bold cursor-pointer" onClick={() => Lib.refreshPage()}>{headerTitle}</h1>
        <p>{headerMsg}</p>
      </div>
      <div className="flex gap-2">
        <button className="btn btn-outline" onClick={() => goHome()}><FaHome size={24} /></button>
        {walletConnected ? (
          <button className="flex-1 btn btn-outline btn-success">{msg}</button>
        ) : (
          <button className="flex-1 btn btn-primary" onClick={() => onConnectWallet()}>Connect Wallet</button>
        )}
      </div>
    </div>
  )
}

export default WalletUI
