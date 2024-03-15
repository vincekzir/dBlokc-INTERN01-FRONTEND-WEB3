import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { BrowserProvider } from "ethers";

const QueryBalance = ({ type, setBalance }: { type: any; setBalance: any }) => {
  const [balanceDisplay, setBalanceDisplay] = useState("");

  useEffect(() => {
    const getBalance = async () => {
      try {
        // Fetch balance from your Render-deployed API
        const response = await fetch(
          "https://dblokc-intern01-backend-web3-1.onrender.com"
        );
        const data = await response.json();
        // Assuming your API response contains a field named 'balance'
        const balance = data.balance;

        // Update state with the fetched balance
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
      style={{ position: "absolute", bottom: "450px" }}
    >
      {balanceDisplay !== null && <div> Balance: {balanceDisplay} ETH</div>}
    </div>
  ) : null;
};

export default QueryBalance;
