import React from "react";
import "./OcsaBreadcrumb.css";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

export interface OcsaBreadcrumbProps {
  items: BreadcrumbItem[];
}

const OcsaBreadcrumb = ({ items }: OcsaBreadcrumbProps) => {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.isCurrent ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <a href={item.href}>{item.label}</a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default OcsaBreadcrumb;
