import React, {useState, useEffect} from "react";
import Web3Modal from "web3modal";
import { ethers, parseUnits } from "ethers";

import {
  VotingAddress,
  VotingAddressABI,
  handleNetworkSwitch,
  CONTRACT_OWNER,
} from "./constants";

export const StakingContext = React.createContext();

const fetchContract = (signerOrProvider) => {
  return new ethers.Contract(VotingAddress, VotingAddressABI, signerOrProvider)
}

export function StakingProvider({children}) {
  const [currentAccount, setCurrentAccount] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('')
  const [contract, setContract] = useState(null);
  const [stk, setStk] = useState(null);
  const [rtk, setRtk] = useState(null);

  const checkIfWalletIsConnected = async () => {
    //如果没有安装钱包，则提示请安装钱包
    if (!window.ethereum) return setError("Please Install MetaMask");
    //切换网络
    const network = await handleNetworkSwitch();
    //获取钱包账户信息
    const account = await window.ethereum.request({ method: "eth_accounts" });
    //如果获取到钱包信息则默认连接第一个
    if (account.length) {
      setCurrentAccount(account[0]);
      return account[0];
    } else {
      //否则提示请安装、连接或者重连钱包
      setError("Please Install MetaMask & Connect, Reload");
    }
  }

  //连接钱包
  const connectWallet = async () => {
    if (!window.ethereum) return alert("Please install MetaMask");
    const network = await handleNetworkSwitch();
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setCurrentAccount(accounts[0]);
    setError("");
  }

  const stake = async (_amount) => {
    try {
      const connectAddress = await checkIfWalletIsConnected();
      if (connectAddress === CONTRACT_OWNER) return setError("Owner Can not Stake");
      setLoader(true);
      const amount = parseUnits(_amount, 'ether');
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      setContract(fetchContract(signer));
      
      const receipt = await stk.approve(contract.address, amount); // 正确的做法是先approve，approve事件会被监听，然后再stake
      await receipt.wait();
      contract.stake(amount)
      // const voteredList = await contract.stake(1,  {
      //   gasLimit: ethers.utils.hexlify(8000000),
      // });

      // await voteredList.wait();
      setLoader(false);
      window.location.reload();
    } catch (error) {
      setError("Sorry!, You have already voted, Reload Browser");
      setLoader(false);
    }
  }

  return (
    <StakingContext.Provider
      value={{
        currentAccount,
        connectWallet,
        checkIfWalletIsConnected,
        error,
        loader,
        stake,
      }}
    >
      {children}
    </StakingContext.Provider>
  );
}