import React from 'react'

const TweetComponent = () => {
    return (
        <div className="card" style={{
            display: 'flex',
            flexDirection: 'row',
            padding: '20px',
            maxWidth: '500px',
            margin: '10px'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              backgroundColor: 'red',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '100px'
            }}>
              <span style={{color: 'white'}}>P</span>
            </div>
            <div style={{marginLeft: '20px', flex: 1}}>
              <div style={{
                display: 'flex',
                flexDirection: 'row'
              }}>
                <p style={{margin: 0, marginRight: '10px'}}>@john</p>
                <p style={{margin: 0}}>John Doe</p>
  
              </div>
              <p style={{fontWeight: 'bold'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, perspiciatis?</p>
              <div style={{
                display: 'flex',
                flexDirection: 'row'
              }}>
                <a href="#" style={{margin: 0, marginRight: '10px'}}>Like</a>
                <a href="#" style={{margin: 0}}>Reply</a>
              </div>
            </div>
          </div>
    )
}

export default TweetComponent
