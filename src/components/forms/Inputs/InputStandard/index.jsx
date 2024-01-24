import React, { forwardRef } from 'react'

export const InputStandard = forwardRef(({ label, error, ...rest }, ref) => (
  <div>
    <label>{label}</label>
    <input ref={ref} {...rest} />
    {error ? <p>{error.message}</p> : null}
  </div>

))
