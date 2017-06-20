import React from 'react';

import {Glyphicon} from 'react-bootstrap';

const STATUS_IMAGE = {
  'good': {color: 'success', icon:'ok'},
  'warning': {color: 'warning', icon:'minus'},
  'bad' : {color: 'danger', icon:'remove'}
};

export default ({toolname, message, status}) => {
  return (
    <tr className={STATUS_IMAGE[status].color}>
      <td><Glyphicon glyph={STATUS_IMAGE[status].icon}/></td>
      <td>{toolname}</td>
      <td>{message}</td>
    </tr>
  )
}
