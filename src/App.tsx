import React, { useState } from 'react';
import './App.test'
import MenuBar from "./MenuBar/MenuBar";
import AddHealthData from './components/AddHealthData/AddHealthData';
import ShowHealthData from './components/ShowHealthData/ShowHealthData';
import AnalyticsData from './components/AnalyticsData/AnalyticsData';
import { MainContextWrapper } from './Store/mainContext/mainContext';

function App() {

  const [loadComponent, setLoadComponent] = useState(<ShowHealthData/>)
  const buttonArr = [
    { 
      id: 1,
      label: 'Add-health',
      btFun: () => {setLoadComponent(<AddHealthData/>)}
    },
    { 
      id: 2,
      label: 'Show-health',
      btFun: () => {setLoadComponent(<ShowHealthData/>)}
      
    },
    { 
      id: 3,
      label: 'Analytics-healthData',
      btFun: () => {setLoadComponent(<AnalyticsData/>)}
    }
    ];

  return(
    <MainContextWrapper>

      <div>
      <MenuBar buttonArr={buttonArr}/>
      {loadComponent}
      </div>
      
      </MainContextWrapper>
    
  );
}

export default App;