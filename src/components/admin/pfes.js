import React, { Fragment, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import axios from "axios";

export default function ListPFE() {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const { sendRequest, isLoading, error, setError } = useHttpClient();

  const [email, setEmail] = useState("");
  const [cin, setCin] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    axios
      .get("http://localhost:5000/api/encadrement")
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      <div className="row">
        <div className="col-md-8" style={{ margin: "auto", padding: "20px" }}>
          <hr />
          <h3>PFE List :</h3>
          {data.map((d) => (
            <div className="row" style={{ margin: "auto", margin: "10px" }}>
              <div className="col-md-6" style={{ margin: "auto" }}>
                <div className="card">
                  <div style={{ maring: "10px", padding: "5px" }}>
                    <div>Title : {d.project.title}</div>
                    <div>Description : {d.project.description}</div>
                    <div>Creation Date : {d.project.date}</div>
                    <div>
                      State :{" "}
                      {d.project.acceptation ? (
                        <span style={{ color: "green" }}>Accept</span>
                      ) : (
                        <span style={{ color: "red" }}>Wait</span>
                      )}
                    </div>
                    <div> Acceptation Date : {d.project?.acceptationDate} </div>
                    <div>
                      Student :
                      <div
                        style={{
                          border: "1px solid #eee",
                          margin: "10px",
                          padding: "10px",
                        }}
                      >
                        <div>First Name : {d.student?.first_name}</div>
                        <div>Last Name : {d.student.last_name}</div>
                      </div>
                      Teacher :
                      <div
                        style={{
                          border: "1px solid #eee",
                          margin: "10px",
                          padding: "10px",
                        }}
                      >
                        <div>First Name : {d.teacher?.first_name}</div>
                        <div>Last Name : {d.teacher?.last_name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
