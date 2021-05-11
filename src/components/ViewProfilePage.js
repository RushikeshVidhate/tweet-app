import React from "react";
import TweetComponent from "./TweetComponent";

function ViewProfilePage() {
  return (
      <div className="container" style={{
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
                 <h1 className="text-center w-100 my-3">@john</h1>
                

        <p>All Tweets</p>
       <TweetComponent />
       <TweetComponent />
       <TweetComponent />
       <TweetComponent />
       <TweetComponent />
       <TweetComponent />
       <TweetComponent />
       <TweetComponent />
      </div>
  );
}

export default ViewProfilePage;
