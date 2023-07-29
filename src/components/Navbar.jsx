import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import Image from "next/image";
import Link from "next/link";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useSession, signOut, SessionProvider } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";

const { Header, Content, Footer } = Layout;

const Navbar = () => {
  const { data: session } = useSession();
  const selectedCategories = useSelector(
    (state) => state.pcBuilder.selectedCategories
  );

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
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#0d053b",
        }}
      >
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
              <Link href="/pc_builder" className="bg-white">
                PC Builder
              </Link>
            </Button>
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
              <button className="border px-6 py-2 hover:bg-slate-600 rounded-md bg-black text-white border-white cursor-pointer">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  href="/login"
                >
                  Login
                </Link>
              </button>
            )}
          </div>
        </div>
      </Header>
    </Layout>
  );
};

export default Navbar;
