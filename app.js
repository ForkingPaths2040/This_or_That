// Need to capture the city search
// grab the city id
// that chains to another url request (establishments?)
// returns two results
// remove one result based of a button action
// re-generate the establishment url request but to only return one result
// no longer pulls request after 10 decisions
// once the 10 decision has been hit-last decision will be shown

// url for searching your city
// `https://developers.zomato.com/api/v2.1/cities?q=${city}`

// url for returning establishments
// `https://developers.zomato.com/api/v2.1/establishments?city_id=${cityId}`


async function getList(cityId) {
  const url = 'https://developers.zomato.com/api/v2.1/establishments?city_id=278&user-key=d2595947349326ccfb5c1ce5e27e77b2'
  try {
    const response = await axios.get(url)
    console.log(response)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
getList(278)



