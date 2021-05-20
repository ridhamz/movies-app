import React, { useContext, useEffect, useState } from "react";
import { Fragment } from "react";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";

export default function EditUser() {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const { sendRequest, isLoading, error, setError } = useHttpClient();

  const [email, setEmail] = useState("");
  const [cin, setCin] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [data, setData] = useState([]);

  const { id } = useParams();
  const getUser = async () => {
    sendRequest("http://localhost:5000/api/users/by-user/" + id, "GET", null, {
      "Content-Type": "application/json",
      "x-auth-token": auth.token,
    })
      .then((res) => {
        console.log(res);
        setFirstName(res.first_name);
        setLastName(res.last_name);
        setEmail(res.email);
        setCin(res.cin);
        setRole(res.role);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getUser();
  }, []);

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    sendRequest(
      "http://localhost:5000/api/users/" + id,
      "PUT",
      JSON.stringify({ first_name, last_name, email, cin, role }),
      {
        "Content-Type": "application/json",
        "x-auth-token": auth.token,
      }
    )
      .then((res) => {
        console.log(res);
        toast.success("updated");
        history.push("/" + role + "s");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col-md-8">
          <h1> Update USER</h1>
          <form onSubmit={onHandleSubmit}>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                First Name
              </label>
              <input
                type="text"
                class="form-control"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Last Name
              </label>
              <input
                type="text"
                class="form-control"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Cin
              </label>
              <input
                type="number"
                class="form-control"
                value={cin}
                onChange={(e) => setCin(e.target.value)}
              />
            </div>

            <button type="submit" class="btn btn-success">
              Update Student
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
