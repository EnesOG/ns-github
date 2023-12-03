import Layout from "@/components/Layout/Layout";
import Search from "@/components/Search/Search";

const HomePage = () => {
  return (
    <Layout title={"Zoek naar je favoriete github-repository!"}>
      <Search />
    </Layout>
  );
};

export default HomePage;
