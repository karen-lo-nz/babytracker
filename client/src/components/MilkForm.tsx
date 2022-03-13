import React, {useState, useEffect} from "react"
import { connect } from 'react-redux'
import * as milkForm from '../actions/milk_form'


const AddFeed = (props:any) => {

  const {dispatch, milk_form} = props

  useEffect(() => {
    dispatch(milkForm.getMilk_formListings())
  }, [])
  
  const [formData, setFormData] = useState({
    id: '',
    time: '',
    pumpedAmount: '',
    bottleFeedAmount: '',
    breastFeedDuration: ''
  })

  const changeHandler = (e:any) => {
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
            <input  className="form-input" name="time" type="time" id="time" value={formData.time} onChange={(e) => changeHandler(e)} placeholder="time" />
          </div>
          <div>
            <label className="form-label">Pumped Amount</label>
            <input  className="form-input" name="pumpedAmount" type="pumpedAmount" id="pumpedAmount" value={formData.pumpedAmount} onChange={(e) => changeHandler(e)} placeholder="ml" />
          </div>
          <div>
            <label className="form-label">Bottle Feed Amount</label>
            <input  className="form-input" name="bottleFeedAmount" type="bottleFeedAmount" id="bottleFeedAmount" value={formData.bottleFeedAmount} onChange={(e) => changeHandler(e)} placeholder="ml" />
          </div>
          <div>
            <label className="form-label">Breastfeeding Duration</label>
            <input  className="form-input" name="breastFeedDuration" type="breastFeedDuration" id="breastFeedDuration" value={formData.breastFeedDuration} onChange={(e) => changeHandler(e)} placeholder="minutes" />
          </div>

          <div className="control">
              <button className="buttonItem">Submit</button>
            </div>
        </div>

      </form>
<div>
      <table>
        <thead>
      <tr>
    <th>Time</th>
    <th>Pumped Amount</th>
    <th>Bottle Feed Amount</th>
    <th>Breastfeeding Amount</th>
  </tr>
  </thead>
  <tbody>
    {milk_form.map(feed => {
      return (
        <tr key={feed.id}>
          <td>{feed.time}</td>
          <td>{feed.pumped}</td>
          <td>{feed.bottleFeedAmount}</td>
          <td>{feed.feedingDuration}</td>
        </tr>
      )
    })
    }
    
  </tbody>
      </table>
      </div>
    </>
  )

}

const mapStateToProps = (globalState:any) => {
  return {
    milk_form: globalState.milk_form
  }
}
export default connect(mapStateToProps)(AddFeed)