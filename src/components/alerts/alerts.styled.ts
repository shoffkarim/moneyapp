import styled from '@emotion/styled'
import { css } from "@emotion/react"


type AlertWrapperStyledProps = {
  visible: boolean
}

export const AlertWrapperStyled = styled.div<AlertWrapperStyledProps>(({ visible }) => css`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 100;
  opacity: ${visible ? '1' : '0'};
  visibility: ${visible ? 'visible' : 'hidden'};
  transition: all .4s;
`)
