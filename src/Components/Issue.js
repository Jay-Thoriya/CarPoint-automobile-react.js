import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../CssFolder/Issue.css'

function Issue() {

  const { register, handleSubmit } = useForm();
  const [update, setUpdate] = useState(true);
  const onSubmit = (issueDetails) => {
    setUpdate(false)
    setTimeout(()=>{ setUpdate(true)},2000)
    console.log(JSON.stringify(issueDetails));

    fetch('http://localhost:8000/issues', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(issueDetails)
    }).then(() => {
      
    })

  }
  return (
    <>

      <link
        rel="stylesheet"
        id="bootstrap-css"
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group needs-validation">
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
            <input type="text" id="name" className="floatLabel" placeholder='Name' {...register("name")} required />

          </div>
          <div className="controls">
            <input type="email" id="email" className="floatLabel" placeholder='Email' {...register("email")} required />
          </div>
          <div className="controls">
            <input type="number" id="phone" className="floatLabel" placeholder='Phone' {...register("phone")} required />
          </div>
          <div className="grid">
            <div className="col-2-3">
              <div className="controls">
                <input
                  type="text"
                  id="street"
                  className="floatLabel"
                  {...register("street")}
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
                  {...register("street-number")}
                  placeholder='House No.'
                />
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="col-2-3">
              <div className="controls">
                <input type="text" id="city" className="floatLabel" {...register("city")} placeholder='City' required />
              </div>
            </div>
            <div className="col-1-3">
              <div className="controls">
                <input
                  type="text"
                  id="post-code"
                  className="floatLabel"
                  {...register("post-code")}
                  placeholder='Post Code'
                  required
                />
              </div>
            </div>
          </div>
          <div className="controls">
            <input type="text" id="country" className="floatLabel" {...register("country")} placeholder='Country' required />
          </div>
        </div>
        <div className="form-group">
          <h2 className="heading">Car Details</h2>
          <div className="grid">
            {" "}
            <div className="col-1-3">
              <div className="controls">
                <input type="text" id="regNo" className="floatLabel" {...register("regNo")} placeholder='Reg. Number' required />
              </div>
            </div>
          </div>{" "}
          <div className="grid">
            {" "}
            <div className="col-1-3">
              <div className="controls">
                <input
                  type="text"
                  id="carModel"
                  className="floatLabel"
                  {...register("carModel")}
                  placeholder='Car Model'
                  required
                />
              </div>
            </div>
            <div className="col-1-3">
              <div className="controls">
                <input
                  type="number"
                  id="something"
                  className="floatLabel"
                  {...register("something")}
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
                  id="regYear"
                  className="floatLabel"
                  {...register("regYear")}
                />

              </div>
            </div>
            <div className="col-1-4 col-1-4-sm">
              <h4>Model Year</h4>
              <div className="controls">
                <input
                  type="date"
                  id="modelYear"
                  className="floatLabel"
                  required
                  {...register("modelYear")}
                />

              </div>
            </div>
          </div>
        </div>
        <div className="grid">
          <p className="info-text">
            Any problem related to your car please? Let us know below:
          </p>
          <br />
          <div className="controls">
            <textarea
              {...register("comments")}
              className="floatLabel"
              id="comments"
              defaultValue={""}
              placeholder='Comments'
              required
            />
          </div>
          <button type="submit" value="Submit" className="col-1-4 ">
            {(!update ?
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
         : "Submit" )}
      </button>
    </div >
      </form >
    </>

  )
}

export default Issue;