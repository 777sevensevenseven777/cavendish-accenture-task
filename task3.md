# Frontend
## a) Tools, frameworks, npm libraries you plan to use and why
- Webpack or Snowpack for app bundling
- TypeScript for static type checking
- Styled Components or CSS modules for styling
- Redux or Mobx (or maybe just React Context) for managing global state
- React Router for in-app routing
- Jest as a testing suite
## b) Directory structure for source code folder
/tests  
/assets  
/styles  
/components  
/actions  
/views  

## c) List of components which you’ll implement (with short description)
- Layout/Wrapper - for common consistent app layout
- ListingPage - for displaying list of profiles
- ProfilePage - for displaying extended profile information
- ProfileThumbnail - for displaying each of the profiles on the list
- ProfilePicture - for displaying picture of the user
- ProfileInfo - for displaying user name and email
## d) For one of the components also provide in which directory/-ies component’s file/-es will be located
ProfilePage and ListingPage would be located in `/views` directory
## e) Benefits/drawbacks comparing with traditional (not-SPA) app approach  
Benefits of SPA:  
- better responsivity to user input (eg. no page reloads), thus better user experience
- page is rendered by the browser, so no dynamic server (with eg. Node, PHP or Python) is necessary to render the page, only static files can be served
- easier app debugging in the browser
  
Drawbacks of SPA:
- relatively more complicated build process caused by using abstraction layers, like eg. JS frameworks, TypeScript, CSS preprocessors
- more work is put on the browser than on the server
- SEO issues
- requires JS to ne enabled in clients browser
- user might wait longer for the first paint
## f) Any other comments and suggestions

# Backend
## a) Short description of API – URI, format, why needed
API would follow REST convention. API is needed for frontend to be able to communicate with backend. Example endpoints:
- **GET /profiles/** - to fetch multiple user profiles
- **GET /profiles?country=PL** - to fetch users from Poland
- **GET /profiles/123** - to fetch user profile with id 123
- **GET /profiles/123?fields=name,email** - to fetch only name and email of a user profile with id 123
- **POST /profiles/123** - to add new user profile
- **DELETE /profiles/123** - to delete user profile with id of 123
## b) Framework
I would use any Node.js HTTP framework that fulfills current and possible future requirements and that team is comfortable working with, eg. Express, Fastify, Koa, Hapi
## c) Any other comments and suggestions