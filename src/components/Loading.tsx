import React, { FunctionComponent } from "react";

interface ILoading {
  loading: string;
}

const Loading: FunctionComponent<ILoading> = (props) => {
  const { loading } = props;

  return <div>{loading}</div>;
};

export default Loading;
