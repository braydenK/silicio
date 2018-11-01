document.getElementById('input').addEventListener('keyup', readInput);

function readInput(event) {
  document.getElementById('output').innerHTML = parseLine();
}

function parseLine() {
  let line = document.getElementById("input").value;
  let formattedLine= '';

  if (line[0] === '#') {
    formattedLine = parseHeader(line);
  } else if (line[0] === '-') {
    formattedLine = parseUnorderedList(line);
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
    } else {
      break;
    }
  }

  return `<h${headerSize}>${line.substring(1, line.length)}</${headerSize}>`;
}

// TODO: Very broken.
function parseEmphasis(line) {
  let emphasisSize;
  let startIndex;
  let endIndex;
  let formattedString;

  for (let i = 0; i < line.length; i++) {
    if (line[i] === '*' && line[i+1] === '*') {
      emphasisSize = 2;
      if (startIndex === null) {
        startIndex = i+emphasisSize;
        i++;
      } else {
        endIndex = i;
      }
    } else if (line[i] === '*') {
      emphasisSize = 1;
      if (startIndex === null) {
        startIndex = i + emphasisSize;
        i++;
      } else {
        endIndex = i;
      }
    }
  }

  if (emphasisSize == 2) {
    return `<b>${line.substring(startIndex, endIndex)}</b>`;
  } else {
    return `<em>${line.substring(startIndex, endIndex)}</em>`;
  }
}

function parseUnorderedList(line) {
  return `<li>${line.substring(1, line.length)}</li>`;
}