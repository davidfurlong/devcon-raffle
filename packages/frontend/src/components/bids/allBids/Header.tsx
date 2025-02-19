import styled from 'styled-components'
import { Colors } from '@/styles/colors'
import { useBids } from '@/providers/BidsProvider'
import { HeaderBar } from '@/components/common/Header'
import { BackButton } from '@/components/buttons/BackButton'

export const Header = () => {
  const { bidList } = useBids()

  return (
    <StyledHeader>
      <ButtonWrapper>
        <BackButton url="/" />
      </ButtonWrapper>
      <Wrapper>
        <TitleColumn>
          <Title>Number of participants:</Title>
          <Title>{bidList.length}</Title>
        </TitleColumn>
      </Wrapper>
    </StyledHeader>
  )
}

const StyledHeader = styled(HeaderBar)`
  height: 160px;
  padding: 28px 68px;
  overflow: hidden;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: ${Colors.White};
`

const TitleColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`

const Title = styled.h2`
  background-color: ${Colors.White};
  padding: 4px 20px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background: ${Colors.White};
`
