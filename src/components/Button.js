import React from "react";

function Button({ category_button, filter }) {
  return (
    <div className="container filter_buttons">
      {category_button.map((cat, i) => {
        return (
          <button type="button" onClick={() => filter(cat)} className="category_btn">
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default Button;
