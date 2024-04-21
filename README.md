# Netflix Gpt

-create React App
-configured Tailwind CSS
- Header
- Routing of App
- Login Form
- Signup form
- From Validation
- useRef Hook
- Firebase Setup
- Deploying App to Production
- Create SignUp user Account
- Implement Sign In user API
- Created Redux Store with userSlice
- Implemented Sign out
- Update Profile API
- Fetch from TMDB Movies
- Bug Fixed:All Navigation will done through Header where onAuthStateChanged is used
- Bug Fixed: If user is not logged in Redirect it to /browser"login" page and vice versa
- Unsubscribed to the onAuthStateChanged callback / wehn header component unloads
- Added hardcoded files to the constants file
- Register TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- Custom hook for now playing movie useMovieTrailer
- Create movieSlice
- Update store with movie data
- Planing for mainContainer & secondary container
- Fetyched data for Trailer video(https://developer.themoviedb.org/reference/movie-videos)
- Update store with trailer video data
- Embedded the youTube video and made it autoplay and mute 
- Tailwind classes to make mainContainer look good
- Build seconsary component
- Build MovieList 
- Build Movie Card
- Tmdb Image_CDN_URL
- usePopularMovies custom hook and fetched data from store.movies(because it containe all type of movies)

# Features
- Login/Sign UP
  - Sign In/Sign up Form
  -redirect to browser page

- Browser (after authentication)
  - Header
  -Main Movie 
       - Tailer in Background
       - Title & Description 
       - MovieSuggestions 
         - MovieLists * N

- NetflixGPT
  - Search BAr 
  - Movie Suggestions
 