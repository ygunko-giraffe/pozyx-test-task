import React from "react";
import { Card, Space } from "antd";
import CardTitle from "components/CardTitle";
import usePostsQuery from "routes/Posts/api/usePostsQuery";

const Posts: React.FC = () => {
  const postsQuery = usePostsQuery();

  return (
    <Card title={<CardTitle>Posts</CardTitle>} loading={postsQuery.isLoading}>
      <Space direction="vertical" size="middle">
        {postsQuery.data?.map((post) => (
          <Card key={post.id} type="inner" title={post.title}>
            {post.body}
          </Card>
        ))}
      </Space>
    </Card>
  );
};

export default Posts;
