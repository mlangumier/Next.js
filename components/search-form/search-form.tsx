import { ChangeEvent, FormEvent, useState } from "react";

interface IProps {
  initialSearch: string;
  onSubmit: (search: string) => void;
}

export const SearchForm: React.FC<IProps> = ({
  initialSearch = "",
  onSubmit,
}) => {
  const [search, setSearch] = useState<string>(initialSearch);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(search);
  };

  const handlechange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={search} onChange={handlechange} />
      <button type="submit">Search</button>
    </form>
  );
};
