import { Box, Heading, Stack } from '@chakra-ui/react'
import React from 'react'


const ShopByCategoriesData = [
    {
        img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/a7a03f6764393c65bab22e56de576a59.png?f=png?dim=256x0",
        heading:"Mega Clearance Sale"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/1e622b0308ec3ab48887512eaa3488a5.png?f=png?dim=256x0",
        heading:"Personal Care"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/cfc8ee511609321e91eb86a34f5b2885.png?f=png?dim=256x0",
        heading:"Health Care Device"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/335dae76832d370c94f0440f5ba89e1f.png?f=png?dim=256x0",
        heading:"Health Food & Drinks"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/dc96175686f135b5a22d1e57165d0246.png?f=png?dim=256x0",
        heading:"Home Care"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f692f7243b8036ed97d99a7973dd42b3.png?f=png?dim=256x0",
        heading:"Mother and Baby Care"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/154dec0567b23244b7dcbf2158d39eee.png?f=png?dim=256x0",
        heading:"Skin Care"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/514d0d7d01a63502b4ebfec9ae26f4d2.png?f=png?dim=256x0",
        heading:"Fitness Supplement"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/d1b29f7a2b5f3d62a3d47b617aceef1b.png?f=png?dim=256x0",
        heading:"Sexual Wellness"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ecad9a974e003fb987858b3ee81413c6.png?f=png?dim=256x0",
        heading:"Ayurvedic Care"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/105ceca515ee30509f93309ae75306aa.png?f=png?dim=256x0",
        heading:"Diabetic Care"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b1a199bf20a9325798872b8685114856.png?f=png?dim=256x0",
        heading:"Health Condition"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/403b8ada7b113c7cb2e8d09e3420edfa.png?f=png?dim=256x0",
        heading:"Beauty"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ecad9a974e003fb987858b3ee81413c6.png?f=png?dim=256x0",
        heading:"Ayurvedic Care"
    }

]


    const ShopByCategories = () => {
        return (
          <div style={{margin:"auto", width:"95%"}}>
              <Heading fontSize="26px" textAlign="left" marginTop="60px">
              Shop By Categories
              </Heading>
             
              <Stack direction="horizontal" gap="30px"
              justify="space-between" overflow="scroll" marginTop="25px">
                  {ShopByCategoriesData.map((el,i) => (
                      <Box key={i} width="180px" height="212px">
                          <img style={{borderRadius:"5px",width:"180px", height:"172px",cursor:"pointer"}} src={el.img}
                          alt=''/>
                          <Box width="180px">
                              <p style={{fontWeight:"500"}}>{el.heading}</p>
                          </Box>
                      </Box>
                  ))}
              </Stack>
          </div>
        )
      }

export default ShopByCategories