import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { BrowserProvider } from "ethers";

const QueryBalance = ({ type, setBalance }: { type: any; setBalance: any }) => {
  const [balanceDisplay, setBalanceDisplay] = useState("");

  useEffect(() => {
    const getBalance = async () => {
      try {
        const { ethereum } = window as any;
        const provider = new BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const balance = await provider.getBalance(signer);
        const adjustedBalance = ethers.formatEther(balance);
        setBalance(adjustedBalance);
        setBalanceDisplay(adjustedBalance);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    getBalance();
  }, []);

  return type === 1 ? (
    <div
      className="flex flex-col items-center font-bold"
      style={{ position: "absolute", bottom: "450px" }}
    >
      {balanceDisplay !== null && <div> Balance: {balanceDisplay} ETH</div>}
    </div>
  ) : null;
};

export default QueryBalance;
