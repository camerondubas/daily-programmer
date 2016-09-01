function degrees(input) {
  let pairs = input.split('\n');
  let numNodes = parseInt(pairs.splice(0, 1)[0]);
  let results = []
  for (var i=0; i<numNodes; i++) {
    results.push('');
  }

  pairs.forEach(pair => pair.split(' ').forEach(num => results[parseInt(num)-1]++));
 
  return results.map((degrees, idx) => `Node ${idx + 1} has a degree of ${degrees}`).join('\n');
}
