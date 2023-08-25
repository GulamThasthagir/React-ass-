import React, { useState } from "react";
// import { Profile } from "./Profile";

 const Signin = ({ setProf, prof }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  // const [pass, setPass] = useState(false);

  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const validPassword = new RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$"
  );
  

  const validNumber = new RegExp(
    "^([0|+[0-9]{1,5})?([7-9][0-9]{9})$"
  );
 
  function submit() {
    console.log("validEmail.test(email)", validEmail.test(email))
    console.log("validPassword.test(password)", validPassword.test(password))
    console.log("validNumber.test(phone)", validNumber.test(phone))
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      address === "" ||
      phone === ""
    ) {
      alert("Not Found");
    } else if (
      !validEmail.test(email) ||
      !validPassword.test(password) ||
      !validNumber.test(phone)
    ) {
      alert("invalid data");
    } else {
      setProf([...prof, { email, password, name, address,phone }]);
      setEmail("");
      setPassword("");
      setName("");
      setAddress("");
      setPhone("")
      setOpen(true);
    }
  }
  return (
    <>
      {
        <div className="password">
          <p className="para">Name</p>
          <input
            type="text"
            id="input1"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
          <p className="para">Email</p>
          <input
            type="text"
            id="input1"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
          <p className="para">PassWord</p>
          <input
            type="text"
            id="input2"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          <p className="para">Phone</p>
          <input
            type="text"
            id="input1"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          ></input>
          <p className="para">Address</p>
          <input
            type="text"
            id="input1"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          ></input>
          <br></br>
          <br></br>
          <button onClick={submit} className="submit">
            Submit
          </button>
        </div>
      }
      {open && (
        <div>
          <h1>Login Successfull</h1>
        </div>
      )}
    </>
  );
};

export default Signin;
