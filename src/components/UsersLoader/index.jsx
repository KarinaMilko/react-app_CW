// import { Component } from "react";

// class UsersLoader extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       users: [],
//       isFetching: false,
//       error: null,
//     };
//   }
//   //cdm
//   componentDidMount() {
//     console.log("mount");
//   }

//   //cdup
//   componentDidUpdate(prevProps, prevState) {
//     console.log("update");
//   }

//   //cwun
//   componentWillUnmount() {
//     console.log("unmount");
//   }

//   click = () => {
//     console.log("setState");
//     this.setState({ isFetching: !this.state.isFetching });
//   };
//   render() {
//     console.log("render");
//     return (
//       <div>
//         <button onClick={this.click}>+</button>
//       </div>
//     );
//   }
// }

// export default UsersLoader;

import { Component } from "react";

class UsersLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isFetching: false,
      error: null,
    };
  }
  componentDidMount() {
    this.setState({ isFetching: true });
    fetch(`https://randomuser.me/api?page=1&results=5&seed=js`)
      .then((response) => response.json())
      .then((data) => this.setState({ users: data.results }))
      .catch((err) => this.setState({ error: err }))
      .finally(() => this.setState({ isFetching: false }));
  }

  render() {
    const { users, isFetching, error } = this.state;
    return (
      <div>
        {isFetching && <div>Loading... Please wait.</div>}
        {error && <div>ERROR</div>}
        {!isFetching &&
          !error &&
          users.map((u) => <li key={u.login.uuid}>{JSON.stringify(u)}</li>)}
      </div>
    );
  }
}

export default UsersLoader;
