import React from 'react';

const Account = ({user, courses}) => (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 offset-md-3">
          <img src={user.avatar_url} className="card-img-top" alt=""/>
        </div>
        <div className="col-md-6">
          <h5 className="card-title">{user.name}</h5>
          <h5 className="card-title">{user.primary_email}</h5>
        </div>
      </div>
        <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="mt-3 mb-3">
                <h6>Tus Cursos:</h6>
              </div>
              { courses.map((v,i) => <p className="" key={i}>{v.name}</p>) }
          </div>
        </div>
      </div>
  )
 
export {Account};