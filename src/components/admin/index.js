import React, { Fragment } from "react";
import { useHistory } from "react-router";

const style = {
  height: "100px",
  backgroundColor: "#eee",
  textAlign: "center",
  margin: "10px",
};

export default function Admin() {
  const history = useHistory();
  return (
    <Fragment>
      <center>
        <h1>Admin Dashboard</h1>
      </center>
      <hr />
      <div className="row">
        <div className="col-md-3">
          <div className="card" style={style}>
            Years
            <hr />
            <div>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => history.push("/years")}
              >
                Manage
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div
            className="card"
            style={style}
            onClick={() => history.push("/list-pfe")}
          >
            PFE
            <hr />
            <div>
              <button className="btn btn-primary btn-sm">Manage</button>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" style={style}>
            Teachers
            <hr />
            <div>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => history.push("/teachers")}
              >
                Manage
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" style={style}>
            Students
            <hr />
            <div>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => history.push("/students")}
              >
                Manage
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
