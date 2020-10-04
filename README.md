Hey!

Thanks for the opportunity to show my skills.
To launch the project you'll need to do a few steps:
1. Clone the project from Github to your IDE, using this URL `https://github.com/Sapvier/Weather-app.git`
2. Install all the dependencies by executing `npm install` then launch the project by executing the command `npm start` in the terminal (You should be in the directory where the project stored).
3. The project will open in your browser and now you can test all the features that were requested in the task.


Project description:

Initially there will be no cards shown on the page. To add the city for its current weather to be shown a user should submit a city name to the form.
If a user enters an incorrect city name (e.g. London1), an alert will be shown saying that the requested city doesn't exist. Otherwise, a card with the current town weather will be shown.(The city name will be stored in townsReducer state, requested data will be stored in cardsReducer state)

A user can also get the detailed forecast for that city, by clicking `DETAILED FORECAST` on the card, a new page will be opened (React-Router used) with the weather forecast.
Unfortunately, I didn't implement the hourly temperature forecast block, as I couldn't figure out how to parse the time to link it to the temperature. All other features have been implemented.
By clicking the button with an arrow a user will be redirected back to the homepage. Previously requested cities will be shown. 

As the requested cities stored in localStorage of the browser, the cities will be shown even if the page reloaded. (Accessed as preloadedState by using Redux)
Also a user can remove the added city (card) by clicking at `×` icon. Such action will also remove the city from the localStorage.

MaterializeCSS was used for styling.
