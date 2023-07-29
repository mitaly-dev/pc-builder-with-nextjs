import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import Image from "next/image";
import Link from "next/link";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Banner from "../Banner";

const { Header, Content, Footer } = Layout;

const RootLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const items = [
    {
      key: "1",
      label: <Link href="https://www.antgroup.com">CPU / Processor</Link>,
    },
    {
      key: "2",
      label: <Link href="/motherboard">Motherboard</Link>,
    },
    {
      key: "3",
      label: <Link href="https://www.luohanacademy.com">RAM</Link>,
    },
    {
      key: "4",
      label: (
        <Link href="https://www.luohanacademy.com">Power Supply Unit</Link>
      ),
    },
    {
      key: "5",
      label: <Link href="https://www.luohanacademy.com">Storage Device</Link>,
    },
    {
      key: "6",
      label: <Link href="https://www.luohanacademy.com">Monitor</Link>,
    },
    {
      key: "7",
      label: <Link href="https://www.luohanacademy.com">Keyboard</Link>,
    },
    {
      key: "8",
      label: <Link href="https://www.luohanacademy.com">Mouse</Link>,
    },
  ];
  return (
    <Layout className="layout">
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="flex justify-between w-full items-center">
          <Link href="/" className="text-red-600 border border-white text-2xl">
            TN Tech
          </Link>
          <div className="flex gap-4 items-center">
            <Dropdown
              menu={{
                items,
              }}
            >
              <a
                onClick={(e) => e.preventDefault()}
                className="text-white font-medium"
              >
                <Space>
                  Categories
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Button>
              {" "}
              <Link href="/contact" className="bg-white">
                PC Builder
              </Link>
            </Button>
          </div>
        </div>
      </Header>
      <Content style={{ minHeight: "100vh" }}>{children}</Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default RootLayout;
