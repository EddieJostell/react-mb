import React, { FunctionComponent } from 'react';
import { Container, ContainerProps } from 'reactstrap';
import './Layout.css';

export interface IContainerProps extends ContainerProps {
  children?: React.ReactNode;
}

export const Layout: FunctionComponent<IContainerProps> = (
  props: IContainerProps
): JSX.Element => {
  const { children, className, ...other } = props;

  return (
    <Container className='layout' {...other}>
      {children}
    </Container>
  );
};

export default Layout;
