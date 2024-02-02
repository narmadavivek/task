import './App.css';
import React, { useState } from 'react';

function App() {
  return (
    <div className="container">
    <div className="row">
      <div className="col align-self-start">
      <header className="head"><h1>FORM</h1></header>
      <label for="validationDefault04" class="form-label">NAME :</label>
      <input class="form-control form-control-sm" name='name' type="text" placeholder="name" aria-label=".form-control-sm example" /><br></br>
      
      <label for="validationDefault04" class="form-label">E-mail :</label>
      <input class="form-control form-control-sm" name='email' type="text" placeholder="username@email.com" aria-label=".form-control-sm example"></input><br></br>
     
     <label for="validationDefault04" class="form-label">Country :</label>
     <select class="form-select form-select-sm" aria-label="Small select example">
  <option selected>Select your country</option>
  <option value="1">India</option>
  <option value="2">China</option>
  <option value="3">America</option>
  <option value="4">South Korea</option>
  <option value="5">Sri Lanka</option>
</select>

<label for="validationDefault04" class="form-label">Date of Birth :</label>
      <input class="form-control form-control-sm" name='dob' type="date" placeholder="mm/dd/yyyy" aria-label=".form-control-sm example"  ></input><br></br>

<div className="form-group">
  <label htmlFor="gender" className="form-label" >Gender :</label>
  <div>
  <input type="radio" name="gender" value="male"  />
    <label htmlFor="male">male</label>
  
    <input type="radio" name="gender" value="female" />
    <label htmlFor="female">female</label> 
  </div>
  
  <label htmlFor="marital status" className="form-label"  >Marital Status :</label>
  <div>
  <input type="radio" name="marital status" value="married"/>
    <label htmlFor="married">married</label>
   
    <input type="radio" name="marital status" value="unmarried"  />
    <label htmlFor="unmarried">unmarried</label> 
  </div>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label" >Description</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='message' rows="3"></textarea>
</div>

<button type="button" className="btn btn-primary">Submit</button>
</div>
      

      <div className="col align-self-top">
      <div className="container-form">
      <table class="table table-bordered border-primary">
      <table class="table">
  <thead>
    <tr>
    <th scope='col'>id</th>
      <th scope="col">Name</th>
      <th scope="col">E-mail</th>
      <th scope="col">Country</th>
      <th scope="col">gender</th>
      <th scope="col">Marital Status</th>
      <th scope="col">D.O.B</th>
       </tr>
  </thead>
  <tbody>
 
         <tr >
      <th scope="row">1</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
     
    
  </tbody>
  </table>
  </table>
      </div>
    </div>
  </div>
  </div>
  
 )
};


export default App ;


