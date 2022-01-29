import { Component } from "react";
import { withRouter } from "react-router-dom";
class ClassComponent extends Component {
  //class gonna replace function component
  constructor() {
    super(); //initiate component constructor
    this.state = { loading: true, randomtext: "blala" };
  }
  async componentDidMount() {
    // its life cycle method its gonna clall the sonnest react component render for the first time
    console.log("first time");
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );

    const json = await res.json();
    console.log(json.pets);

    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }
  render() {
    const {
      animal,
      breed,
      city,
      state,
      description,
      name,
      images
    } = this.state;
    return (
      <div className="details">
        {" "}
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
export default withRouter(ClassComponent); //to pass all information from Component to classComponent
