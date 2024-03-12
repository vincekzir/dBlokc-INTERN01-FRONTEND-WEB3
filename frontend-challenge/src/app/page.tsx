"use client";
import React from "react";
import { useEffect, useState } from "react";
import WalletButton from "../component/WalletButton";

export default function Home() {
  const [walletKey, setWalletKey] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center">
        <WalletButton
          type={1}
          walletKey={walletKey}
          setWalletKey={setWalletKey}
        />
      </div>
    </main>
  );
}
