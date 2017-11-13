import React from 'react';

function AddVideo({onSubmit, loading}) {
  return (
    <form onSubmit={onSubmit}>
      <fieldset className="card my-3" disabled={loading}>
        <div className="card-header">
          Add a video ID
        </div>
        <div className="card-body">
          <input name="videoId" type="text" className="form-control"/>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary">ADD</button>
        </div>
      </fieldset>
    </form>
  )
}

export default AddVideo
