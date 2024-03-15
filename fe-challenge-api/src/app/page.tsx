"use client";
import React from "react";
import { useEffect, useState } from "react";
import WalletButton from "../components/WalletButton";
import QueryBalance from "../components/QueryBalance";
import QueryNFTs from "../components/QueryNFTs";
// import { getContract } from "./getContract";

export default function Home() {
  const [walletKey, setWalletKey] = useState("");
  const [balance, setBalance] = useState<number>(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-900">
      <header className="text-white text-3xl font-bold mb-8">
        Metamask Wallet Fetcher
      </header>
      <div className="relative flex place-items-center">
        <WalletButton
          type={1}
          walletKey={walletKey}
          setWalletKey={setWalletKey}
        />
      </div>
      <div
        className="relative flex place-items-center"
        style={{ position: "absolute", bottom: "60px" }}
      >
        {walletKey && (
          <>
            <QueryBalance
              type={1}
              setBalance={setBalance}
              walletKey={walletKey}
            />
            <QueryNFTs type={1} setBalance={setBalance} walletKey={walletKey} />
          </>
        )}
      </div>
    </main>
  );
}
