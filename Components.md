# Data layer

## Data

- The weather from Weatherapi :

  - Name of the city
  - Time
  - Cº
  - Description
  - Image URL

# Components

## App

### Show data

- Header component
- When on home page:
  - A Filter component for search a city weather
- When on Weather details page:
  - The Detail component with the specific weather in the searched city
- When page not found:
  - An Error404 component

## Header

### Show data

- Title of the page

## Button

### Show data

- Show a Button with the received text inside

### Get Action

- Call the received function

## Detail

### Show data

- Name of the city
- ID
- Cº
- Description
- Image URL

## Search Bar

### Show data

- A form with one input type text with the label "Search city"
- A Button component

### Get actions

- When the form is submitted check the input have the correct data
- When the data is correct show the weathers city

## Error404

### Show data

- A not found image
- A Not Found text

## Loading

### Show data

- A loading icon
