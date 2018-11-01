document.getElementById('input').addEventListener('keyup', readInput);

function readInput(event) {

  document.getElementById('output').innerHTML = parseLine();
}

function parseLine() {
  let line = document.getElementById("input").value;
  let formattedLine= '';

  console.log(line);

  if (line[0] === '#') {
    formattedLine = parseHeader(line);
  } else {
    formattedLine = line;
  }

  return formattedLine;
}

function parseHeader(line) {
  let headerSize = 0;

  for (let i = 0; i < line.length; i++) {
    if (line[i] === '#') {
      headerSize++;
    }
  }

  return `<h${headerSize}>${line.substring(1, line.length)}</${headerSize}>`;
}