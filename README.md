# About opensky_flight_dashboard

This project is a flight information dashboard project built using OpenSky APIs. It is a React JS project built as a Hamoye assessment for a Junior React JS developer role.

> The project consist of an admin login for gaining access into the main dashboard where flight details for different airports will be displayed.

> It is built with React JS and other cool front end web development tools. See the complete build-tools list below.

## Project site

This project is hosted live on netlify. Click on the link below to see it live.
https://my-opensky-project.netlify.app

## Project stack/Build tools

1. React JS
2. SCSS
3. Bootstrap 5
4. Gulp.Js (for compiling SCSS)
5. Google fonts
6. OpenSky flight-related APIs.

## Dashboard login credentioals.

The project consist of an admin login through which you can gain access to the main flight dashboard. 
Here are the login credentials to gain access.
1. Username: hamoye (case sensitive)
2. password: 426693

## Some screenshots from the project.

![Project screenshot](./opensky-flight-dashboard/src/assets/images/admin-login.png)
![Project screenshot](./opensky-flight-dashboard/src/assets/images/admin-login-mobile.png)
![Project screenshot](./opensky-flight-dashboard/src/assets/images/admin-login-ipad.png)

# Task report:

## Approach taken:

    1. Build fully responsive user interface for the landing (admin login) page.
    2. Build fully responsive user interface for the flight dashboard.
    3. Apply algorithm as shown in the pseudo code below, to automate all processes (validation, fetching data, et cetera)

## Pseudocode:

    • Admin Login
    1. Browser loads the landing (admin login) page.
    2. Validate access to flight dashboard.

    • Main Flight Dashboard
    1. Grant access to flight dashboard if login credentials are correct.

      Fetching Data with APIs

      Select a unique time and date for flights assessment.
      1. Get/Fetch list of all airports using available API.
      2. Add collection of all available airports (airport codes) to the airports column on dashboard.
      3. Use the unique/individual airport codes to automate API link and get all arriving flights for each airport.

        e.g  const arrivalsUrl = `https://opensky-network.org/api/flights/arrival?airport=$		{each.estArrivalAirport}&begin=1517227200&end=1517230800`;

        {each.estArrivalAirport} = unique airport code

        Check array length, then add returned array length as number of arriving flights for each airport in the respective cells for arriving flights.
      4.Use the unique/individual airport codes to automate API link and get all departing flights for each airport. Just like for arriving flights above.
       Check array length, then add returned array length as number of departing flights for each airport in the respective cells for departing flights.

## Issues Encountered:

    I don’t know if the Hamoye assessment team knew this - the available APIs were not perfectly complete for delivering/ executing the task.
    1. There was no API for fetching list of all airports.
    2. There was no API for fetching number of arriving and departing flights for each airport.
    This neccesitated the use of the above pseudo code which was a relatively complex algorithm, instead of simply fetching all the required data (name of airport, time of flight, number of arriving flights, and number of departing flights) from one single API with all the required data grouped into an array with the required number of objects.

## Task delivery:

    I did my best with regards to delivering the task:
    1. Since there was no API for fetching all available airports, I used the "Flights in Time Interval" API to fetch the list of all flights for my selected date and time (12pm to 1pm on Jan 29 2018), and I used the list of destination airports (airport codes – i.e the estArrivalAirport value) on the API as my list of all airports.
    2. I did my best to complete the task by fetching numberof arriving and departing flights for each airport by using the above algorithm, I was still getting bugs and couldn’t complete the task Because of time constraint.
