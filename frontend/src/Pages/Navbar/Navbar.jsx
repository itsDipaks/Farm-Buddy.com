import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMobile } from "react-icons/ai";
import styles from "./navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { TbDiscount2, TbPrescription } from "react-icons/tb";
import PincodeDrawer from "../PincodeDrawer/PincodeDrawer";
import Login from "../Login/Login";
import Logo from "../../Utils/Images/logo .png"
import { Box, Button, Hide } from "@chakra-ui/react";

const Navbar = (props) => {
  const navigate = useNavigate();
  const GoToHomePage = () => {
    navigate("/");
  };
  return (
    <Box
      style={{
        backgroundColor: "#ffffff",
        position: "sticky",
        top: "0px",
        zIndex: "1000",
        borderBottom: "1px solid #dfdfdf",
        height: "62px",
      }}
    >
      <Box className={styles.navbar}>
        <Box className={styles.imageDiv}>
          <img
            style={{ cursor: "pointer" }}
            onClick={GoToHomePage}
            src={Logo}
            alt=""
            width="40px"
            // height="40px"
          />
        </Box>
        <Box className={styles.LinkDiv}>

         <Hide breakpoint='(max-width: 600px)' >
          <div style={{ display: "flex" }}>
            <PincodeDrawer />
            <MdKeyboardArrowDown className={styles.downArrowIcon} />
          </div>
          </Hide>
          <div className={styles.links2}>
          

         <Hide breakpoint='(max-width: 600px)' >

            <div>
              <Link
                href="https://apps.apple.com/in/app/pharmeasy-healthcare-app/id982432643"
                target={"_blank"}
              >
                <Button backgroundColor={"#EEF4FE"} fontSize="14px">
                  <AiOutlineMobile
                    style={{ fontSize: "25px", marginRight: "10px" }}
                  />
                  Download App
                </Button>
              </Link>
            </div>

    
            <div className={styles.links2Icons}>
              <HiOutlineUser  style={{ fontSize: "20px", marginRight: "0px" }} />
              <Login />
            </div>
            </Hide>
            <div className={styles.links2Icons}>
              <TbPrescription style={{ fontSize: "20px", marginRight: "10px" }} />
              <Link to="/dashboard" _hover={{ 'text-decoration-line': 'underline','text-decoration-style': 'dotted'}} href="#offers" style={{ fontSize: "14px", fontWeight: "500" }}>
                Admin
              </Link>
            </div>
            <div className={styles.links2Icons}>
              <BsCart2 style={{ fontSize: "20px", marginRight: "10px" }} />
              <Link to="/cartpage" _hover={{ 'text-decoration-line': 'underline','text-decoration-style': 'dotted'}} href="#" style={{ fontSize: "14px", fontWeight: "500" }}>
                Cart
              </Link>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;