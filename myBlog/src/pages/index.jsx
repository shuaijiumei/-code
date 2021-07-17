import {Menu} from 'antd'
import { HomeOutlined , ReadOutlined, UserOutlined } from '@ant-design/icons';
import {useState} from "react";
import {history} from "umi";

export default function IndexPage() {
  const [state,setState] = useState({"current":'home'})
  const handleClick = e => {
    setState({ current: e.key });
    history.push(`/${e.key}`)
  };
  const {current} = state

  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          home
        </Menu.Item>
        <Menu.Item key="articles"  icon={<ReadOutlined /> }>
          articles
        </Menu.Item>
        <Menu.Item key="profile" icon={<UserOutlined />}>
          profile
        </Menu.Item>
      </Menu>
    </div>
  );
}
