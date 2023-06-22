import React from 'react';
import logoImage from '../logo/download.png';

const MenuBar: React.FC<{
  buttonArr: any
}> = ({
  buttonArr
}) =>  {

  const buttonContent = buttonArr.map((bt:any) => {
    return ( 
    <button key= {bt.id} className="text-white" 
    onClick={ bt.btFun
      }
      >
      {bt.label}
      </button>
      );
  });

  return (
    <header className="bg-blue-500 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
      <img src={logoImage} alt="Logo" className="h-8" />
        {buttonContent}
      </div>
      <div>
        <button className='text-white'>Log In</button>
      </div>
    </header>
  );

  }
export default MenuBar;

