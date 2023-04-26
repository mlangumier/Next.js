# React Courses with Epic React, Typescript & Tailwind CSS

- Using D&D 5E api: `https://www.dnd5eapi.co/api` (.env.local)
- Using (React Query)[https://www.youtube.com/watch?v=Kjkx2BASAZA] instead of fetch+redux
- Epic React for hooks
- (Fireship - YT)[https://www.youtube.com/watch?v=TNhaISOUy6Q&t=355s]

## Hooks

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

## React Query

(With Web Dev Simplified)[https://www.youtube.com/watch?v=r8Dg0KVnfMA]

Pros:

- Does't wait for the component to finish mounting to fetch data
- Can cache requests, serves as a state manager
  -> Call useQuery to fetchData, give it an ID. Call useQuery with the ID on another page, will get the data fetched earlier.
- Less code, much simpler

Tip: With Next, initialized data in /pages don't need React Query for performances (because of SSR), but other components do.
