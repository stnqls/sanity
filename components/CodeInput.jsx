/* eslint-disable react/prop-types */
import React, {useCallback} from 'react'
import AceEditor from 'react-ace'
import {FormField, set, unset, PatchEvent} from 'sanity'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/mode-javascript'

const CodeInput = React.forwardRef((props, ref) => {
  const {value, markers, presence, compareValue, onChange} = props

  const codeChange = useCallback(
    (code) => {
      onChange(PatchEvent.from(code ? set(code) : unset()))
    },
    [onChange]
  )

  return (
    <FormField markers={markers} __unstable_presence={presence} compareValue={compareValue}>
      <AceEditor
        mode="javascript"
        name="ace-editor-code"
        width="100%"
        theme="github"
        style={{boxShadow: '0 0 0 1px #cad1dc', lineHeight: 1.6}}
        value={value}
        tabSize={2}
        setOptions={{useWorker: false}}
        ref={ref}
        onChange={codeChange}
      />
    </FormField>
  )
})
export default CodeInput
