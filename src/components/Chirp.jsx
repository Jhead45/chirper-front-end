import React from 'react';

const Chirp = (props) => {

    
    return(
    
        <div className='d-flex justify-content-center'>
        <table className="table table-dark w-50 mb-0">
          <tr className='text-center'>
              <td>{props.msg}</td>
          </tr>
          </table>
          </div>
        
    
    
    
    
    )




      
       

};









export default Chirp;


/*

<div  className='d-flex justify-content-center'>
<p className='text-center mt-5 bg-info w-50'>{props.msg}</p>
</div>) */

