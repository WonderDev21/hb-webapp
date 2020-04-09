import React from 'react'
import { Container } from 'react-bootstrap'

// TODO: container classname is a bootstrap guideline, on refactor pass to root component
export const GoProLayout = ({ children, ...rest }) => (
  <Container fluid style={{ height: '100%' }} {...rest}>
    {children}
  </Container>
)
