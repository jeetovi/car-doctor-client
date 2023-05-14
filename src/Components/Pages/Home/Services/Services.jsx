import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

 

const Services = () => {
    const [Services , setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    })
    return (
      <div className="mt-4">
          <div className="text-center">
            <h3 className="text-3xl text-orange-600"> Our Services</h3>
            <h3 className="text-5xl  "> Our Services Area</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Labore delectus quibusdam consequuntur eum aspernatur tempore cum vel quasi aperiam optio?</p>
        </div>
        <div className="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                Services.map(servis => <ServicesCard
                key={servis._id}
                servis={servis}
                ></ServicesCard>)
            }
        </div>
      </div>
    );
};

export default Services;