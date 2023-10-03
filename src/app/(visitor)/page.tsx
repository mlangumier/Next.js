import { HomepageView } from "@/src/views/homepage";
import { NextPage } from "next";

// fetch data if needed

// generateMetadata()

const Home: NextPage = () => {
  return (
    <main className="">
      <HomepageView />
      {/* Position-fixed right: column (line + circles-#anchors) with page sections */}
    </main>
  );
};

export default Home;
