Project description:

By finding the city you can get the current weather shown on the card.

Initially there will be no cards shown on the page. To add the city for its current weather to be shown a user should submit a city name to the form.
If a user enters an incorrect city name (e.g. London1), an alert will be shown saying that the requested city doesn't exist. Otherwise, a card with the current town weather will be shown.(The city name will be stored in townsReducer state, requested data will be stored in cardsReducer state)

A user can also get the detailed forecast for that city, by clicking `DETAILED FORECAST` on the card, a new page will be opened (React-Router used) with the weather forecast.
By clicking the button with an arrow a user will be redirected back to the homepage. Previously requested cities will be shown. 

As the requested cities stored in localStorage of the browser, the cities will be shown even if the page reloaded. (Accessed as preloadedState by using Redux)
Also a user can remove the added city (card) by clicking at `×` icon. Such action will also remove the city from the localStorage.

MaterializeCSS was used for styling.
