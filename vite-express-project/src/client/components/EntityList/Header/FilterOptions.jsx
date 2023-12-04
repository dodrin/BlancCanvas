import { FilterType } from './FilterType';
import { FilterWage } from './FilterWage';
import { useEntityContext } from '../EntityListContext';
import { FilterWord } from './FilterWord';

export const FilterOptions = ({ url }) => {
  const { setFilterOptions, selectedTypeById } = useEntityContext();

  return (
    <div className="flex w-full justify-between">
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
      <FilterWord
        setFilterOptions={setFilterOptions}
      />
    </div>
  )
};
