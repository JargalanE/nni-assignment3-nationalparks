import Navbar from "./Navbar";

const SERVICES = [
  "Service 1",
  "Service 2",
  "Service 3",
  "Service 4",
  "Service 5",
  "Service 6",
  "Service 7",
  "Service 8",
  "Service 9",
  "Service 10",
  "Service 11",
  "Service 12",
  "Service 13",
  "Service 14",
  "Service 15",
  "Service 16",
  "Service 17",
  "Service 18",
];

function Services() {
  return (
    <div className="services-section">

      <h2 className="title">SERVICES</h2>

      <div className="services-grid">

        {SERVICES.map((service, index) => (

          <div className="service-card" key={index}>

            <div className="service-image" />
            <button className="service-button">
              {service.toUpperCase()}
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Services;

  