// Tool Functions

module.exports.isWithinHour = function(reqTime) {
  let current = Math.floor(new Date() / 1000);
  if (reqTime + 3600 > current && reqTime - 3600 < current) {
    return true;
  }
  return false;
}

module.exports.currentTimeUnix = function() {
  return Math.floor(new Date() / 1000);
}

module.exports.currentTimeUnixZeroed = function() {
  // Zero houred local time
  var time = new Date(Date.now());
  time.setMinutes(0);
  time.setSeconds(0);
  time.setMilliseconds(0);
  return time.getTime() / 1000;
}

module.exports.json = function(json_) {
  try {
  let json = JSON.parse(JSON.stringify(json_));
  return json;
} catch(err) {
  return {"error": `could not parse: ${err}`};
}

}
