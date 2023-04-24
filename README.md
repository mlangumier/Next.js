# React Courses with Epic React, Typescript & Tailwind CSS

- Using D&D 5E api: `https://www.dnd5eapi.co/api` (.env.local)
- Using (React Query)[https://www.youtube.com/watch?v=Kjkx2BASAZA] instead of fetch+redux

## React Query

Pros:

- Does't wait for the component to finish mounting to fetch data
- Can cache requests, serves as a state manager
  -> Call useQuery to fetchData, give it an ID. Call useQuery with the ID on another page, will get the data fetched earlier.
- Less code, much simpler

Tip: With Next, initialized data in /pages don't need React Query for performances (because of SSR), but other components do.
