import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { formatTimeLeft } from '@/utils/formatters/formatTimeLeft'
import { formatDate } from '@/utils/formatters/formatDate'
import { setIntervalImmediately } from '@/utils/setIntervalImmediately'
import { useAuctionState } from '@/blockchain/hooks/useAuctionState'
import { useAuctionTime } from '@/blockchain/hooks/useAuctionTime'

export const TimeLeft = () => {
  const timestamp = useAuctionTime()
  const state = useAuctionState()

  const [timeLeft, setTimeLeft] = useState(formatTimeLeft(timestamp))

  useEffect(() => {
    const interval = setIntervalImmediately(() => setTimeLeft(formatTimeLeft(timestamp)), 1_000)
    return () => clearInterval(interval)
  }, [timestamp])

  return (
    <TimeBox>
      <TimeRow>
        <span>{state === 'AwaitingBidding' ? 'Till start' : ' Time left'}</span>
        <RemainingTime>{timeLeft}</RemainingTime>
      </TimeRow>
      <TimeRow>
        {state === 'AwaitingBidding' ? 'Starts on' : ' Ends on'} <RemainingTime>{formatDate(timestamp)}</RemainingTime>
      </TimeRow>
    </TimeBox>
  )
}

const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  font-family: 'Space Mono', 'Roboto Mono', monospace;

  @media screen and (min-width: 1800px) {
    flex-direction: row;
    align-items: center;
    column-gap: 40px;
  }
`
const TimeRow = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`

export const RemainingTime = styled.span`
  font-weight: 700;
`
