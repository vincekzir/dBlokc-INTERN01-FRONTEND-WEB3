// import { useEffect, useState } from "react";

const WalletButton = ({
  type,
  walletKey,
  setWalletKey,
}: {
  type: any;
  walletKey: any;
  setWalletKey: any;
}) => {
  const connectWallet = async () => {
    const { ethereum } = window as any;
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    setWalletKey(accounts[0]);
  };

  return type === 1 ? (
    <div className="flex flex-col items-center">
      <button
        onClick={connectWallet}
        className="text-black bg-white border rounded p-4 shadow-lg font-bold text-grey-darkest"
      >
        {walletKey !== "" ? "Wallet Connected" : "Connect Wallet"}
      </button>
    </div>
  ) : null;
};

export default WalletButton;
