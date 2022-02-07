import React from "react";
import { useState } from "react";

const MilkForm = (props) => {
  const [formData, setFormData] = useState({
    id: '',
    time: '',
    pumpedAmount: '',
    bottleFeedAmount: '',
    breastFeedDuration: ''
  })

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  return (
    <>
      <h1>Milk Form</h1>
      <form className="form">

        <div>
          <div>
            <label className="form-label">Time</label>
            <input  className="form-input" name="time" type="time" id="time" value={formData.time} onChange={(e) => changeHandler(e)} className="input" placeholder="time" />
          </div>
          <div>
            <label className="form-label">Pumped Amount</label>
            <input  className="form-input" name="pumpedAmount" type="pumpedAmount" id="pumpedAmount" value={formData.pumpedAmount} onChange={(e) => changeHandler(e)} className="input" placeholder="ml" />
          </div>
          <div>
            <label className="form-label">Bottle Feed Amount</label>
            <input  className="form-input" name="bottleFeedAmount" type="bottleFeedAmount" id="bottleFeedAmount" value={formData.bottleFeedAmount} onChange={(e) => changeHandler(e)} className="input" placeholder="ml" />
          </div>
          <div>
            <label className="form-label">Breastfeeding Duration</label>
            <input  className="form-input" name="breastFeedDuration" type="breastFeedDuration" id="breastFeedDuration" value={formData.breastFeedDuration} onChange={(e) => changeHandler(e)} className="input" placeholder="minutes" />
          </div>
        </div>

      </form>
    </>
  )

}

export default MilkForm