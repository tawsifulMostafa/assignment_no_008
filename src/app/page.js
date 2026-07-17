

import FeaturedBooks from "@/Components/Home/FeatureBook/FeaturedBooks";
import HomeBanner from "@/Components/Home/HomeBanner/HomeBanner"
import Premium from "@/Components/Home/Premium/Premium";
 
const HomePage = async () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <FeaturedBooks></FeaturedBooks>
      <Premium></Premium>

    </div>
  );
}
export default HomePage;




