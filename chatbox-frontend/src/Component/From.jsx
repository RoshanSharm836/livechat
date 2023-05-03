function From({ fn, setname, setroom, setpassword }) {
  return (
    <>
      <div className="line"></div>
      <div className="form">
        <h1 className="heading">Login</h1>
        <img src="login.svg" alt="" srcset="" />
        <br />
        <br />
        <label for="uname">Username:</label>
        <input
          id="uname"
          type="text"
          name="user"
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <label for="pwd">Password:</label>
        <input
          id="pwd"
          type="password"
          name="room"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <label for="room">Room ID:</label>
        <input
          id="id"
          type="text"
          name="room"
          onChange={(e) => {
            setroom(e.target.value);
          }}
        />
        <button onClick={fn}>submit</button>
      </div>
    </>
  );
}

export default From;
