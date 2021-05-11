import React, { useState } from "react";
import TweetComponent from "./TweetComponent";

function HomePage() {

  const [message, setMessage] = useState('')

  const handleSubmit = () => {

  }

  return (
      <div className="container">
        {/* <h1 className="text-center w-100 my-3">Home</h1> */}
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card my-5">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-label-group my-2">
                    <textarea
                      rows="3"
                      name="newtweet"
                      className="form-control"
                      placeholder="Enter message"
                      required
                      autofocus
                      value={message}
                      onChange={(e)=> setMessage(e.targe.value)}
                    />
                  </div>
                  
                  <br />
                  <button
                    className="btn btn-md btn-primary btn-block"
                    style={{
                      width: '30%',
                      marginLeft: '70%'
                    }}
                    type="submit"
                  >
                    New Tweet
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>


        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems:'center',
          justifyContent:'center'
        }}>
          <h2>My Tweets</h2>
          <TweetComponent />
          <TweetComponent />
          <TweetComponent />
          <TweetComponent />
          <TweetComponent />
          <TweetComponent />
          <TweetComponent />
          <TweetComponent />
          <TweetComponent />
          <TweetComponent />
          <TweetComponent />
          <TweetComponent />
        </div>
      </div>
  );
}

export default HomePage;
