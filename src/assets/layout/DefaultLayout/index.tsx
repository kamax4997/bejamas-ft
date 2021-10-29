import React from 'react';
import Header from '../../../components/Header';

type LayoutProps = {
  children: React.ReactElement[]
}

const DefaultLayout: React.FC<LayoutProps> = (props: LayoutProps): React.ReactElement => {
  const { children } = props;

  return (
    <div className="default-layout">
      <Header />
      <div className="default-layout__body">{children}</div>
    </div>
  );
}

export default DefaultLayout;
