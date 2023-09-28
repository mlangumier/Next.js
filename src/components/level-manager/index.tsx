import { useReducer } from "react";

interface IProps {
  initialLevel?: number;
  step?: number;
}

const levelReducer = (
  state: { level: number },
  action: { type: "INCREMENT" | "DECREMENT"; step: number }
) => {
  switch (action.type) {
    case "INCREMENT": {
      const newLevel = state.level + action.step;
      return newLevel < 20 ? { level: newLevel } : { level: 20 };
    }
    case "DECREMENT": {
      const newLevel = state.level - action.step;
      return newLevel > 1 ? { level: newLevel } : { level: 1 };
    }
    default: {
      throw new Error(`Wrong action sent.`);
    }
  }
};

export const LevelManager: React.FC<IProps> = ({
  initialLevel = 1,
  step = 2,
}) => {
  //   This is the state:
  const [state, dispatch] = useReducer(levelReducer, { level: initialLevel });
  const { level } = state;

  //   These are the actions:
  const incrementLevel = () => dispatch({ type: "INCREMENT", step });
  const decrementLevel = () => dispatch({ type: "DECREMENT", step });

  return (
    <div className="min-w-[200px] bg-slate-50 m-4 p-4">
      <p className="text-center text-xl">Level: {level}</p>
      <div className="flex justify-between my-4 gap-2">
        <button
          type="button"
          onClick={incrementLevel}
          className="bg-blue-500 w-24 px-4 py-2 rounded-lg"
        >
          Up
        </button>
        <button
          type="button"
          onClick={decrementLevel}
          className="bg-red-500 w-24 px-4 py-2 rounded-lg"
        >
          Down
        </button>
      </div>
    </div>
  );
};
