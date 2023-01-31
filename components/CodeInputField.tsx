import React from 'react'
import {Card, Text} from '@sanity/ui'
import {StringFieldProps} from 'sanity'

function CodeInputField(props: StringFieldProps) {
  const {children, title, description, value = ''} = props
  return (
    <Card padding={2} tone={value?.length > 15 ? 'caution' : 'positive'} border>
      <Card paddingY={2}>
        <Text size={1} weight="semibold">
          {title}
        </Text>
      </Card>
      <Card paddingTop={1} paddingBottom={2}>
        <Text size={1} muted>
          {description}
        </Text>
      </Card>
      <Card>{children}</Card>
    </Card>
  )
}

export default CodeInputField
