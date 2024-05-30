let lines = [];


const drawLines = () => {
    const canvas = document.getElementById("canvas");
    const table = document.querySelector('table');
    canvas.width = table.offsetWidth;
    canvas.height = table.offsetHeight;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    lines.forEach(line => {
      if (line.start && line.end) {
        ctx.beginPath();
        ctx.moveTo(line.start.x, line.start.y);
        ctx.lineTo(line.end.x, line.end.y);
        ctx.stroke();
      }
    });
  }

export default drawLines;
export {lines};