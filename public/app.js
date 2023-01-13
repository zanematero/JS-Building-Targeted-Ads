// get user's data
// Get the user's coordinates:                                                              
function getCoords(){
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}

console.log(getCoords());

// get user's time
// Get the user's time:                                                              
function userTime(){
    const now = new Date()
    return now.getHours()
}
console.log(userTime())                             

function getMealTime(){
    const tod = userTime()
    if (tod > 20) {return 'late-night snack'}
    else if (tod > 16) {return 'dinner'}
    else if (tod > 11) {return 'lunch'}
    else {return 'breakfast'}
}
    
  console.log(getMealTime())                   

// helper functions
// check time of day

// build ads
// Build Ad 1:                                                           
function buildAd1(){
    const mealTime = getMealTime()
    let content = document.querySelector('.ad1')
    let inner = document.createElement('p')
    inner.innerHTML = `We've got the best <span>${mealTime}</span> in town`
    content.append(inner)
}

// Build Ad 2                                                             
function buildAd2(coordinates){
    const coords = coordinates
    const href = `https://www.google.com/maps/search/coffee/@${coords[0]},${coords[1]},15z/`
    let content = document.querySelector('.ad2')
    let inner = document.createElement('p')
    inner.innerHTML = `It's time to try our coffee! <span><a href="${href}" target="_blank">We're this close!</a></span>`
    content.append(inner)
}

// console.log(buildAd2(getCoords()))

// event listeners
// On load, build ads:                                                             
window.onload = async () => {
    buildAd1()
    const coords = await getCoords()
    buildAd2(coords)
}
