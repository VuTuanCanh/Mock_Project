import { Divider } from "@material-ui/core";
import { Button } from "@mui/base";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import * as React from "react";
import banner from "../../assets/custom_banner_submenu.jpg";
import { Link } from "react-router-dom";

export interface INestedListProps {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showMenu: boolean;
}

export default function NestedList(props: INestedListProps) {
  const [openMenu, setOpenMenu] = React.useState<number>(0);
  const [openBagShoeSub, setOpenBagShoeSub] = React.useState<number>(0);

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 300,
        bgcolor: "background.paper",
        height: "100%",
        zIndex: "20",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <Button className="" onClick={() => props.setShowMenu(!props.showMenu)}>
            <CloseIcon />
          </Button>
        </ListSubheader>
      }
    >
      <ListItemButton>
        <Link to={"/"}>
          <ListItemText primary="Home" />
        </Link>
      </ListItemButton>
      <Divider />

      <ListItemButton
        onClick={() => {
          if (openMenu) {
            setOpenMenu(0);
          } else {
            setOpenMenu(10);
          }
        }}
      >
        <ListItemText
          primary={<Link to={"/bags-shoes"}>Bags & Shoes</Link>}
          sx={{ fontWeight: "bold !important" }}
        />
        {openMenu === 10 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider />

      {/* ==================================================================== */}
      <Collapse in={openMenu === 10} timeout="auto">
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => {
              if (openBagShoeSub) {
                setOpenBagShoeSub(0);
              } else {
                setOpenBagShoeSub(1);
              }
            }}
          >
            <ListItemText primary={<Link to={"/shoes"}>Shoes</Link>} />
            {openBagShoeSub === 1 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Divider />
          <Collapse in={openBagShoeSub === 1} timeout="auto">
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 8 }}>
                <ListItemText primary={<Link to={"/women-shoes"}>Women Shoes</Link>} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 8 }}>
                <ListItemText primary={<Link to={"/men-shoes"}>Men Shoes</Link>} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 8 }}>
                <ListItemText primary={<Link to={"/boots"}>Boots</Link>} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 8 }}>
                <ListItemText primary={<Link to={"/casual-shoes"}>Casual Shoes</Link>} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 8 }}>
                <ListItemText primary={<Link to={"/flip-flops"}>Flip Flops</Link>} />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Collapse>

      <Collapse in={openMenu === 10} timeout="auto">
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => {
              if (openBagShoeSub) {
                setOpenBagShoeSub(0);
              } else {
                setOpenBagShoeSub(2);
              }
            }}
          >
            <ListItemText primary={<Link to={"/luggage-bags"}>Luggage & Bags</Link>} />
            {openBagShoeSub === 2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Divider />
          <Collapse in={openBagShoeSub === 2} timeout="auto">
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 8 }}>
                <ListItemText primary={<Link to={"/stylish-backpacks"}>Stylish Backpacks</Link>} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 8 }}>
                <ListItemText primary={<Link to={"/shoulder-bags"}>Shoulder Bags</Link>} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 8 }}>
                <ListItemText primary={<Link to={"/crossbody-bags"}>Crossbody Bags</Link>} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 8 }}>
                <ListItemText primary={<Link to={"/briefcases"}>Briefcases</Link>} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 8 }}>
                <ListItemText primary={<Link to={"/luggage-travel"}>Luggage & Travel</Link>} />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Collapse>

      <Collapse in={openMenu === 10} timeout="auto">
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => {
              if (openBagShoeSub) {
                setOpenBagShoeSub(0);
              } else {
                setOpenBagShoeSub(3);
              }
            }}
          >
            <ListItemText primary="Other Bags & Accessories" />
            {openBagShoeSub === 3 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Divider />
          <Collapse in={openBagShoeSub === 3} timeout="auto">
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 8 }}>
                <ListItemText
                  primary={<Link to={"/cosmetic-bags-cases"}>Cosmetic Bags & Cases</Link>}
                />
              </ListItemButton>
              <ListItemButton sx={{ pl: 8 }}>
                <ListItemText
                  primary={<Link to={"/wallets-card-holders"}>Wallets & Card Holders</Link>}
                />
              </ListItemButton>
              <ListItemButton sx={{ pl: 8 }}>
                <ListItemText primary={<Link to={"/luggage-covers"}>Luggage Covers</Link>} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 8 }}>
                <ListItemText primary={<Link to={"/passport-covers"}>Passport Covers</Link>} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 8 }}>
                <ListItemText
                  primary={<Link to={"/bag-parts-accessories"}>Bag Parts & Accessories</Link>}
                />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Collapse>

      <Collapse in={openMenu === 10} timeout="auto">
        <List component="div" disablePadding>
          <ListItemButton>
            <img src={banner} alt="banner" />
          </ListItemButton>
          <Divider />
        </List>
      </Collapse>

      {/* ================================================================= */}

      <ListItemButton
        onClick={() => {
          if (openMenu) {
            setOpenMenu(0);
          } else {
            setOpenMenu(20);
          }
        }}
      >
        <ListItemText primary="Shoes" />
        {openMenu === 20 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider />
      <Collapse in={openMenu === 20} timeout="auto">
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary={<Link to={"/women-shoes"}>Women Shoes</Link>} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary={<Link to={"/men-shoes"}>Men Shoes</Link>} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary={<Link to={"/boots"}>Boots</Link>} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary={<Link to={"/casual-shoes"}>Casual Shoes</Link>} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary={<Link to={"/flip-flops"}>Flip Flops</Link>} />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton
        onClick={() => {
          if (openMenu) {
            setOpenMenu(0);
          } else {
            setOpenMenu(30);
          }
        }}
      >
        <ListItemText primary="Other Bags & Accessories" />
        {openMenu === 30 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider />
      <Collapse in={openMenu === 30} timeout="auto">
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText
              primary={<Link to={"/cosmetic-bags-cases"}>Cosmetic Bags & Cases</Link>}
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText
              primary={<Link to={"/wallets-card-holders"}>Wallets & Card Holders</Link>}
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary={<Link to={"/luggage-covers"}>Luggage Covers</Link>} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary={<Link to={"/passport-covers"}>Passport Covers</Link>} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText
              primary={<Link to={"/bag-parts-accessories"}>Bag Parts & Accessories</Link>}
            />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton>
        <ListItemText primary="Contact Us" />
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemText primary="About Us" />
      </ListItemButton>
    </List>
  );
}
