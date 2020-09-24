// POST MVP 2


// FUNCTION THAT WILL GET RESTAURANT OBJECTS AND APPEND TO DOM
// ARGUMENTS: WHICH DIV CONTAINER AND WHICH DATA ARRAY TO USE
let side = null
let response
let image

async function getData() {
  try {
    const res = await axios({
      method: 'get',
      url: 'https://developers.zomato.com/api/v2.1/search?entity_id=278&entity_type=city&count=20&collection_id=1',
      headers: {
        'user-key': 'd2595947349326ccfb5c1ce5e27e77b2'
        //   'user-key': '1a8f0e43e1498520ad37f2b7b29ee3af'
      }
    });
    // STORED GET RESPONSE
    response = res.data.restaurants.splice(0, 17)

    // console.log(response)

    // CALL FUNCTION TO PASS RESPONSE DATA
    grabPortion(response)
    buttons()


  } catch (err) {
    console.error(err)
  }
}


// GRABBING EITHER FIRST OR LAST RESTAURANT FROM ARRAY WITH CONDITIONS TO SEE WHICH DIV CONTAINER IT'S GOING TO
function grabPortion(data, side) {
  let leftRestaurant = data.shift()
  // console.log(leftRestaurant)
  let rightRestaurant = data.pop()
  if (leftRestaurant && rightRestaurant) {
    if (side === 'left') {
      removeRestaurant('left')
      renderRestaurant(leftRestaurant, 'left')

    } else if (side === 'right') {
      removeRestaurant('right')
      renderRestaurant(rightRestaurant, 'right')

    } else {
      renderRestaurant(leftRestaurant, 'left')
      renderRestaurant(rightRestaurant, 'right')
    }
  } else {
    if (side = 'left') {
      removeRestaurant('left')

      alert(`By process of elimination, ${leftRestaurant.name} is your destination for today!`)
    } else if (side = 'right') {
      removeRestaurant('right')
      renderRestaurant(rightRestaurant, 'right')
      alert(`By process of elimination, ${rightRestaurant.name} is your destination for today!`)
    } else {
      alert('There no other restaurants to review')
    }

  }

}




// BUTTONS- WHEN 'THIS' IS PRESSED, RIGHT DIV REMOVES AND POPULATES NEXT RENDERRESTAURANT  
function buttons() {
  let thisButton = document.querySelector('#leftThis')
  if (thisButton) {
    thisButton.addEventListener('click', () => {
      grabPortion(response, 'right')
    })
  }

  let thatButton = document.querySelector('#rightThat')
  if (thatButton) {
    thatButton.addEventListener('click', () => {
      grabPortion(response, 'left')
    })
  }
}



// FUNCTION THAT TAKES CAPTURED DATA FROM STORED VARIABLE AND APPENDS TO DOM
function renderRestaurant(restaurant, side = null) {
  let box = document.querySelector(`#${side}`)
  // let box = document.querySelector(`.box`)

  // NAME OF RESTAURANT
  let name = document.createElement('h3')
  name.textContent = `${restaurant.restaurant.name}`
  box.appendChild(name)
  // IMG OF RESTAURANT
  let image = document.createElement('img')
  if (restaurant.restaurant.featured_image) {
    image.src = restaurant.restaurant.featured_image
  } else {
    image.src = "/Users/hub/Desktop/General_Assembly/projects/project-Unit_1/This_or_That/noimage.png"
  }
  box.appendChild(image)

  // CUISINES
  let cuisines = document.createElement('li')
  cuisines.className = 'items'
  cuisines.innerHTML = `Cuisines: ${restaurant.restaurant.cuisines}`
  box.appendChild(cuisines)
  // AVERAGE COST OF 2
  let price = document.createElement('li')
  price.className = 'items'
  price.innerHTML = `The average price for two: $${restaurant.restaurant.average_cost_for_two}`
  box.appendChild(price)
  // TIMINGS
  let timings = document.createElement('li')
  timings.className = 'items'
  timings.innerHTML = `Hours: ${restaurant.restaurant.timings}`
  box.appendChild(timings)

}

// FUNCTION REMOVES RENDER RESTAURANT 
function removeRestaurant(side) {
  const removeDiv = document.querySelector(`#${side}`)
  while (removeDiv.lastChild) {
    removeDiv.removeChild(removeDiv.lastChild)
  }
}


getData()




