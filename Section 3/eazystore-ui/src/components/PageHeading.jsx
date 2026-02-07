import { Children } from "react";
import PageTitle from "./PageTitle";

export default function PageHeading(props) {
  return (
    <div className="page-heading-container">
      <PageTitle title="Explore StickERY" />
      {props.children}
    </div>
  );
}
