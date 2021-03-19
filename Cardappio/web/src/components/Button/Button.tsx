import React from 'react';

import CustomButtom from './style'

interface IButton {
  width?: string
  height?: string
  margin?: string
  content?: string
  style?: Object
  clicked?: any
  fontWeight?: string
  padding?: string
  marginTop?: string
}

const Button = (props: IButton) => {
  return (
    <CustomButtom
      {...props}
      onClick={props.clicked}
      type="submit"
    >
      {props.content}
    </CustomButtom>
  )
}


export default Button;