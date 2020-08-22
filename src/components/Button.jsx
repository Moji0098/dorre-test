import React from "react";

function Button(props) {
  const {
    title = " ",
    color = "#fff",
    backgroundColor = "#fff",
    borderColor = "transparent",
    margin,
    ...other
  } = props;
  return (
    <button
      style={{
        color,
        backgroundColor,
        borderRadius: 30,
        padding: ".75rem 1.25rem",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor,
        margin,
        fontWeight: "bold",
        cursor: "pointer",
      }}
      {...other}
    >
      {title}
    </button>
  );
}
export default Button;
