import { useEffect, useState } from 'react';
import Header from '../../shared/Header/header.shared';
import NavBar from '../../shared/Navbar/navbar.shared';
import Content from '../../shared/Content/content.shared';

const LayoutView = () => {  
  /**
   *
   * states
   *
   * **/
  const [subHeight, setSubHeight] = useState<string>('3.5rem');
  const [subWidth, setSubWidth] = useState<string>('16rem');

  /**
   * 
   * hooks
   * 
   * **/
  useEffect(() => {
    if (!sessionStorage.getItem("isShowNav")) {
      setSubWidth("16rem");
    } else {
      setSubWidth("3.5rem");
    }
  }, [])

  /**
   * 
   * funcs
   * 
   * **/
  const onClickForChangeSubWidth = () => {
    if (subWidth == '16rem') {
      setSubWidth('3.5rem');
      sessionStorage.setItem("isShowNav", "1");
    } else {
      setSubWidth('16rem');
      sessionStorage.removeItem("isShowNav")
    }
  };

  /**
   *
   * export the state
   *
   * **/
  const header = {
    subHeight,
    subWidth,
    setSubHeight,
    onClickForChangeSubWidth,
  };

  const navbar = {
    subWidth,
  };

  const content ={
    subWidth, subHeight
  }

  return (
    <>
      {/* Header */}
      <Header {...header} />
      {/* End Header */}

      {/* Navbar */}
      <NavBar {...navbar} />
      {/* End navbar */}

      {/* Content */}
      <Content {...content} />
      {/* End content */}
    </>
  );
};

export default LayoutView;
