import { FilterType } from './FilterType';
import { FilterWage } from './FilterWage';

export const FilterOptions = ({ url, selectedTypeById, setFilterOptions }) => {
  return (
    <div className="flex gap-8">
      <FilterType
        url={url}
        selectedTypeById={selectedTypeById}
        setFilterOptions={setFilterOptions}
      />
      <FilterWage
        url={url}
        setFilterOptions={setFilterOptions}
      />
    </div>
  )
};
