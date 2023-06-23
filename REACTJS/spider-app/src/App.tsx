import React from 'react';
import TextInputForm from './components/TextInputForm/TextInputForm';


function App() {
  return (
    <div className="App container mx-auto">
        <h1 className='text-5xl'>Spider</h1>
        <div className='py-10'>
          <TextInputForm onSubmit={(value : string)=>{
            alert(value)
          }
          }/>
        </div>
    </div>
  );
}

export default App;
