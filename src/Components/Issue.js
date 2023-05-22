import React from 'react';
import '../CssFolder/Issue.css'

function Issue() {
  return (
    <>
  <link
    rel="stylesheet"
    id="bootstrap-css"
  />

  <form action="">
    <div className="form-group">
      <center>
        <h1>
          <u className="thick">Adding a Car issue problem</u>
        </h1>
      </center>
      <br />
      <br />
      <br />
      <h2 className="heading">Owner Details</h2>
      <div className="controls">
        <input type="text" id="name" className="floatLabel" placeholder='Name' name="name" />
      </div>
      <div className="controls">
        <input type="text" id="email" className="floatLabel" placeholder='Email' name="email" />
      </div>
      <div className="controls">
        <input type="tel" id="phone" className="floatLabel" placeholder='Phone' name="phone" />
      </div>
      <div className="grid">
        <div className="col-2-3">
          <div className="controls">
            <input
              type="text"
              id="street"
              className="floatLabel"
              name="street"
              placeholder='Street'
            />
          </div>
        </div>
        <div className="col-1-3">
          <div className="controls">
            <input
              type="number"
              id="street-number"
              className="floatLabel"
              name="street-number"
              placeholder='House No.'
            />
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="col-2-3">
          <div className="controls">
            <input type="text" id="city" className="floatLabel" name="city" placeholder='City'/>
          </div>
        </div>
        <div className="col-1-3">
          <div className="controls">
            <input
              type="text"
              id="post-code"
              className="floatLabel"
              name="post-code"
              placeholder='Post Code'
            />
          </div>
        </div>
      </div>
      <div className="controls">
        <input type="text" id="country" className="floatLabel" name="country" placeholder='CoUntry'/>
      </div>
    </div>
    <div className="form-group">
      <h2 className="heading">Car Details</h2>
      <div className="grid">
        {" "}
        <div className="col-1-3">
          <div className="controls">
            <input type="text" id="regno" className="floatLabel" name="regno" placeholder='Reg. Number' />
          </div>
        </div>
      </div>{" "}
      <div className="grid">
        {" "}
        <div className="col-1-3">
          <div className="controls">
            <input
              type="text"
              id="carmodel"
              className="floatLabel"
              name="carmodel"
              placeholder='Car Model'
            />
          </div>
        </div>
        <div className="col-1-3">
          <div className="controls">
            <input
              type="number"
              id="something"
              className="floatLabel"
              name="something"
              placeholder='Something'
            />
          </div>
        </div>
      </div>
      {/*End Grid*/}
      <div className="grid">
        <div className="col-1-4 col-1-4-sm">
          <div className="controls">
          <h4>Reg. Year</h4>
            <input
              type="date"
              id="regyear"
              className="floatLabel"
              name="regyear"
            />
            
          </div>
        </div>
        <div className="col-1-4 col-1-4-sm">
        <h4>Model Year</h4>
          <div className="controls">
            <input
              type="date"
              id="modelyear"
              className="floatLabel"
              name="modelyear"
            />
            
          </div>
        </div>
      </div>
    </div>
    <div className="grid">
      <p className="info-text">
        Any your car related please note down ? Let us know below:
      </p>
      <br />
      <div className="controls">
        <textarea
          name="comments"
          className="floatLabel"
          id="comments"
          defaultValue={""}
          placeholder='Comments'
        />
      </div>
      <button type="submit" value="Submit" className="col-1-4">
        Submit
      </button>
    </div>
  </form>
</>

  )
}

export default Issue;