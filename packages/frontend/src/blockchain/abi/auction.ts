export const AUCTION_ABI = [
  {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "bidderID", "type": "uint256"}],
    "name": "NewAuctionWinner",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "bidder", "type": "address"}, {
      "indexed": false,
      "internalType": "uint256",
      "name": "bidderID",
      "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "bidAmount", "type": "uint256"}],
    "name": "NewBid",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "bidderID", "type": "uint256"}],
    "name": "NewGoldenTicketWinner",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "bidderID", "type": "uint256"}],
    "name": "NewRaffleWinner",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "internalType": "address",
      "name": "previousOwner",
      "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "OwnershipTransferred",
    "type": "event"
  }, {"stateMutability": "payable", "type": "fallback"}, {
    "inputs": [],
    "name": "auctionWinnersCount",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  }, {"inputs": [], "name": "bid", "outputs": [], "stateMutability": "payable", "type": "function"}, {
    "inputs": [],
    "name": "biddingEndTime",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "biddingStartTime",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{"internalType": "uint256", "name": "bidderID", "type": "uint256"}],
    "name": "claim",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{"internalType": "uint256", "name": "bidsCount", "type": "uint256"}],
    "name": "claimFees",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [],
    "name": "claimProceeds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [],
    "name": "claimingEndTime",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "getAuctionWinners",
    "outputs": [{"internalType": "uint256[]", "name": "", "type": "uint256[]"}],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{"internalType": "address", "name": "bidder", "type": "address"}],
    "name": "getBid",
    "outputs": [{
      "components": [{
        "internalType": "uint256",
        "name": "bidderID",
        "type": "uint256"
      }, {"internalType": "uint256", "name": "amount", "type": "uint256"}, {
        "internalType": "enum BidModel.WinType",
        "name": "winType",
        "type": "uint8"
      }, {"internalType": "bool", "name": "claimed", "type": "bool"}],
      "internalType": "struct BidModel.Bid",
      "name": "",
      "type": "tuple"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{"internalType": "uint256", "name": "bidderID", "type": "uint256"}],
    "name": "getBidByID",
    "outputs": [{
      "components": [{
        "internalType": "uint256",
        "name": "bidderID",
        "type": "uint256"
      }, {"internalType": "uint256", "name": "amount", "type": "uint256"}, {
        "internalType": "enum BidModel.WinType",
        "name": "winType",
        "type": "uint8"
      }, {"internalType": "bool", "name": "claimed", "type": "bool"}],
      "internalType": "struct BidModel.Bid",
      "name": "",
      "type": "tuple"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{"internalType": "uint256", "name": "bidderID", "type": "uint256"}],
    "name": "getBidWithAddress",
    "outputs": [{
      "components": [{
        "internalType": "address",
        "name": "bidder",
        "type": "address"
      }, {
        "components": [{"internalType": "uint256", "name": "bidderID", "type": "uint256"}, {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }, {"internalType": "enum BidModel.WinType", "name": "winType", "type": "uint8"}, {
          "internalType": "bool",
          "name": "claimed",
          "type": "bool"
        }], "internalType": "struct BidModel.Bid", "name": "bid", "type": "tuple"
      }], "internalType": "struct BidModel.BidWithAddress", "name": "", "type": "tuple"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{"internalType": "uint256", "name": "bidderID", "type": "uint256"}],
    "name": "getBidderAddress",
    "outputs": [{"internalType": "address payable", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "getBiddersCount",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "getBidsWithAddresses",
    "outputs": [{
      "components": [{
        "internalType": "address",
        "name": "bidder",
        "type": "address"
      }, {
        "components": [{"internalType": "uint256", "name": "bidderID", "type": "uint256"}, {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }, {"internalType": "enum BidModel.WinType", "name": "winType", "type": "uint8"}, {
          "internalType": "bool",
          "name": "claimed",
          "type": "bool"
        }], "internalType": "struct BidModel.Bid", "name": "bid", "type": "tuple"
      }], "internalType": "struct BidModel.BidWithAddress[]", "name": "", "type": "tuple[]"
    }],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "getRaffleParticipants",
    "outputs": [{"internalType": "uint256[]", "name": "", "type": "uint256[]"}],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "getRaffleWinners",
    "outputs": [{"internalType": "uint256[]", "name": "", "type": "uint256[]"}],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "getState",
    "outputs": [{"internalType": "enum StateModel.State", "name": "", "type": "uint8"}],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "minBidIncrement",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "owner",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "raffleWinnersCount",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{"internalType": "address", "name": "tokenAddress", "type": "address"}],
    "name": "rescueTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [],
    "name": "reservePrice",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [],
    "name": "settleAuction",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{"internalType": "uint256[]", "name": "randomNumbers", "type": "uint256[]"}],
    "name": "settleRaffle",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [],
    "name": "withdrawUnclaimedFunds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {"stateMutability": "payable", "type": "receive"}
] as const
