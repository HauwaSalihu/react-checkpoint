import "bootstrap/dist/css/bootstrap.min.css";

import Card from "react-bootstrap/Card";

import { products } from "./products";

import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
function App() {
  // const [ourStore, setOurStore] = useState("");
  // function handleChange(e) {
  //   setOurStore(e.target.value);
  // }

  const first_name = "Coco";
  let text;
  if (first_name) {
    text = first_name;
  } else {
    text = "there";
  }
  return (
    <>
      {/* <input
        value={ourStore}
        onChange={handleChange}
        className="border-primary container m-5"
        style={{ width: "18rem", height: "2rem" }}
        placeholder="type your name here"
      /> */}
      <p className="m-5 text-body-tertiary display-4">Hello {text}</p>
      <div className="row">
        {products.map((item) => {
          return (
            <Card
              key={item.id}
              style={{ width: "18rem" }}
              className="col-sm-1 col-md-2 col-lg-3 m-5"
            >
              <Card.Img
                variant="top"
                style={{ height: "20rem" }}
                src={item.image}
              />
              <Card.Body>
                <Card.Title>
                  <Name name={item.name} />
                </Card.Title>
                <Card.Text>
                  <Price price={item.price} />
                  <Description desc={item.description} />
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default App;
