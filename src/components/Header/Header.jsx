import React from "react";
import "./style.css"
export default function Header({title = "React Shopping Cart"}) {
  return (
    <header>
      <div className="header-sub">
        <p>{title}</p>
      </div>
    </header>
  );
}
