import React, { useRef } from 'react';
import Select from 'react-select';

import BoqStyle from './Boq.style';
import MainHead from '../../components/molecules/MainHead';
import SubCategoryTable from '../../components/molecules/boq/SubCategoryTable';
import AddNewSubCategoryModal from '../../components/molecules/boq/AddNewSubCategoryModal';
import DrawerAddCategoryName from '../../components/drawers/DrawerAddCategoryName';

const BoqDetail = ({ classes }) => {
  const refDrawer = useRef();
  const handleOpenDrawer = () => {
    const params = refDrawer.current;
    params.showDrawer();
  };
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];
  return (
    <BoqStyle>
      <MainHead title="BOQ Detail" />
      <div className="boq_detail">
        <div className="boq_detail-body">
          <h4>
            Category Name:
            <div className="flex-contain">
              <Select options={options} />
              <div className="add-another">
                <span onClick={handleOpenDrawer}>
                  Add another category name
                </span>
              </div>
            </div>
            <DrawerAddCategoryName ref={refDrawer} />
          </h4>
          <AddNewSubCategoryModal />
          {[1, 2].map((item, index) => (
            <SubCategoryTable key={index} />
          ))}
        </div>
      </div>
    </BoqStyle>
  );
};
export default BoqDetail;
