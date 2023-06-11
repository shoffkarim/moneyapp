import styled from '@emotion/styled'
import { css } from "@emotion/react"


type TransactionAlertWrapperStyledProps = {
  visible: boolean
}

export const TransactionAlertWrapperStyled = styled.div<TransactionAlertWrapperStyledProps>(({ visible }) => css`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 100;
  opacity: ${visible ? '1' : '0'};
  visibility: ${visible ? 'visible' : 'hidden'};
  transition: all .4s;
`)
