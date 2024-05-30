import drawLines from "./drawing-lines";
import {lines} from "./drawing-lines";

let lastButtonClicked = "";

const ClickHandle = (event) => {
    const button = event.target;
    const buttonId = button.id;
    const buttonRect = button.getBoundingClientRect();
    const buttonMidX = buttonRect.left + buttonRect.width / 2;
    const buttonMidY = buttonRect.top + buttonRect.height / 2;
  
    if (buttonId === "1") {
      if (!lastButtonClicked || lastButtonClicked === "2") {
        lines.push({ start: { x: buttonMidX, y: buttonMidY }, end: null });
        lastButtonClicked = "1";
        console.log(`Button 1 was clicked at x: ${buttonMidX}, y: ${buttonMidY}`);
      } else {
        window.alert("Already matched/Choose another option");
      }
    } else if (buttonId === "2") {
      if (!lastButtonClicked || lastButtonClicked === "1") {
        lines.push({ start: { x: buttonMidX, y: buttonMidY }, end: null });
        lastButtonClicked = "2";
        console.log(`Button 2 was clicked at x: ${buttonMidX}, y: ${buttonMidY}`);
      } else {
        window.alert("Already Matched/Choose another option");
      }
    } else if (buttonId === "3") {
      if (lastButtonClicked === "2" && lines.length > 0 && lines[lines.length - 1].end === null) {
        lines[lines.length - 1].end = { x: buttonMidX, y: buttonMidY };
        drawLines();
      } else {
        window.alert("Incorrect Option");
      }
    } else if (buttonId === "4") {
      if (lastButtonClicked === "1" && lines.length > 0 && lines[lines.length - 1].end === null) {
        lines[lines.length - 1].end = { x: buttonMidX, y: buttonMidY };
        drawLines();
      } else {
        window.alert("Incorrect Option");
      }
    }
  }
  
export default ClickHandle;
  
