# Appointments

A simple app for displaying appointments for a clinic

![App](images/app.png?raw=true)

## How to run

In the project directory, you can run:

```
npm start
```

Visit: http://localhost:3000/schedules/1?employees=5%2C6

## Known Issues

There's a known issue where if you select a new clinic, add employees, and then select a different clinic, the page will error out. This is because the search params are updated when a new employee is selected (example: http://localhost:3000/schedules/3?employees=4%2C5) and the employee IDs aren't available for a different clinic. TODO: clear employee ids on clinic change.