import React from "react";
import { Typography } from "antd";

type CardTitleProps = {
  children: string;
};

const CardTitle: React.FC<CardTitleProps> = ({ children }) => (
  <Typography.Title level={2} style={{ margin: 0 }}>
    {children}
  </Typography.Title>
);

export default CardTitle;
