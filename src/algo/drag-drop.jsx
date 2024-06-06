import React, { useState, useRef } from 'react';
import Xarrow from 'react-xarrows';

const connectPointOffset = {
  left: { left: 0, top: '50%', transform: 'translate(-50%, -50%)' },
  right: { left: '100%', top: '50%', transform: 'translate(-50%, -50%)' },
  top: { left: '50%', top: 0, transform: 'translate(-50%, -50%)' },
  bottom: { left: '50%', top: '100%', transform: 'translate(-50%, -50%)' },
};

const ConnectPointsWrapper = ({ boxId, handler, ref0, connectPointStyle, connectPointClass }) => {
  const ref1 = useRef();
  const [position, setPosition] = useState({});
  const [beingDragged, setBeingDragged] = useState(false);

  return (
    <React.Fragment>
      <div
        className={`connectPoint ${connectPointClass}`}
        style={{
          ...connectPointStyle,
          ...connectPointOffset[handler],
          ...position,
        }}
        draggable
        onDragStart={(e) => {
          setBeingDragged(true);
          e.dataTransfer.setData('arrow', boxId);
        }}
        onDrag={(e) => {
          setPosition({
            position: 'fixed',
            left: e.clientX,
            top: e.clientY,
            transform: 'none',
            opacity: 0,
          });
        }}
        ref={ref1}
        onDragEnd={(e) => {
          setPosition({});
          setBeingDragged(false);
        }}
      />
      {beingDragged ? <Xarrow start={ref0} end={ref1} /> : null}
    </React.Fragment>
  );
};

const Box = ({ text, handler, addArrow, boxId, connectPointStyle, connectPointClass }) => {
  const ref0 = useRef();

  return (
    <div
      id={boxId}
      ref={ref0}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        const startId = e.dataTransfer.getData('arrow');
        if (startId && startId !== boxId) {
          const refs = { start: startId, end: boxId };
          addArrow(refs);
        }
      }}
    >
      {text}
      <ConnectPointsWrapper {...{ boxId, handler, ref0, connectPointStyle, connectPointClass }} />
    </div>
  );
};

export default Box;
