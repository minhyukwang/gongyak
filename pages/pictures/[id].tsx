import type { NextPage } from "next";
import Layout from "../components/layout";

const Picture: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className=" -mt-12 flex h-screen items-center justify-center">
        <div className="h-72 w-full bg-slate-400"></div>
      </div>
    </Layout>
  );
};

export default Picture;
