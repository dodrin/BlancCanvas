import { useState, useCallback, useMemo } from 'react';
import { URL_ARTISTS, TYPES_BY_URL } from "../constants";
import { TypeIcon } from '../TypeIcon';

export const FilterType = ({ url, setFilterOptions }) => {
  const defaultCheckedById = useMemo(() => (
    TYPES_BY_URL[url].reduce((selectedTypeById, type) => ({ ...selectedTypeById, [type.id]: true }), {})
  ), [url]);
  const [checkedById, setCheckedById] = useState(defaultCheckedById)

  const list = useMemo(() => TYPES_BY_URL[url], [url]);

  const handleClick = useCallback((event) => {
    const { id } = event.currentTarget;

    const nextState = { ...checkedById, [id]: !checkedById[id] };
    const isAllChecked = list.every(({ id }) => nextState[id]);

    // we store selected ids here and in useFilterOptions hook differently
    // the reason why we have separate states for the same data
    // is because we want to display checked items right away when user clicks them
    // but we don't want to fetch data every time user clicks something so we debounce them
    if (isAllChecked) {
      setFilterOptions({ selectedTypeById: defaultCheckedById });
    } else {
      setFilterOptions({ selectedTypeById: nextState });
      setCheckedById(nextState);
    }
    setCheckedById(nextState);
  }, [list, setFilterOptions, checkedById]);

  const isArtists = url === URL_ARTISTS;

  return (
      <div className="flex justify-evenly items-center w-48 gap-0.5">
        {list.map((type) => (
          <button
            id={type.id}
            className="btn btn-sm px-2 py-0"
            key={type.id}
            onClick={handleClick}
          >
            <TypeIcon
              isArtists={isArtists}
              type={url === URL_ARTISTS ? type.id : type.name}
              color={checkedById[type.id] ? "#e91e63" : undefined}
            />
          </button>
        ))}
      </div>
  );
}