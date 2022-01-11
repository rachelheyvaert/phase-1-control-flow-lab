function scuberGreetingForFeet(depth) {
  // Write your code here!
  if (depth <= 400) {
    return 'This one is on me!'
} if (depth >= 2001) { //Why not passing??
  return 'I will gladly take your thirty bucks.'
} else if (depth > 2501) { //Why not passing??
  return 'No can do.'
}
}

function ternaryCheckCity(city) {
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}
ternaryCheckCity('NYC');

function switchOnCharmFromTip(tip) {
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}