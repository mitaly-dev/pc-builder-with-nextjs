import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "../styles/Login.module.css";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="py-3 sm:py-10 px-5 sm:px-10 md:px-20 w-full md:w-[70%] lg:w-[50%] m-auto">
      <div className={styles.form}>
        <h3>LOGIN WITH GITHUB</h3>
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
