import React from 'react';

import Breadcrumbs from 'nextjs-breadcrumbs';

const App = () => {
  return (
    <Breadcrumbs
      useDefaultStyle={true}
      transformLabel={(title) => title}
      SeparatorComponent={() => (
        <svg
          viewBox="0 0 6 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ height: 5, color: 'gray' }}
          className="h-5 w-auto text-gray-300"
        >
          <path
            d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
            fill="currentColor"
          />
        </svg>
      )}
    />
  );
};

export default App;
