import "bootstrap/dist/css/bootstrap.min.css";
function Name(props) {
  return (
    <div>
      <h1 className="text-primary display-6 "> {props.name} </h1>
    </div>
  );
}

export default Name;
