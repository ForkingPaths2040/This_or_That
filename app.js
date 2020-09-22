// Need to know Austin city_id = 278
// grab the city id
// that chains to another url request (establishments?)
// returns two results
// remove one result based of a button action
// re-generate the establishment url request but to only return one result
// no longer pulls request after 10 decisions
// once the 10 decision has been hit-last decision will be shown

// FUNCTION THAT WILL GET RESTAURANT OBJECTS AND APPEND TO DOM
// ARGUMENTS: WHICH DIV CONTAINER AND WHICH DATA ARRAY TO USE
async function getData() {
  try {
    const res = await axios({
      method: 'get',
      url: 'https://developers.zomato.com/api/v2.1/search?entity_id=278&entity_type=city&count=20&collection_id=1',
      headers: {
        'user-key': 'd2595947349326ccfb5c1ce5e27e77b2'
      }
    });
    // STORED GET RESPONSE
    const response = res.data.restaurants
    console.log(response)
    // CALL FUNCTION TO PASS RESPONSE DATA
    grabPortion(response)

  } catch (err) {
    console.error(err)
  }
}
let thisButton = document.querySelector('#leftThis')
thisButton.addEventListener('click', grabPortion(data, 'right'))

let thatButton = document.querySelector('#rightThat')
thatButton.addEventListener('click', grabPortion(data, 'left'))



// FUNCTION TO GRAB A PORTION OF 'RESPONSE' WHILE ALSO CALLING RENDERDATA
function grabPortion(data, side) {
  let leftRestaurant = data.shift()
  let rightRestaurant = data.pop()
  if ((data === leftRestaurant) && (side === 'left')) {
    renderRestaurant(leftRestaurant, 'left')
  } else if ((data === rightRestaurant) && (side === 'right')) {
    renderRestaurant(rightRestaurant, 'right')
  } else if (((data === leftRestaurant) || (data === rightRestaurant)) && (side === null)) {
    renderRestaurant(leftRestaurant, 'left')
    renderRestaurant(rightRestaurant, 'right')
  }

}

// FUNCTION THAT TAKES CAPTURED DATA FROM STORED VARIABLE AND APPENDS TO DOM
function renderRestaurant(restaurant, side) {
  let box = document.querySelector(`#${side}`)

  // NAME OF RESTAURANT
  let name = document.createElement('h3')
  name.textContent = `${restaurant.restaurant.name}`
  box.appendChild(name)
  // IMG OF RESTAURANT
  let image = document.createElement('img')
  image.src = restaurant.restaurant.featured_image
  box.appendChild(image)

  // CUISINE TYPE
  let cuisine = document.createElement('li')
  cuisine.innerHTML = `Cuisine : ${restaurant.restaurant.cuisines}`
  box.appendChild(cuisine)
  // AVERAGE COST OF 2
  let cost = document.createElement('li')
  cost.innerHTML = `Average cost for two: $${restaurant.restaurant.average_cost_for_two}`
  box.appendChild(cost)
  // HOURS OF OPERATION
  let timings = document.createElement('li')
  timings.innerHTML = `Hours : ${restaurant.restaurant.timings}`
  box.appendChild(timings)
}

// AFTER EVENT LISTENER, THIS WOULD BE FUNCTION FOR 'THIS' BUTTON
getData()

// AFTER EVENT LISTENER, THIS WOULD BE FUNCTION FOR 'THAT' BUTTON
// getData()



