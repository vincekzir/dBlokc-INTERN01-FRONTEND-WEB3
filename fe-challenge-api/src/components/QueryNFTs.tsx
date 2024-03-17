import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { BrowserProvider } from "ethers";

interface NFT {
  name: string;
  symbol: string;
  tokenId: string;
  metadata: {
    image: string;
  };
}

const QueryNFTs = ({ type }: { type: any }) => {
  const [nfts, setNFTs] = useState([]);

  useEffect(() => {
    const getNFTs = async () => {
      try {
        const { ethereum } = window as any;
        const provider = new BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const address = signer.address;

        const response = await fetch(
          `https://dblokc-intern01-backend-web3-1.onrender.com/nft/${address}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        setNFTs(data.nfts);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      }
    };

    getNFTs();
  }, []);

  return type === 1 ? (
    <div>
      {(nfts as NFT[]).map((nft, index) => (
        <div key={index} className="border border-gray-400 p-4 mb-4">
          <h3 className="text-xl font-bold">{nft.name}</h3>
          <p className="text-gray-600">Symbol: {nft.symbol}</p>
          <p className="text-gray-600">Token ID: {nft.tokenId}</p>
          <img src={nft.metadata.image} alt={nft.name} className="max-w-xs" />
        </div>
      ))}
    </div>
  ) : null;
};

export default QueryNFTs;
