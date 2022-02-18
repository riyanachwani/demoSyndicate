import React from "react";

export default function Input({
  id,
  type,
  placeholder,
  value,
  onChange,
  className,
  onBlur,
  onFocus,
  disabled,
  width,
}) {
  const styles = {
    width: `${width}px`,
  };

  if (type === "textarea") {
    return (
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={`${className} form-control`}
        style={styles}
        disabled={disabled}
      />
    );
  } else {
    return (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`${className} form-control`}
        style={styles}
        onFocus={onFocus}
        disabled={disabled}
      />
    );
  }
}
