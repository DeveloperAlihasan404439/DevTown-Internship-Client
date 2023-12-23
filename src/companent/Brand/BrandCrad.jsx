import { Link } from "react-router-dom";
import "./BrandCrad.css";
const BrandCrad = ({ brand }) => {
  const { brand_name, brand_image } = brand;
  return (
    <Link to={`/mobileBrand/${brand_name}`} className="card card-compact shadow-xl relative box-condidate">
      <img src={brand_image} alt="Shoes" className="h-[350px] rounded-lg" />
      <div className="content flex flex-col items-center justify-center">
        <h1 className="text-2xl font-medium tex-white tracking-[3px] uppercase">
          {brand_name}
        </h1>
      </div>
    </Link>
  );
};

export default BrandCrad;
