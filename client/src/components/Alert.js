import React from "react"
import { connect } from "react-redux"

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id} className='alert'>
      <span className='container text-center text-danger'>{alert.msg}</span>
    </div>
  ))

const mapStateToProps = (state) => ({
  alerts: state.alert,
})

export default connect(mapStateToProps)(Alert)
