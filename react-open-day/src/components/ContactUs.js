import React from "react";

export const ContactUs= () => {

  return (
    <form> 
    <div class="form-row">
      
      <div class="form-group col-md-6">
        <label for="inputPassword4">FullName</label>
        <input type="FullName" class="form-control" id="inputFullName" placeholder="FullName"/>
      </div>
      <div class="form-group col-md-6">
        <label for="inputEmail4">Email</label>
        <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
      </div>
    </div>
    <div class="form-group">
      <label for="inputAddress2">Phone</label>
      <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
    </div>
    <div class="form-group">
      <label for="inputAddress">Address</label>
      <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputCity">City</label>
        <input type="text" class="form-control" id="inputCity"/>
      </div>
      <div class="form-group col-md-4">
        <label for="inputState">State</label>
        <select id="inputState" class="form-control">
          <option selected>Choose...</option>
          <option>England</option>
          <option>Northern Ireland</option>
          <option>Scotland</option>
          <option>Wales</option>

        </select>
      </div>
      <div class="form-group col-md-2">
        <label for="inputZip">Postcode</label>
        <input type="text" class="form-control" id="inputZip"/>
      </div>
    </div>
    
      <div class="form-group col-md-4">
        <label for="inputState">Related to</label>
        <select id="inputState" class="form-control">
          <option selected>Choose...</option>
          <option>Request Call Back</option>
          <option>Request Prospectus</option>
          <option>Course Enquiry</option>
          <option>Accoommodation</option>

        </select>
      </div>
    <button type="submit" class="btn btn-primary">Submit Enquiry</button>
    </form>
  

   

   
  );
};

export default ContactUs;