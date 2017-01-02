let inputs = [
  ['0,0 2,2','1,1 3,3'],  
  ['-3.5,4 1,1', '1,3.5 -2.5,-1'],
  ['-4,4 -0.5,2', '0.5,1 3.5,3']
];

function getOverlappingArea(input) {
  let formattedInput = input.map(
    coords => coords
      .split(' ')
      .map(coord => coord.split(','))
  );
  
  let minX = Math.min(
    Math.max(formattedInput[0][0][0],formattedInput[0][1][0]),
    Math.min(formattedInput[1][0][0], formattedInput[1][1][0])
  );

  let maxX = Math.min(
    Math.max(formattedInput[0][0][0],formattedInput[0][1][0]),
    Math.max(formattedInput[1][0][0], formattedInput[1][1][0])
  );

  let minY = Math.max(
    Math.min(formattedInput[0][0][1],formattedInput[0][1][1]),
    Math.min(formattedInput[1][0][1], formattedInput[1][1][1])
  );

  let maxY = Math.min(
    Math.max(formattedInput[0][0][1],formattedInput[0][1][1]), 
    Math.max(formattedInput[1][0][1], formattedInput[1][1][1])
  );

  return (maxX - minX) * (maxY - minY);
}

let output = inputs.map(getOverlappingArea);
