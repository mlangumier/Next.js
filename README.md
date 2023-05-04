# React Courses with Epic React, Typescript & Tailwind CSS

- Using D&D 5E api: `https://www.dnd5eapi.co/api` (.env.local)
- Using (React Query)[https://www.youtube.com/watch?v=Kjkx2BASAZA] instead of fetch+redux
- Epic React for hooks
- (Fireship - YT)[https://www.youtube.com/watch?v=TNhaISOUy6Q&t=355s]
- (Auth with Dave Gray - YT)[https://www.youtube.com/watch?v=27KeYk-5vJw]

## ----- EPIC REACT - HOOKS -----

### useReducer()

Cf `/components/level-manager.tsx`

Allows us to manage complex state logic and multiple pieces of state (ex: increment/decrement items, change todos completion states, etc.)

### useMemo() vs useCallback()

Both are used to memoize different things:

- `useMemo()` memoizes the return value of a function. Useful when the state value doesn't change but the function is called anyway. (Video example)[https://www.youtube.com/watch?v=e4G_feMylbg]
- `useCallback()` memoizes the function itself (Video example)[https://www.youtube.com/watch?v=tLvG7AGVO2c]. Useful when passing a function to different children (prevent re-render for all of them)

Warning: use them only when necessary, if the functions really are slowing down the app.

### useContext()

Share a state between all children nested in the created context provider

### UseLayoutEffect()

Contrary to `useEffect()`, `useLayoutEffect()` is not asynchronous: it runs between the start of the render and the moment the content is painted.

Useful when we need the data to be displayed at the same time as the rest of the content => prevents a component to appear and then move to the right position (useful for adding data, chatbox, etc).

## ----- EPIC REACT - TIPS -----

### Chapter: Compound Components

Use `Children.map(children, child => {})` and `closeElement(child, {params})` so that the child component can pass props to the components inside of it (so the props don't have to be set in the parent component).
Warning: if DOM children, needs to return it unmodified.

## ----- REACT QUERY -----

(With Web Dev Simplified)[https://www.youtube.com/watch?v=r8Dg0KVnfMA]

Pros:

- Does't wait for the component to finish mounting to fetch data
- Can cache requests, serves as a state manager
  -> Call useQuery to fetchData, give it an ID. Call useQuery with the ID on another page, will get the data fetched earlier.
- Less code, much simpler

Tip: With Next, initialized data in /pages don't need React Query for performances (because of SSR), but other components do.

Two types of data management:

- Query : fetching data
- Mutation : modifying local data

Examples with /pages/monsters.

Add the `enable` key to a request to setup pre-requisites for the request to run (ex: `enable: monster.id !== null` => run function if we have a monster.id)

### useQuery - fetching data/state

Easy loading/error/data management with `if` statements to render our component.

Query will try 3 times to fetch the data, then display an error if not successful.

By adding the `staleTime` option to a request (or globally to QueryClient), we cache the data in the state so it's not fetched again for the chosen duration.
-> Data is `fresh` vs `stale`
We can also force a refresh after a post request for example, or at regular intervals, wheter the data is fresh or not.

```
<!-- queryKey examples -->
/monsters -> ["monsters"]   // fetch
/monsters/255 -> ["monsters", monster.id]   // fetch + id
/monsters?name=owlbear -> ["monsters", { name: "owlbear" }]   // query-filter
/monsters/255/actions -> ["monsters", monster.id, "actions"] // fetch params
```

### useMutation - modifying data/state

Allows us to modify the state (post, put, delete etc.)

### useQueries

To fetch data of multiple queries by mapping & fetching

### prefetchQuery

ex: pre-fetch data onHover link, or pre-fetch a post's data once the summary is displayed

### Also

- Supports paginations (prevData & nextData)
- Supports infinite scrolling (prevData & nextData)
- Has an "AbortController" property to abort fetching

## ----- MISC -----

- `const array = (data?.list ?? []).map((item) => {return stuff})`: to either return the values, or an empty array if the list doesn't exist.

## ----- AUTH -----

Backend: jsonwebtoken => authenticate & verify users, send auth tokens
Frontend: cookie => store tokens in cookie & for fast authentication
