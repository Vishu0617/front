import React from 'react'
import { Link } from 'react-router-dom'
import './PrivacyPolicy.css'

function PrivacyPolicy() {
  return (
    <>
    <section className="main-top bread-crumb">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="bread-content">
                    <h1>Privacy Policy</h1>
                    <ul className="list-inline bread-list mb-0">
                        <li className="list-inline-item"><Link to="/">Home</Link></li>
                        <li className="list-inline-item">Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="policy-condition">
    <div className="container">
        <div className="col-12">
            <div className="policy-terms-box">
                <h4>Where does it come from?</h4>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classNameical Latin literature from 45 BC, making it over 2000 years old.</p>
                <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                    more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of
                    the word in classNameical literature, discovered the undoubtable source.</p>
                <h4>What is Lorem Ipsum?</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.</p>
                <h4>Why do we use it?</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                    looking at its layout.</p>
                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                    opposed to using 'Content here, content here', making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
                    search for 'lorem ipsum'</p>
                <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <h4>The standard Lorem Ipsum passage</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h4>Where does it come from?</h4>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classNameical Latin literature from 45 BC, making it over 2000 years old.</p>
                <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                    more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of
                    the word in classNameical literature, discovered the undoubtable source.</p>
                <h4>What is Lorem Ipsum?</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.</p>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default PrivacyPolicy