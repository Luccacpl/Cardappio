import React from 'react';

import CustomButtom from './style'

interface IButton {
  width?: string
  margin?: string
  content?: string
  style?: Object
  clicked?: any
  fontWeight?: string
  padding?: string
}

const Button = (props: IButton) => {
  return (
    <CustomButtom
      {...props}
      onClick={props.clicked}
      style={
        {
          width: '73.5%',
          border: '1px solid #888888',
          borderRadius: '5px',
          outline: 'none',
          maxHeight: '50px',
          cursor: 'pointer',
        }
      }
    >
      {props.content}
    </CustomButtom>
  )
}


export default Button;