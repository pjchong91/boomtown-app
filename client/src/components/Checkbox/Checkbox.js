//Code for Checkbox from : https://codesandbox.io/s/2z5y03y81r
import React from 'react'
import Checkbox from "@material-ui/core/Checkbox";

export default ({
  input: { checked, name, onChange, ...restInput },
  meta,
  ...rest
}) => (
  <Checkbox
    {...rest}
    name={name}
    InputProps={restInput}
    onChange={onChange}
    checked={!!checked}
  />
)
