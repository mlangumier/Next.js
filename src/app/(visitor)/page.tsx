import { HomepageView } from "@/src/views/homepage";
import { NextPage } from "next";

// fetch data if needed

// generateMetadata()

const Home: NextPage = () => {
  return (
    <main>
      <HomepageView />
    </main>
  );
};

export default Home;
