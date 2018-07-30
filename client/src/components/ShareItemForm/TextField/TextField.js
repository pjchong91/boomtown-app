//From React Final Form Sandbox Example: https://codesandbox.io/s/2z5y03y81r
import React from 'react'
import TextField from '@material-ui/core/TextField'

export default ({
  input: { name, onChange, value, ...restInput },
  meta,
  ...rest
}) => (
  <TextField
    helperText={meta.touched ? meta.error : undefined}
    error={meta.error && meta.touched}
    {...rest}
    name={name}
    inputProps={restInput}
    onChange={onChange}
    value={value}
  />
)
