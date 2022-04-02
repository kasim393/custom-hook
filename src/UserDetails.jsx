import React from "react";
import useUsers from "./hook/useUsers";
import "./detail.css";
const UserDetails = () => {
  const { user, loading } = useUsers();
  return (
    <>
      <div className="head">
        <h1>Employee Data</h1>
      </div>
      <div className="detail">
        {loading ? (
          <p>loading...</p>
        ) : (
          <>
            {user.slice(0, 10).map((data) => (
              <div className="card" key={data.id}>
                <div className="profile">
                  <img src={data.image} alt={data.name} />
                </div>
                <div className="name">{data.name}</div>
                <div className="job">{data.job}</div>
                <div className="about">{data.about.substring(0, 100)}</div>

                <div className="bottom">
                  <div className="salary">
                    <span>Income:</span> {data.salary}
                  </div>
                  <div className="country">
                    <span>Place: </span>
                    {data.country}
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default UserDetails;
