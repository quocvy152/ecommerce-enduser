import { images } from "@/assets/assets";
import { Avatar, IconButton as Button } from "@mui/material";
import { CardActionNavBarCustomer } from "../CardActionNavBarCustomer/CardActionNavBarCustomer";
import { useState } from "react";

const NavBarCustomer = () => {
  const [showCardAction, setShowCardAction] = useState(false);

  const onHandleClickCardAction = (): void => {
    setShowCardAction((prev) => !prev);
  };

  return (
    <div className="container-nav-bar-customer">
      <Button aria-label="expand" onClick={onHandleClickCardAction}>
        <Avatar alt="Remy Sharp" src={images.ic_user_default} />
      </Button>

      {showCardAction ? <CardActionNavBarCustomer /> : <></>}
    </div>
  );
};

export default NavBarCustomer;
