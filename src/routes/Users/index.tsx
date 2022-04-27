import React from "react";
import useUsersQuery from "routes/Users/api/useUsersQuery";
import { Card, List } from "antd";
import CardTitle from "components/CardTitle";

const Users: React.FC = () => {
  const usersQuery = useUsersQuery();

  return (
    <Card title={<CardTitle>Users</CardTitle>} loading={usersQuery.isLoading}>
      <List
        dataSource={usersQuery.data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={item.name} description={item.email} />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Users;
