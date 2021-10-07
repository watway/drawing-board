# Redwood

## Blog
[Building a Drawing Board with Redwood](https://dev.to/flippedcoding/building-a-drawing-board-with-redwood-4j7f)
- Uses Postgres database (https://railway.app)
- Uses Fabric for the canvas drawing

### Commands Used
- Setup Redwood app: `yarn create redwood-app drawing-board`
- Run the db migration: `yarn rw prisma migrate dev`
- Create GraphQL: `yarn rw g sdl capture`
- Create page: `yarn rw g page capture /`
- Show site: `yarn rw dev`
- Site: http://localhost:8910
- GraphQL: http://localhost:8911/graphql

### Deployment
- yarn rw setup deploy netlify

> **NOTICE:** RedwoodJS is very close to a stable version 1.0. In the last two years,
> the project has matured significantly and is already used in production by a number
> of startups. We intend to have a 1.0 release candidate before the end of 2021 and
> to release a truly production-ready 1.0 in early 2022.

## Getting Started
- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.
