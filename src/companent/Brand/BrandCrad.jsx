import './BrandCrad.css'
const BrandCrad = ({ brand }) => {
  const { brand_name, brand_image } = brand;
  return (

      <div className="card card-compact shadow-xl relative box-condidate">
          <img
            src={brand_image}
            alt="Shoes"
            className="h-[350px] rounded-lg"
          />
          <div className="content flex flex-col items-center justify-center">
        <h1 className='text-2xl font-medium tex-white'>{brand_name}</h1>
      </div>
      </div>

  );
};

export default BrandCrad;
