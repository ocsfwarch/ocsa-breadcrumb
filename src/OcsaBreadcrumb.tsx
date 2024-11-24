import React from "react";
import "./OcsaBreadcrumb.css";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

export interface OcsaBreadcrumbProps {
  items: BreadcrumbItem[];
  onClickHandler?: (item: BreadcrumbItem) => void;
}

const OcsaBreadcrumb = ({ items, onClickHandler }: OcsaBreadcrumbProps) => {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb">
      <ul>
        {items.map((item, index) =>
          item.isCurrent ? (
            <li key={index}>
              <span aria-current="page">{item.label}</span>
            </li>
          ) : (
            <li key={index} onClick={() => onClickHandler?.(item)}>
              {onClickHandler !== undefined ? (
                <span className="link">{item.label}</span>
              ) : (
                <a href={item.href}>{item.label}</a>
              )}
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default OcsaBreadcrumb;
