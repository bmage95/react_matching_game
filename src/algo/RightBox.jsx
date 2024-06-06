import React from 'react';
import Box from './drag-drop';
import '../App.css';

const RconnectPointStyle = {
  position: 'absolute',
  width: 40,
  height: 40,
  borderRadius: '50%',
  background: 'black',
};

const RightBox = ({ text, handler, addArrow, boxId }) => (
  <Box
    text={text}
    handler={handler}
    addArrow={addArrow}
    boxId={boxId}
    connectPointStyle={RconnectPointStyle}
    connectPointClass="inside_button"
  />
);

export default RightBox;
