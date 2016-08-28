function probability(dieSides, health) {
  let criticalHitProbability = 1/Math.pow(dieSides, Math.floor(health/dieSides));
  let rollProbabilty = health % dieSides > 1 ? 1-((health % dieSides-1)/dieSides) : 1;
  
  return criticalHitProbability * rollProbabilty;
}
