function shout(foo) {
  return foo.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout(string)) 
}

function logWhisper(string) {
  console.log(whisper(string))
}