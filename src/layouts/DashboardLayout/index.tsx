import React from "react";
import styled from "styled-components";
import { Col, Layout, Menu, Row, Typography } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import SIDEBAR_ITEMS from "layouts/DashboardLayout/constants/SIDEBAR_ITEMS";

const HeaderTitle = styled(Typography.Title)`
  margin: 0 !important;
  color: #fff !important;
`;

const DashboardLayout: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const activeSidebarLink = SIDEBAR_ITEMS.find(
    (item) =>
      ((item?.key as string)?.split("/").filter(Boolean)[0] || "") ===
      pathname.slice(1)
  )?.key as string;

  return (
    <Layout>
      <Layout.Header>
        <Row align="middle" style={{ height: "100%" }}>
          <Col>
            <HeaderTitle level={2}>Test task</HeaderTitle>
          </Col>
        </Row>
      </Layout.Header>
      <Layout>
        <Layout.Sider width={200} theme="dark">
          <Menu
            mode="inline"
            theme="dark"
            activeKey={activeSidebarLink}
            items={SIDEBAR_ITEMS}
            onClick={({ key }) => {
              navigate(key);
            }}
            style={{ height: "100%", borderRight: 0 }}
          />
        </Layout.Sider>
        <Layout style={{ padding: "0 24px 24px", minHeight: "100vh" }}>
          <Layout.Content
            style={{
              padding: 24,
              margin: 0,
              height: "100%",
            }}
          >
            {children}
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
