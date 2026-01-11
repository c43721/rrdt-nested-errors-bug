# React Router DevTools Bug

This is a demonstration of <https://github.com/forge-42/react-router-devtools/issues/245>

## Setup

- Clone the repo
- Run `npm i`
- Run `npm run dev`

# Reproduction Steps

- Create a RR7 project
- Add RRDT
- Create a layout route with a child that has an error boundary
- Go to that route
- Observe that the route errors after loading it
