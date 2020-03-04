import React, { FunctionComponent } from 'react';
import { Container, ContainerProps } from 'reactstrap';
import './Layout.less';

export interface IContainerProps extends ContainerProps {
  children?: React.ReactNode;
}

export const Layout: FunctionComponent<IContainerProps> = (
  props: IContainerProps
): JSX.Element => {
  const { children, className, cssModule, ...other } = props;

  return (
    <Container fluid={true} className='layout' {...other}>
      {children}
    </Container>
  );
};

export default Layout;
