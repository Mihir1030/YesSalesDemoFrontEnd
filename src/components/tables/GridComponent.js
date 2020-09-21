import React from "react";
import PropTypes from "prop-types";

import BootstrapTable from "react-bootstrap/Table";

const GridComponent = ({ tableHeadingList, tableRows }) => (
  <div className="tableDiv">
    <BootstrapTable striped bordered hover size="sm" responsive>
      <thead>
        <tr>{tableHeadingList}</tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </BootstrapTable>
  </div>
);

GridComponent.propTypes = {
  tableHeadingList: PropTypes.arrayOf(PropTypes.element).isRequired,
  tableRows: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default GridComponent;