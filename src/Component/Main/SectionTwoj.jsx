import React from "react";
import { AppstoreOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import logo1 from "../../assets/a.png";
import logo2 from "../../assets/aa.png";
import logo3 from "../../assets/aaa.png";
import logo4 from "../../assets/aaaa.png";
import logo5 from "../../assets/aaaaa.png";

const items = [
  {
    key: "sub",
    label: "Football League",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "1",
        label: (
          <div className="flex items-center">
            <img
              src={logo1}
              alt="Worldcup Qatar 2022"
              style={{ width: 20, marginRight: 10 }}
            />
            Worldcup Qatar 2022
          </div>
        ),
      },
      {
        key: "2",
        label: (
          <div className="flex items-center">
            <img
              src={logo2}
              alt="Champions League"
              style={{ width: 20, marginRight: 10 }}
            />
            Champions League
          </div>
        ),
      },
      {
        key: "3",
        label: (
          <div className="flex items-center">
            <img
              src={logo3}
              alt="Premier League"
              style={{ width: 20, marginRight: 10 }}
            />
            Premier League
          </div>
        ),
      },
      {
        key: "4",
        label: (
          <div className="flex items-center">
            <img
              src={logo4}
              alt="La Liga"
              style={{ width: 20, marginRight: 10 }}
            />
            La Liga
          </div>
        ),
      },
      {
        key: "5",
        label: (
          <div className="flex items-center">
            <img
              src={logo5}
              alt="Ligue 1"
              style={{ width: 20, marginRight: 10 }}
            />
            Ligue 1
          </div>
        ),
      },
    ],
  },
];

function SectionTwoj() {
  const onClick = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={onClick}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub2"]}
      mode="inline"
      items={items}
    />
  );
}

export default SectionTwoj;
