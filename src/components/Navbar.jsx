import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import Image from "next/image";
import Link from "next/link";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useSession, signOut, SessionProvider } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";

const { Header, Content, Footer } = Layout;

const Navbar = () => {
  const { data: session } = useSession();

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
    // {
    //   key: "7",
    //   label: (
    //     <Link
    //       href="/pc_builder"
    //       className="bg-blue-800 px-2 sm:px-3 py-3 rounded-md text-white font-semibold"
    //     >
    //       PC Builder
    //     </Link>
    //   ),
    // },
  ];

  return (
    <div
      className="py-5 px-5 sm:px-10 md:px-20"
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#0d053b",
      }}
    >
      <Head>
        <title>TN Tech</title>
      </Head>
      <div className="flex justify-between w-full items-center">
        <Link href="/" className="text-red-600 border border-white text-2xl">
          TN Tech
        </Link>
        <div className="flex gap-2 sm:gap-4 items-center">
          <Dropdown
            menu={{
              items,
            }}
          >
            <a
              onClick={(e) => e.preventDefault()}
              className="text-white font-medium text-[12px]  sm:text-[15px] "
            >
              <Space>
                Categories
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>{" "}
          <Link
            href="/pc_builder"
            className="bg-blue-800 px-2 text-center text-[12px]  sm:text-[15px] sm:px-3 py-3 rounded-md text-white font-semibold"
          >
            PC Builder
          </Link>
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
            <items>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                href="/login"
                className="bg-gray-600 text-[12px] sm:text-[15px] px-2 sm:px-3 py-3 rounded-md text-white font-semibold"
              >
                Login
              </Link>
            </items>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
