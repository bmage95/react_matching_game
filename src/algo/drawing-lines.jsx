let lines = [];                                                       //no of lines drawn
let currentLine = null;                                               //line being drawn currently
const tableContainer = document.querySelector('.table-container');    //boundary conditions

const drawLines = () => {
    const canvas = document.getElementById("canvas");
    const tableContainer = document.querySelector('.table-container');  
    canvas.width = tableContainer.offsetWidth;
    canvas.height = tableContainer.offsetHeight;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    lines.forEach(line => {
      if (line.start && line.end) {
        ctx.beginPath();
        ctx.moveTo(line.start.x - tableContainer.offsetLeft, line.start.y - tableContainer.offsetTop);
        ctx.lineTo(line.end.x - tableContainer.offsetLeft, line.end.y - tableContainer.offsetTop);
        ctx.stroke();
      }
    });

    if (currentLine && currentLine.start) {
      ctx.beginPath();
      ctx.moveTo(currentLine.start.x - tableContainer.offsetLeft, currentLine.start.y - tableContainer.offsetTop);
      ctx.lineTo(currentLine.end.x - tableContainer.offsetLeft, currentLine.end.y - tableContainer.offsetTop);
      ctx.stroke();
    }
}

export default drawLines;
export { lines, currentLine, tableContainer };