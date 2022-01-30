import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
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
    throw new Error("broken");
    return (
      <div className="details">
        <Carousel images={images} />
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
const DetailsWithRouter = withRouter(ClassComponent);
export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}
