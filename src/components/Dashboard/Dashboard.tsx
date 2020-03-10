import React from "react";
import "./Dashboard.css";
import { Row, Button, Col, Input } from "reactstrap";
import Header from "../Header/Header";

export interface IDashboardProps {
  handleClick: () => void;
}

export const Dashboard = (props: IDashboardProps): JSX.Element => {
  const { handleClick } = props;
  return (
    <Col className="dashboard">
      <Row>
        <Col className="mb-5">
          <Header title="List Movies By:" size="h2" />
        </Col>
      </Row>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <Button outline color="danger" className="mb-5" onClick={handleClick}>
            All Movies
          </Button>
          <Input />
          <Button outline color="danger" className="mb-5">
            Top Rated
          </Button>
          <Button outline color="danger" className="mb-5">
            Popular
          </Button>
          <Button outline color="danger" className="mb-5">
            Sort By Genre
          </Button>
          <Button outline color="danger" className="mb-5">
            Sort By Year
          </Button>
        </Col>
      </Row>
    </Col>
  );
};

export default Dashboard;
