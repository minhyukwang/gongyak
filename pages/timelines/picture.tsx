import type { NextPage } from "next";
import Layout from "../components/layout";

const Picture: NextPage = () => {
  return (
    <Layout canGoBack>
        <div className=" -mt-12 flex justify-center items-center h-screen">
            <div className="h-72 w-full bg-slate-400"></div>
        </div>
    </Layout>
  );
};

export default Picture;