import React from 'react'
import './AdminProfile.css'
import profile from '/Transport Triangle/front/src/img/profile.png'

function AdminProfile() {
  return (
    <>
    <div className="rounded w-100 div-main mb-1 p-2 container">
      <div className="profile-main">
        <div className="position-relative  ms-5 ">
          <img className="vprofile mb-2" src={profile} height={100} width={100} alt="profile" />
        </div>
      </div>
        <hr />
        <div className="form-row">
          <div className="col">
            <div className="card p-2 m-2 ms-auto text-niput ">
              Patel Vishal Rajanikantbhai
            </div>
          </div>
          <div className="col">
            <div className="card p-2 m-2 ms-auto text-niput">
             vishal@gmail.come
            </div>
          </div>
          <div className="col">
            <div className="card p-2 m-2 ms-auto text-niput">
             9157167899
            </div>
          </div>
          <div className="col">
            <div className="card p-2 m-2 ms-auto text-niput">
             9157167899
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default AdminProfile