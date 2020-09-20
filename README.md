# This_or_That
Project 1 for GA's SEI 

## Project Description

The app will capture Zomato's API to retrieve restaurants by filtering through cuisine types. Two restaurants will be listed each time to help the user narrow down where they will decide to eat. They will pick either this or that. The previous decicison will remain until the next this or that knocks it out of the running. There will be a limited number of retievals so the user gets it's final decision quickly. 

## API and Data Sample

https://developers.zomato.com/api/v2.1/cuisines?city_id=278

{
  "cuisines": [
    {
      "cuisine": {
        "cuisine_id": 152,
        "cuisine_name": "African"
      }
    },
    {
      "cuisine": {
        "cuisine_id": 1,
        "cuisine_name": "American"
      }
    },
    {
      "cuisine": {
        "cuisine_id": 151,
        "cuisine_name": "Argentine"
      }
    },
    {
      "cuisine": {
        "cuisine_id": 3,
        "cuisine_name": "Asian"
      }
    }

## Wireframes



#### MVP 

- Create and build in HTML, CSS and Javascript
- Style using Flexbox or Grid 
- Use Axios to make a request to insert for dynamic webpage
- Responsive design for at least one other media query
- Deploy site to GitHub pages
- Make commits everyday

#### PostMVP  

- like button to save restaurants for later viewing
- dynamic mouseovers - let the user know whats clickable

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Sept 18-21| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Sept 21| Project Approval | Incomplete
|Sept 22| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Sept 23| MVP | Incomplete
|Sept 24| Post MVP/Styling | Incomplete
|Sept 25| Presentations | Incomplete

## Priority Matrix

Time and Priority Matrix.pdf 

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Skeleton of HTML | H | 1hr| N/A| N/A |
| Adding Location Input that pulls first get request | H | 3hrs| N/A | N/A |
| Returning two results from  initial get request | H | 3 hrs | N/A | N/A|
| Pushing captured "Img, Cuisine, Hours and Cost" to the DOM | H | 3 hrs | N/A | N/A |
| Ensuring "This or That"buttons function by keeping or removing added DOM elements | H | 3 hrs | N/A | N/A |
| Style elements | M | 3 hrs | N/A | N/A |
| Total | H | 16hrs| N/A | N/A |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.
