import { Stack } from "@chakra-ui/react";
import React from "react";


 const OffersBannerData=[
  {
      img:"https://cdn01.pharmeasy.in/dam/banner/banner/760565c68b5-VIBES27.jpg",
  },
  {
      img:"https://cdn01.pharmeasy.in/dam/banner/banner/cb2f371c006-yayy550_bau.jpg"
  }
 
]

const OffersBanner = () => {
  return (
    <div>
      <Stack
        direction="horizontal"
        gap="20px"
        // justify="space-between"
        width="95%"
        margin="auto"
        marginTop="50px"
        
      >
        {OffersBannerData.map((el, i) => (
          <img
            style={{
              borderRadius: "15px",
              width: "527px",
              height: "227px",
              cursor: "pointer",
            }}
            key={i}
            src={el.img}
            alt=""
          />
        ))}
      </Stack>
    </div>
  );
};

export default OffersBanner;
