import React, { useState, FunctionComponent, ReactNode } from 'react';

type TestingProps = {
  children: ReactNode;
};

export const TestingComponent: FunctionComponent<TestingProps> = ({
  children,
}) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setShow(prevShow => !prevShow)}></button>
      {show}
      {children}
    </div>
  );
};
