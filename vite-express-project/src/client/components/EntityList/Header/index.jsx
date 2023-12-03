import { SortOptions } from './SortOptions';
import { FilterOptions } from './FilterOptions';
import { TITLE_BY_URL } from '../constants';

export const Header = ({ url }) => {
  const title = TITLE_BY_URL[url];
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
        className="entity-list-header flex items-center p-6"
      >
        {/* <h1
          id="entity-list-title"
          className="font-subHeading text-lg font-semibold leading-6 text-accent"
        >
          {title} in your area
        </h1> */}
        <aside className="w-full flex gap-4 justify-center pl-2 pr-4">
          <SortOptions url={url} />
          <FilterOptions url={url} />
        </aside>
      </header>
    </>
  );
};
