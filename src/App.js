
import React from 'react';
import Invoice from './Component/Invoice';
import Addinvoice from './Component/Button';

function App() {
  return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-7 ">  
            <h1>Invoices</h1>
          </div>
          <div className="">
            <Addinvoice/>
          </div>
        </div>
        <div className="row">
          <div classNam="col-md-8 pr-5 mt-3">
            <Invoice />
          </div>
        </div>
        
        
         
          
        
      </React.Fragment>
    
  );
}

export default App;
