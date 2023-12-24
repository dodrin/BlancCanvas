import { useState, useCallback } from 'react';
import { PRICE_BY_URL, DEFAULT_LABEL_BY_URL } from '../constants';

export const FilterWage = ({ url, setFilterOptions }) => {
  const [value, setValue] = useState(PRICE_BY_URL[url].max);

  const handleChange = useCallback((event) => {
    const value = Number(event.target.value);
    setValue(value);
    setFilterOptions({ valueUnder: value * 100 })
  }, []);

  return (
    <div className="flex flex-col">
      <input
        type="range"
        name="filter-dropdown"
        className="filter-controller w-48 btn btn-sm btn-block btn-ghost p-0"
        min={PRICE_BY_URL[url].min}
        max={PRICE_BY_URL[url].max}
        value={value}
        onChange={handleChange}
      />
      <label
        style={{
          fontSize: '0.85rem',
          transform: 'translateY(-0.5rem)',
        }}
      >
        {value === PRICE_BY_URL[url].max
          ? `All ${DEFAULT_LABEL_BY_URL[url]}s`
          : `${DEFAULT_LABEL_BY_URL[url]} up to $${value}`}
      </label>
    </div>
  );
}
