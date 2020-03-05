import React, { FunctionComponent } from 'react';
import './Header.css';

export interface IHeaderProps {
  children?: React.ReactNode;
  title?: string;
  size: 'h1' | 'h2' | 'h3' | 'h4';
}

export const Header: FunctionComponent<IHeaderProps> = (
  props: IHeaderProps
): JSX.Element => {
  const { children, title, size } = props;

  const renderTitle = () => {
    switch (size) {
      case 'h1':
        return <h1>{title}</h1>;
        break;
      case 'h2':
        return <h2>{title}</h2>;
        break;
      case 'h3':
        return <h3>{title}</h3>;
        break;
      case 'h4':
        return <h4>{title}</h4>;
        break;
      default:
        return <h1>{title}</h1>;
    }
  };

  return <div className='header'>{renderTitle()}</div>;
};

export default Header;
