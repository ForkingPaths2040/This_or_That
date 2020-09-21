// Need to know Austin city_id = 278
// grab the city id
// that chains to another url request (establishments?)
// returns two results
// remove one result based of a button action
// re-generate the establishment url request but to only return one result
// no longer pulls request after 10 decisions
// once the 10 decision has been hit-last decision will be shown



function start() {
  axios({
    method: 'get',
    url: 'https://developers.zomato.com/api/v2.1/search?entity_id=278&entity_type=city&count=2&collection_id=1',
    headers: {
      'user-key': 'd2595947349326ccfb5c1ce5e27e77b2'
    }
  })
    .then((res) => {
      console.log(res.data.restaurants)
      const response = res.data.restaurants
    }).catch((err) => {
      console.error(err)
    })
}








function getData() {
  axios({
    method: 'get',
    url: 'https://developers.zomato.com/api/v2.1/search?entity_id=278&entity_type=city&count=20&collection_id=1',
    headers: {
      'user-key': 'd2595947349326ccfb5c1ce5e27e77b2'
    }
  })
    .then((res) => {
      console.log(res.data.restaurants)
      const response = res.data.restaurants
      response.forEach((estab) => {
        const testingDiv = document.querySelector('.testing')
        const restaurantDiv = document.createElement('div')
        testingDiv.appendChild(restaurantDiv)

        const name = document.createElement('h3')
        const restName = estab.restaurant.name
        name.textContent = `${restName}`
        restaurantDiv.appendChild(name)
      })
    }).catch((err) => {
      console.error(err)
    })
}
// getData()

async function getData2() {
  try {
    const res = await axios({
      method: 'get',
      url: 'https://developers.zomato.com/api/v2.1/search?entity_id=278&entity_type=city&count=20&collection_id=1',
      headers: {
        'user-key': 'd2595947349326ccfb5c1ce5e27e77b2'
      }
    });

    console.log(res.data.restaurants)
    const response = res.data.restaurants
    response.forEach((estab) => {
      const testingDiv = document.querySelector('.testing')
      const restaurantDiv = document.createElement('div')
      testingDiv.appendChild(restaurantDiv)

      const name = document.createElement('h3')
      const restName = estab.restaurant.name
      name.textContent = `${restName}`
      restaurantDiv.appendChild(name)
    })
  } catch (err) {
    console.error(err)
  }
}
getData2()

