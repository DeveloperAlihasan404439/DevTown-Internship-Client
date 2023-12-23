import useBrands from "../../Share/Hooks/UseBrands";
import ShareTitle from "../../Share/ShareTitle";
import Loading from "../Loading";
import BrandCrad from "./BrandCrad";

const BrandsAll = () => {
  const { brands, loader } = useBrands();
  return (
    <>
      <ShareTitle heading="Brand Mobile" title="Unlock Mobile Marketing" />
      {loader ? (
        <Loading />
      ) : (
        <>
          <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands?.map((brand) => (
              <BrandCrad key={brand._id} brand={brand} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default BrandsAll;
