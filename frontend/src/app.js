import Api from './helper/api.js';

function App() {
    const api = new Api();
    const fetchUser = () => {
      api
        .getUserList()
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    };
    return(<div className="App"> </div>);
  }