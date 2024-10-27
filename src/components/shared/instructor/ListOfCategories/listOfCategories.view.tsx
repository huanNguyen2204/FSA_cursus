import CategoriesFieldsShared from './CategoriesFields/categoriesFields.page';
import React from 'react';

/**
 *
 * test data
 *
 * **/
const testData = [
  {
    id: '1',
    name: 'Category1',
    subCategoryList: [
      {
        id: '1.1',
        name: 'Category1.1',
      },
      {
        id: '1.2',
        name: 'Category1.2',
      },
    ],
  },
  {
    id: '2',
    name: 'Category2',
    subCategoryList: [
      {
        id: '2.1',
        name: 'Category2.1',
      },
      {
        id: '2.2',
        name: 'Category2.2',
      },
      {
        id: '2.3',
        name: 'Category2.3',
      },
      {
        id: '2.4',
        name: 'Category2.4',
      },
    ],
  },
  {
    id: '3',
    name: 'Category3',
    subCategoryList: []
  },
  {
    id: '4',
    name: 'Category4',
    subCategoryList: [
      {
        id: '4.1',
        name: 'Category4.1',
      },
    ],
  },
];

const ListOfCategoriesView = () => {
  return (
    <div className="w-full h-max flex flex-col">
      {testData.map((item, index) => (
        <React.Fragment key={index}>
          <CategoriesFieldsShared {...item} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default ListOfCategoriesView;
