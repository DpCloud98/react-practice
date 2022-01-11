import React from 'react';
import './style.css';

// export default function App() {
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
// }

const testData = [
  {
    name: 'Dan Abramov',
    avatar_url: 'https://avatars.githubusercontent.com/u/810438?v=4',
    company: '@facebook ',
  },
  {
    name: 'dharm',
    avatar_url: 'https://avatars.githubusercontent.com/u/72696?v=4',
    company: '@instagram',
  },
];

const Cardlist = (props) => {
  <div>
    {testData.map((profile) => (
      <Card {...profile} />
    ))}
  </div>;
};

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div>
        <div className="github-profile">
          <img src={profile.avatar_url} />
          <div className="info">
            <div className="name">{profile.name}</div>
            <div className="company">{profile.company}</div>
          </div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Card />
      </div>
    );
  }
}

export default App;
