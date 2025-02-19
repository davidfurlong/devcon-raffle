import { AuctionState, useAuctionState } from '@/blockchain/hooks/useAuctionState'
import { Colors } from '@/styles/colors'
import { ReactElement } from 'react'
import styled from 'styled-components'
import { ConnectWalletWarning } from './ConnectWalletWarning'
import { BidFlow } from './bid/BidFlow'
import { AwaitingResults } from '@/components/userActious/claim/AwaitingResults'
import { ClaimingClosed } from '@/components/userActious/claim/ClaimingClosed'
import { BidAwaiting } from '@/components/userActious/BidAwaiting'
import { WrongNetworkWarning } from './WrongNetworkWarning'
import { ClaimingFlow } from '@/components/userActious/claim/ClaimingFlow'

const UserActions: Record<AuctionState, () => ReactElement> = {
  AwaitingBidding: BidAwaiting,
  WalletNotConnected: ConnectWalletWarning,
  WrongNetwork: WrongNetworkWarning,
  BiddingFlow: BidFlow,
  AwaitingResults: AwaitingResults,
  ClaimingFlow: ClaimingFlow,
  ClaimingClosed: ClaimingClosed,
}

export const UserActionSection = () => {
  const state = useAuctionState()
  if (!state) {
    return <Wrapper />
  }

  const Content = UserActions[state]
  return (
    <Wrapper>
      <Content />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  margin-left: -170px;
  width: 724px;
  height: 450px;
  background-color: ${Colors.Pink};
  position: relative;
  z-index: 1;
  justify-content: center;
  align-items: center;
`
