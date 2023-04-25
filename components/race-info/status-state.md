# State management

## Step 1 - Manage multiple states

The first step to setup our components with states & statuses is that:

```
  const [status, setStatus] = useState<EStatus>(EStatus.IDLE);
  const [race, setRace] = useState<IRace | null>(null);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    if (!raceName) {
      return;
    }

    setStatus(EStatus.PENDING);

    const getRace = async () => {
      try {
        const res = await fetchRace(raceName);
        setRace(res);
        setStatus(EStatus.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(EStatus.REJECTED);
      }
    };
    getRace();
  }, [raceName]);
```

But there are some issues, such as: the status needs to be set `after` the race/error, otherwise it'll display non-existent code and crash.

## Step 2 - Regroup states

We can avoid that by managing the states fro status, error & race in the same state-object, so they are all set at the same time.

```
const [state, setState] = useState<{
    status: EStatus;
    race?: IRace | null;
    error?: any | null;
  }>({
    status: EStatus.IDLE,
    race: null,
    error: null,
  });

  const { status, error, race } = state;

  useEffect(() => {
    if (!raceName) {
      return;
    }

    setState({ status: EStatus.PENDING });

    const getRace = async () => {
      try {
        const res = await fetchRace(raceName);
        setState({ status: EStatus.RESOLVED, race: res });
      } catch (error) {
        setState({ status: EStatus.REJECTED, error });
      }
    };
    getRace();
  }, [raceName]);
```

This is much better, but can cause issue for very complexe projects. In that case, we would need to use the `useReducer()` hook;

## Step 3 - useReducer()
