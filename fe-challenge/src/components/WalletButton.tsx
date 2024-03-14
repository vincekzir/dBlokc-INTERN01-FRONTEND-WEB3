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
        style={{ width: "200px", position: "absolute", top: "150px" }}
      >
        {walletKey !== "" ? "Wallet Connected" : "Connect Wallet"}
      </button>
      {walletKey !== "" && (
        <div
          className="font-bold"
          style={{
            position: "absolute",
            top: "230px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ marginRight: "5px" }}>Wallet:</span>{" "}
          <span>{walletKey}</span>
        </div>
      )}
    </div>
  ) : null;
};

export default WalletButton;
