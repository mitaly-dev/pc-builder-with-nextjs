import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "../styles/Login.module.css";
import { signIn } from "next-auth/react";
import RootLayout from "@/components/layout/RootLayout";

const Login = () => {
  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div
          className={`${styles.social_icons} flex items-center justify-center`}
        >
          <GithubOutlined
            onClick={() =>
              signIn("github", { callbackUrl: "http://localhost:3000" })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
// Login.getLayout = function getLayout(page) {
//   return <RootLayout>{page}</RootLayout>;
// };
