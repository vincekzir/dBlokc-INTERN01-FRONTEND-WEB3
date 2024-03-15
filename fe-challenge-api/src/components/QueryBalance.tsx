import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { BrowserProvider } from "ethers";

const QueryBalance = ({
  type,
  setBalance,
  walletKey,
}: {
  type: any;
  setBalance: any;
  walletKey: any;
}) => {
  const [balanceDisplay, setBalanceDisplay] = useState("");

  useEffect(() => {
    const getBalance = async () => {
      try {
        const { ethereum } = window as any;
        const provider = new BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const address = signer.address;

        const response = await fetch(
          `https://dblokc-intern01-backend-web3-1.onrender.com/balance/${address}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const balance = data.balance;

        setBalance(balance);
        setBalanceDisplay(balance);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    getBalance();
  }, []);

  return type === 1 ? (
    <div
      className="flex flex-col items-center font-bold"
      style={{ position: "absolute", bottom: "395px", left: "43.5%" }}
    >
      {balanceDisplay !== null && <div> Balance: {balanceDisplay} ETH</div>}
    </div>
  ) : null;
};

export default QueryBalance;
