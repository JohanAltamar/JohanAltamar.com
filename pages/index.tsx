import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { useTheme } from "next-themes";
// Templates
import Layout from "@/components/layouts/Layout";
// Images
import devImg from "@/public/images/dev.svg";
import devDarkImg from "@/public/images/dev_dark.svg";

import dbConnect from "@/lib/dbConnext";

const HomePage: NextPage = (props) => {
  console.log(props);
  const { theme } = useTheme();

  return (
    <Layout>
      <figure className="w-40 mx-auto">
        <Image
          src={theme === "dark" ? devDarkImg : devImg}
          alt="Dev illustration"
          layout="responsive"
          width={400}
          height={400}
        />
      </figure>
    </Layout>
  );
};

export default HomePage;

/**
 * @param {NextApiRequest} context
 */
export async function getServerSideProps() {
  try {
    await dbConnect();
    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
