import Button from "../../Atoms/Button";
import { MdClose } from "react-icons/md";

export default function CustomMessage({
  message,
  id,
  rounded,
  align,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  Isclose,
}) {
  const close = () => {
    document.getElementById(id).style.display = "none";
  };
  const customStyle = {
    margin: margin,
    marginTop: marginTop,
    marginBottom: marginBottom,
    marginLeft: marginLeft,
    marginRight: marginRight,
    borderRadius: rounded,
  };

  if (rounded) {
    return (
      <div
        className="custom-message px-4  py-3 rounded-5 shadow-sm bg-gray-100"
        id={id}
        style={customStyle}
      >
        <div
          className="d-flex text-dark"
          style={{
            justifyContent: align === "center" ? "center" : "space-between",
          }}
        >
          <h6 className="align-self-center m-0">{message}</h6>

          <Button className="btn-text align-self-center" onClick={close}>
            <MdClose className="m-0 fs-5 text-gray-900" />
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className=" px-4  py-3 shadow-sm bg-gray-100"
        id={id}
        style={customStyle}
      >
        <div
          className="d-flex text-dark"
          style={{
            justifyContent: align === "center" ? "center" : "space-between",
          }}
        >
          <h6 className="align-self-center m-0">{message}</h6>
          {Isclose === true ? (
            <Button className="btn-text align-self-center" onClick={close}>
              <MdClose className="m-0 fs-5 text-gray-900" />
            </Button>
          ) : null}
        </div>
      </div>
    );
  }
}
