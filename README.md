# This_or_That
Project 1 for GA's SEI 

## Project Description

The app will capture Zomato's API to retrieve restaurants by filtering through location. Two restaurants will be listed each time to help the user narrow down where they will decide to eat. They will pick either this or that. The previous decicison will remain until the next this or that knocks it out of the running. There will be a limited number of retievals so the user gets it's final decision quickly. 

## API and Data Sample

https://developers.zomato.com/api/v2.1/cities?q=Austin%2C%20TX

{
  "location_suggestions": [
    {
      "id": 278,
      "name": "Austin, TX",
      "country_id": 216,
      "country_name": "United States",
      "country_flag_url": "https://b.zmtcdn.com/images/countries/flags/country_216.png",
      "should_experiment_with": 0,
      "has_go_out_tab": 0,
      "discovery_enabled": 1,
      "has_new_ad_format": 0,
      "is_state": 0,
      "state_id": 111,
      "state_name": "Texas",
      "state_code": "TX"
    }
    
## Wireframes
![Wireframe Desktop](https://github.com/ForkingPaths2040/This_or_That/blob/master/Wireframe%20P1.png)

#### MVP 

- Create and build in HTML, CSS and Javascript
- Style using Flexbox or Grid 
- Use Axios to make a request to insert for dynamic webpage
- Responsive design for at least one other media query
- Deploy site to GitHub pages
- Make commits everyday

#### PostMVP  

- import a font
- dynamic mouseovers - let the user know whats clickable

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Sept 18-21| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Sept 21| Project Approval / Touch files / Implement AuthKey / Basic HTML | Incomplete
|Sept 22| Get Requests / Append to DOM | Incomplete
|Sept 23| Finish MVP list | Incomplete
|Sept 24| Post MVP/Styling | Incomplete
|Sept 25| Presentations | Incomplete

## Priority Matrix

![Priority Matrix](https://github.com/ForkingPaths2040/This_or_That/blob/master/Time%20and%20Priority%20Matrix%20(1).png)


## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Project setup | H | 0.5 hr | 0.5 hr | 0.5 hr |
| Skeleton of HTML | H | 1hr| | 0.5 hr | 1 hr|
| Implementing API Key| H |  0.5 hr | 2.5 hr | 4 hr |
| Change Log (1) | M  | 1hr | 1 hr | 5hr |
| Returning response from  initial get request and playing with data| H | 3 hrs | 3 hrs| 8 hrs|
| Whiteboarding | H | 0.75 hr | 2 hr | 9.5 hrs |
| Variables/ 2 functions / Pushing captured "Img, Cuisine, Hours and Cost" to the DOM | H | 3 hrs | 3 hrs | 12.5 hrs |
| Change log (2,3) | H |  0.5 hr | 4 hrs | 16.5 hrs |
| Ensuring "This or That" buttons function by keeping or removing added DOM elements | H | 3 hrs | 10 hrs | 26.5 hrs |
  | Chain method functions | 3 hrs |  
  | Expanding grabPortion function | 3 hrs |
  | If/Else logics | 3 hrs |   
  | Remove function | 1 hrs |   
| Style main elements | M | 3 hrs | 8 hrs | 34.5 hrs |
| Style mobile elements | H |  3 hrs | 3 hrs | 37.5 hrs |
| Troubleshooting and Research/Learn | H | 8 Hrs | 8 hrs| 45.5 hrs|
| Switching API and refactor dot notation- Change Log (3)| H | 0.5 hr |  2.5 hours | 47 hrs |
| Total | H | 16 hrs| 41.5 hrs | 47 hrs |

## Code Snippet

```
if (leftRestaurant || rightRestaurant) {
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
      // alert(`By process of elimination, ${rightRestaurant.name} is your destination for today!`)
    } else if (side = 'right') {
      removeRestaurant('right')
      // alert(`By process of elimination, ${leftRestaurant.name} is your destination for today!`)
    } else {
      alert('There are no other restaurants to review')
    }
  }
  ```



## Change Log
 1. Zomato API needed stacked info to pull restaurant info. Project was tailored to fit an Austin, TX user. Wireframe doesn't reflect this change.

2.  Zomato API was broken (maybe maintainance) switched to OpenTable API.

3.  OpenTable API was hosted through 3rd party that the version was outdated from original API.

4.  Some image urls don't exist in API, inserted a placeholding image instead.

5.  Footer was added to balance the design. Wireframe doesn't reflect change.



