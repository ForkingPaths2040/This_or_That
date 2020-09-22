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
async function getData(div, div2, arr) {
  try {
    const res = await axios({
      method: 'get',
      url: 'https://developers.zomato.com/api/v2.1/search?entity_id=278&entity_type=city&count=20&collection_id=1',
      headers: {
        'user-key': 'd2595947349326ccfb5c1ce5e27e77b2'
      }
    });

    // VARIABLES
    const response = res.data.restaurants
    // console.log(response)
    let first10 = response.slice(0, 10)
    let randomFirst10 = first10[Math.floor(Math.random() * first10.length)]
    let last10 = response.slice(10)
    let randomLast10 = last10[Math.floor(Math.random() * last10.length)]
    const leftBox = document.querySelector('#left')
    const rightBox = document.querySelector('#right')
    const leftListBox = document.querySelector('#leftListBox')
    const rightListBox = document.querySelector('#rightListBox')

    // NAME OF RESTAURANT
    let name = document.createElement('h3')
    name.textContent = `${arr.restaurant.name}`
    div.appendChild(name)
    // IMG OF RESTAURANT
    let image = document.createElement('img')
    image.src = arr.restaurant.featured_image
    div.appendChild(image)
    // CUISINE TYPE
    let cuisine = document.createElement('li')
    cuisine.innerHTML = `Cuisine : ${arr.restaurant.cuisines}`
    div2.appendChild(cuisine)
    // AVERAGE COST OF 2
    let cost = document.createElement('li')
    cost.innerHTML = `Average cost for 2: ${arr.restaurant.average_cost_for_two}`
    div2.appendChild(cost)
    // HOURS OF OPERATION
    let timings = document.createElement('li')
    timings.innerHTML = `Hours : ${arr.restaurant.timings}`
    div2.appendChild(timings)



  } catch (err) {
    console.error(err)
  }
}

// AFTER EVENT LISTENER, THIS WOULD BE FUNCTION FOR 'THIS' BUTTON
getData(rightBox, rightListBox, randomLast10)

// AFTER EVENT LISTENER, THIS WOULD BE FUNCTION FOR 'THAT' BUTTON
getData(leftBox, leftListBox, randomFirst10)



