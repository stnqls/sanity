import React, {useCallback} from 'react'
import {Stack, Text, TextInput} from '@sanity/ui'
import AceEditor from 'react-ace'
import {StringInputProps, set, unset} from 'sanity'

import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/mode-javascript'

const CodeInput = (props: StringInputProps) => {
  const {onChange, value = '', elementProps} = props

  // const handleChange = useCallback(
  //   (event) => onChange(event.currentTarget.value ? set(event.currentTarget.value) : unset()),
  //   [onChange]
  // )

  function Change(newValue) {
    return newValue
  }

  return (
    <Stack space={3}>
      {/* <TextInput {...elementProps} onChange={handleChange} value={value} /> */}
      <AceEditor
        mode="javascript"
        name="ace-editor-code"
        width="100%"
        theme="github"
        style={{boxShadow: '0 0 0 1px #cad1dc', lineHeight: 1.6}}
        // value={value}
        onChange={Change}
        tabSize={2}
        setOptions={{useWorker: false}}
      />
      {/* <Text size={1}>Characters: {value?.length || 0}</Text> */}
    </Stack>
  )
}

export default CodeInput
