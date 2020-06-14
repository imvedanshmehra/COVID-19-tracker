import React, { useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");

  const fetchData = (e) => {
    e.preventDefault();

    let url = `https://api.covid19api.com/country/${input}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => setData(result[result.length - 1]))
      .catch((err) =>
        alert("Cannot find this place, pleae try a different term ")
      );
  };

  return (
    <div>
      <form className="form-inline justify-content-center p-5">
        <div className="form-group-mr-2">
          <input
            type="text"
            className="form-control shadow-none m-3 "
            placeholder="Search your area..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="form-group-mr-2">
          <button className="btn btn-primary shadow-none" onClick={fetchData}>
            Search
          </button>
        </div>
      </form>

      <div className="container">
        <div className="row">
          <div
            className={
              data === "" ? "hidden" : "card text-white bg-warning col-sm m-2"
            }
          >
            <div className="card-header">Active Cases</div>
            <div className="card-body">
              <p className="card-text">{data.Active}</p>
            </div>
          </div>
          <div
            className={
              data === "" ? "hidden" : "card text-white bg-success col-sm m-2"
            }
          >
            <div className="card-header">Recovered</div>
            <div className="card-body">
              <p className="card-text">{data.Recovered}</p>
            </div>
          </div>
          <div
            className={
              data === "" ? "hidden" : "card text-white bg-danger col-sm m-2"
            }
          >
            <div className="card-header">Total Deaths</div>
            <div className="card-body">
              <p className="card-text">{data.Deaths}</p>
            </div>
          </div>
          <div
            className={
              data === "" ? "hidden" : "card text-white bg-primary col-sm m-2"
            }
          >
            <div className="card-header">Total confirmed cases</div>
            <div className="card-body">
              <p className="card-text">{data.Confirmed}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
