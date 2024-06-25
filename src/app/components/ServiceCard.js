
const ServiceCard = ({ title, services }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 m-4 w-full sm:w-1/2 lg:w-1/3">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <ul className="list-disc list-inside">
          {services.map((service, index) => (
            <div key={index} className="mb-2">{service}</div>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ServiceCard;
  