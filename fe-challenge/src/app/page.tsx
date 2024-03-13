"use client";
import React from "react";
import { useEffect, useState } from "react";
import WalletButton from "../components/WalletButton";
import QueryBalance from "../components/QueryBalance";
// import { getContract } from "./getContract";

export default function Home() {
  const [walletKey, setWalletKey] = useState("");
  const [balance, setBalance] = useState<number>(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-900">
      <div className="relative flex place-items-center">
        <WalletButton
          type={1}
          walletKey={walletKey}
          setWalletKey={setWalletKey}
        />
        <QueryBalance type={1} setBalance={setBalance} />
        {balance !== 0 && <div className="text-white mt-4"></div>}
      </div>
    </main>
  );
}
