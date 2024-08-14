import useForm from "../utils/useForm";

const Contact = () => {
  const { input, handlerChange, resetForm } = useForm({
    email: "",
    password: "",
    number: "",
  });

  const hadleSubmit = (e) => {
    e.preventDefault();
    console.log("form data : " + JSON.stringify(input));
    resetForm();
  };

  // const city_arr = ["Raipur", "Durg", "Bilaspur", "kawardha", "Balod"];

  return (
    <div className="container my-5 col-5 mx-auto p-3 border rounded">
      <form onSubmit={hadleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={input.email}
            onChange={handlerChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handlerChange}
            className="form-control"
            id="password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">
            Mobile Number
          </label>
          <input
            type="text"
            name="number"
            value={input.number}
            onChange={handlerChange}
            className="form-control"
            id="number"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button type="reset" onClick={resetForm} className="btn btn-secondary">
          Reset
        </button>
      </form>
    </div>
  );
};

export default Contact;
