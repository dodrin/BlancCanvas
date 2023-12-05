import { useState, useCallback, useMemo } from 'react';
import { URL_ARTISTS, TYPES_BY_URL } from "../constants";
import { TypeIcon } from '../TypeIcon';
import './FilterType.css';
import { useTheme } from '../../../hooks/ThemeContext';

export const FilterType = ({ url, setFilterOptions }) => {
  const defaultCheckedById = useMemo(() => (
    TYPES_BY_URL[url].reduce((selectedTypeById, type) => ({ ...selectedTypeById, [type.id]: true }), {})
  ), [url]);
  const [checkedById, setCheckedById] = useState(defaultCheckedById)

  const { theme } = useTheme();

  const list = useMemo(() => TYPES_BY_URL[url], [url]);

  const handleClick = useCallback((event) => {
    const { id } = event.currentTarget;

    const isPrevAllSelected = list.every(({ id }) => checkedById[id]);

    const nextState = { ...checkedById, [id]: !checkedById[id] };
    const isNothingSelected = list.every(({ id }) => !nextState[id]);

    // we store selected ids here and in useFilterOptions hook differently
    // the reason why we have separate states for the same data
    // is because we want to display checked items right away when user clicks them
    // but we don't want to fetch data every time user clicks something so we debounce them
    if (isPrevAllSelected) {
      setFilterOptions({ selectedTypeById: { [id]: true } });
      setCheckedById({ [id]: true });
    } else if (isNothingSelected) {
      setFilterOptions({ selectedTypeById: defaultCheckedById });
      setCheckedById(defaultCheckedById);
    } else {
      setFilterOptions({ selectedTypeById: nextState})
      setCheckedById(nextState);
    }
  }, [list, setFilterOptions, checkedById]);

  const isArtists = url === URL_ARTISTS;

  return (
      <div className="flex justify-evenly w-48 gap-1 relative">
        {list.map((type) => (
          <div key={type.id} className="type-icon-container">
            <button
              id={type.id}
              className="type-icon btn btn-sm px-2 py-0"
              onClick={handleClick}
            >
              <TypeIcon
                isArtists={isArtists}
                type={url === URL_ARTISTS ? type.id : type.name}
                className={ checkedById[type.id]
                  ? theme === 'black' ? 'text-white' : 'text-primary'
                  : 'text-default opacity-20'}
              />
            </button>
            <div
              className="type-tooltip"
            >
              {type.name}
            </div>
          </div>
        ))}
      </div>
  );
}