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
let side = null
let response

async function getData() {
  try {
    const res = await axios({
      method: 'get',
      url: 'https://opentable.herokuapp.com/api/restaurants?city=Austin',
      // headers: {
      //   // 'user-key': 'd2595947349326ccfb5c1ce5e27e77b2'
      //   'user-key': '1a8f0e43e1498520ad37f2b7b29ee3af'
      // }
    });
    // STORED GET RESPONSE
    response = res.data.restaurants

    console.log(response)

    // CALL FUNCTION TO PASS RESPONSE DATA
    grabPortion(response)
    buttons()


  } catch (err) {
    console.error(err)
  }
}


// BEFORE RENDERRESTAURANT CODE IS SOLID -> PROGRESSING THROUGH CHECKING THE REST
function grabPortion(data, side) {
  let leftRestaurant = data.shift()
  // console.log(leftRestaurant)
  let rightRestaurant = data.pop()
  if (side === 'left') {
    renderRestaurant(leftRestaurant, 'left')
    // function remove ivoke
    removeRestaurant('left')
  } else if (side === 'right') {
    renderRestaurant(rightRestaurant, 'right')
    // function remove invoke
    removeRestaurant('right')
  } else {
    renderRestaurant(leftRestaurant, 'left')
    renderRestaurant(rightRestaurant, 'right')
  }
}





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
  name.textContent = `${restaurant.name}`
  box.appendChild(name)
  // IMG OF RESTAURANT
  let image = document.createElement('img')
  image.src = restaurant.image_url
  box.appendChild(image)

  // ADDRESS
  let address = document.createElement('li')
  address.innerHTML = `Address : ${restaurant.address}`
  box.appendChild(address)
  // AVERAGE COST OF 2
  let price = document.createElement('li')
  let howExpensive = restaurant.price
  price.innerHTML = `The average price : ${howExpensive}`
  // switch statement?
  switch (howExpensive) {
    case "1":
      howExpensive = '$';
      break;
    case "2":
      howExpensive = '$$';
      break;
    case "3":
      howExpensive = '$$$';
      break;
    case "4":
      howExpensive = '$$$$'
  }
  box.appendChild(price)
  // PHONE NUMBER
  let phone = document.createElement('li')
  phone.innerHTML = `Phone number : ${restaurant.phone}`
  box.appendChild(phone)

}

// FUNCTION REMOVES RENDER RESTAURANT 
function removeRestaurant(side) {
  const removeDiv = document.querySelector(`#${side}`)
  while (removeDiv.lastChild) {
    removeDiv.removeChild(removeDiv.lastChild)
  }
}

// AFTER EVENT LISTENER, THIS WOULD BE FUNCTION FOR 'THIS' BUTTON
getData()

// AFTER EVENT LISTENER, THIS WOULD BE FUNCTION FOR 'THAT' BUTTON
// getData()



