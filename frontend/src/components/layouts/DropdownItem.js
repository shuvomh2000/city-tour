import React from "react";

const DropdownItem = ({href,className,onClick,title}) => {
  return (
    <li>
      <a href={href} className={className} onClick={onClick}>
        {title}
      </a>
    </li>
  );
};

export default DropdownItem;
