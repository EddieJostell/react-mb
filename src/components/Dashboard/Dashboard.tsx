import React, { KeyboardEvent, useState } from 'react';
import './Dashboard.css';
import {
  Row,
  Col,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import Header from '../Header/Header';
import { IMovieCard } from '../../movies';

export interface IDashboardProps {
  titleSearch: (event: KeyboardEvent<HTMLInputElement>) => void;
  /*  genreSearch: (event: KeyboardEvent<HTMLInputElement>) => void; */
  localMovieList: IMovieCard[];
}

export const Dashboard = (props: IDashboardProps): JSX.Element => {
  const { titleSearch, genreSearch, localMovieList } = props;

  console.log(localMovieList[0].Genre);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  /* 
  const DropDownItem = localMovieList.map((obj: any, key: any) => {
    return <DropdownItem key={key}>{obj.Genre}</DropdownItem>;
  }); */

  // For next time map localMovieList find all genres from every movie and put them into another array
  // Take that array and trim/sort and display the genres in the dropdown below.

  return (
    <Col className='dashboard'>
      <Row>
        <Col className='mb-5'>
          <Header title='List Movies By:' size='h2' />
        </Col>
      </Row>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          {/*  <Row>
            <Button outline color='danger' className='mb-4'>
              Add to DB
            </Button>
          </Row> */}
          <Row className='mb-4'>
            <Header size='h6' title='Search by title' />
            <Input placeholder='enter movie name' onKeyDown={titleSearch} />
          </Row>
          <Row className='mb-4'>
            <Header size='h6' title='Search by genre' />
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>Genres</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>123</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Row>
          {/*    <Row>
            <Button outline color='danger' className='mb-4'>
              Top Rated
            </Button>
          </Row>
          <Row>
            <Button outline color='danger' className='mb-4'>
              Popular
            </Button>
          </Row>
          <Row>
            <Button outline color='danger' className='mb-4'>
              Sort By Year
            </Button>
          </Row> */}
        </Col>
      </Row>
    </Col>
  );
};

export default Dashboard;
