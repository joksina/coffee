//conditional

alert('High Caffeine Level') if caffeineLevel > 5

if caffeineLevel > 5 then alert 'Too High' else alert 'OK'

# if(!coffeeReady){
#   alert('Please wait 5 more minutes.')
# }

alert "Please wait 5 more minutes." unless coffeeReady

//Chained Comparisons
if lowLevel < newLevel && newLevel < highLevel
  alert 'ok'
else
  alert 'abnormal caffeine level'

//another implementation
if lowlevel < newLevel < highlevel then alert "ok" else
    alert "abnormal caffeine level"

//Switch case
// # if (newLevel === 1) {
// #   message = 'Out of bed yet?';
// # } else if (newLevel === 2) {
// #   message = 'Good morning!';
// # } else {
// #   message = 'You should stop while you can';
// # }

message = switch newLevel
 when 1 then 'Out of bed yet?'
 when 2 then 'Good morning!'
 else 'You should stop while you can'

// Extential Operator
// # if (typeof newLevel !== "undefined" && newLevel !== null){
// #   checkLevel(newLevel);
// # } else {
// #   resetLevel();
// # }

if newLevel? then checkLevel(newLevel) else resetLevel()


//Existential Operator
if (typeof level !== "undefined" && level !== null) {
  if (typeof checkLevel === "function") {
    checkLevel(level);
  }
} else {
  if (typeof resetLevel === "function") {
    resetLevel();
  }
}
//equivalent
if level?
  checkLevel?(level)
else
  resetLevel?()

