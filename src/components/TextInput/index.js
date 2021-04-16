import React, { forwardRef } from 'react'
import { TextInput as TInput, ActivityIndicator } from 'react-native'

import { Container } from './styles'

function TextInput({ loading, children, styleContainer, ...rest }, ref) {
  return (
    <Container style={styleContainer}>
      <TInput {...rest} ref={ref} />
      {children}
      {loading && <ActivityIndicator size={25} color={colors.primary.green} />}
    </Container>
  )
}

export default forwardRef(TextInput)
