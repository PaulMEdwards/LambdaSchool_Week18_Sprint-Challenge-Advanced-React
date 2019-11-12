import React from 'react';

const Display = (props) => {
  // console.log('props: ', props);

  function card(data) {
    return (
      <div className="card" key={data.id}>
        <h4 className="name"><a href={`https://www.google.com/search?q=%22${data.name.replace(' ','+')}%22`} target="_blank" rel="noopener noreferrer">{data.name}</a></h4>
        <h5 className="country">{data.country}</h5>
        <p className="searches">Searches: {data.searches}</p>
      </div>
    )
  }

  if (!props.playerData) {
    return null;
  } else {
    return (
      <div className="cards">
        {
          props.playerData.map(data => {
            return (
              card(data)
            );
          })
        }
      </div>
    );
  }
};

export default Display;
