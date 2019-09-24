import styled, { css } from 'styled-components'

import {
  BG_GRADIENT
} from '../../utils/style'

export const AppBackground = styled.div`
  z-index: -100000;
  background-image: ${BG_GRADIENT};
  position: fixed;

  height: 100vh;
  width: 100vw;
`