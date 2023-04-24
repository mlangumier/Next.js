import { ChangeEvent, useState } from "react";

interface IProps {
  list: any[];
  selected: any;
  onSelected: (item: any) => void;
}

export const Select: React.FC<IProps> = ({ list, selected, onSelected }) => {
  const [selectValue, setSelectValue] = useState<string>(selected || "");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    onSelected(e.target.value);
  };

  return (
    <div className="w-[100%]">
      <select
        value={selectValue}
        onChange={handleChange}
        disabled={!list}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">Select a class</option>
        {list.map((item) => (
          <option value={item.index} key={item.index}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
