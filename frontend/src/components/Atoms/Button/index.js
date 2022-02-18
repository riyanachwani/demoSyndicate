import "./Button.scss";

export default function Button({
  children,
  onClick,
  className,
  border,
  type,
  disabled,
  style,
}) {
  const properties = {
    border: border ? border : "",
    ...style,
  };
  if (disabled === true) {
    return (
      <button className={`${className}`} disabled style={properties}>
        {children ? children : "Button"}
      </button>
    );
  }
  return (
    <button
      className={`${className} btn`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      style={properties}
    >
      {children ? children : "Button"}
    </button>
  );
}
