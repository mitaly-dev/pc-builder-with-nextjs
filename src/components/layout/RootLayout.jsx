import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import Image from "next/image";
import Link from "next/link";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Banner from "../Banner";
import { useSession, signOut, SessionProvider } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";

const { Header, Content, Footer } = Layout;

const RootLayout = ({ children }) => {
  const selectedCategories = useSelector(
    (state) => state.pcBuilder.selectedCategories
  );

  console.log("sew", selectedCategories);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const items = [
    {
      key: "1",
      label: <Link href="/cpu-processor">CPU / Processor</Link>,
    },
    {
      key: "2",
      label: <Link href="/motherboard">Motherboard</Link>,
    },
    {
      key: "3",
      label: <Link href="/ram">RAM</Link>,
    },
    {
      key: "4",
      label: <Link href="/power_supply_unit">Power Supply Unit</Link>,
    },
    {
      key: "5",
      label: <Link href="/storage-device">Storage Device</Link>,
    },
    {
      key: "6",
      label: <Link href="/monitor">Monitor</Link>,
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
            {session ? (
              <items>
                <Button
                  onClick={() =>
                    signOut({ callbackUrl: "http://localhost:3000/login" })
                  }
                  type="primary"
                  danger
                >
                  Logout
                </Button>
              </items>
            ) : (
              <Link
                style={{ textDecoration: "none", color: "white" }}
                href="/login"
              >
                <items>Login</items>
              </Link>
            )}
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
              <Link href="/pc_builder" className="bg-white">
                PC Builder
              </Link>
            </Button>
          </div>
        </div>
      </Header>
      <Content style={{ minHeight: "100vh", backgroundColor: "#f7f7f7" }}>
        {children}
      </Content>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
        }}
      >
        TN Tech ©2023 Created by mitaly
      </Footer>
    </Layout>
  );
};

export default RootLayout;
