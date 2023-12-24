import { SortOptions } from './SortOptions';
import { FilterOptions } from './FilterOptions';
import { useEntityContext } from '../EntityListContext';
import { FilterWord } from './FilterWord';

export const Header = ({ url }) => {
  const { setFilterOptions, selectedTypeById } = useEntityContext();

  return (
    <>
      {/* to override root's bottom padding */}
      <style>
      {`
        #root {
          padding-bottom: 0 !important;
        }
      `}
      </style>
      <header 
        id="entity-list-header"
        className="entity-list-header justify-around flex pt-10 pb-2"
      >
        <SortOptions url={url} />
        <FilterOptions
          url={url}
          selectedTypeById={selectedTypeById}
          setFilterOptions={setFilterOptions}
        />
        <FilterWord
          setFilterOptions={setFilterOptions}
        />
      </header>
    </>
  );
};
