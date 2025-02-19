import styled from 'styled-components'

import { VoucherTimeLeft } from './VoucherTimeLeft'
import { WinnerForm } from './WinBidForm'
import { CopyButton } from '@/components/buttons/CopyButton'
import { useVoucherRedeemDeadline } from '@/blockchain/hooks/useVoucherRedeemDeadline'
import { Button } from '@/components/buttons'
import { FormHeading, InputLabel } from '@/components/form'
import { Colors } from '@/styles/colors'

interface Props {
  voucher: string
}

export const VoucherForm = ({ voucher }: Props) => {
  const redeemTimestamp = useVoucherRedeemDeadline()
  const isVoucherExpired = redeemTimestamp ? Date.now() > redeemTimestamp * BigInt(1000) : false

  return (
    <WinnerForm>
      <VoucherFormHeading>Here is your voucher code</VoucherFormHeading>
      <VoucherIdWrapper>
        <VoucherIdBox>
          <VoucherIdText>{voucher}</VoucherIdText>
          <CopyButton value={voucher} side="top" text="Copy voucher code" />
        </VoucherIdBox>
        <VoucherIdLabel $isVoucherExpired={isVoucherExpired}>
          {isVoucherExpired ? 'Voucher redeem period expired' : 'Enter this code in the sales system'}
        </VoucherIdLabel>
      </VoucherIdWrapper>

      <Button
        view="primary"
        onClick={() => window.open('https://tickets.devcon.org/', '_blank')}
        wide
        disabled={isVoucherExpired}
      >
        Go to sales system
      </Button>
      {!isVoucherExpired && <VoucherTimeLeft />}
    </WinnerForm>
  )
}

const VoucherIdWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 8px;
`

interface LabelProps {
  $isVoucherExpired: boolean
}

const VoucherIdLabel = styled(InputLabel)<LabelProps>`
  justify-content: center;
  line-height: 14px;
  margin-bottom: 8px;
  color: ${({ $isVoucherExpired }) => ($isVoucherExpired ? Colors.Red : Colors.Black)};
`

const VoucherFormHeading = styled(FormHeading)`
  font-size: 24px;
  margin-bottom: 16px;
  text-align: center;
`

const VoucherIdBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${Colors.White};
  padding: 8px 12px;
  height: 40px;
`

const VoucherIdText = styled.span`
  flex: 1;
  color: ${Colors.Grey};
`
