import React from "react";

function Input({ name, onChange, placeHolder, value, type, id }) {
  return (
    <div>
      <div>
        <input
          id={id}
          type={type}
          name={name}
          className="form-control"
          placeholder={placeHolder}
          defaultValue={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
export default Input;