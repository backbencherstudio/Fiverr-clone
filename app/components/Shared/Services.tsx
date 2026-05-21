import React from "react";
import Container from "../Reusable/Container";

export default function Services() {
  const services = [
    { id: 1, name: "Trending 🔥" },
    { id: 2, name: "Graphics & Design" },
    { id: 3, name: "Digital Marketing" },
    { id: 4, name: "Writing & Translation" },
    { id: 5, name: "Video & Animation" },
    { id: 6, name: "Music & Audio" },
    { id: 7, name: "Programming & Tech" },
    { id: 8, name: "Business" },
    { id: 10, name: "Lifestyle" },
    { id: 11, name: "Finance" },
    { id: 12, name: "AI Services" },
    { id: 13, name: "Personal Growth" },
  ];
  return (
    <div className="border-b border-[#e4e5e7]">
      <Container>
        <div className="flex gap-6 overflow-hidden ">
          {services.map((service) => (
            <p
              key={service.id}
              className=" text-base font-medium py-2 text-[#74767e] cursor-pointer transition-colors text-nowrap border-b-2 border-transparent hover:border-b-2 hover:border-green-600"
            >
              {service.name}
            </p>
          ))}
        </div>
      </Container>
    </div>
  );
}
