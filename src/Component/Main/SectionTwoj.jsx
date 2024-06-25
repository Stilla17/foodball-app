import React from "react";
import { AppstoreOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const items = [
  {
    key: "sub2",
    label: "Football League",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "1",
        label: (
          <div className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/e/eb/FIFA_World_Cup_Qatar_2022_Logo.svg"
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
              src="https://upload.wikimedia.org/wikipedia/commons/e/e7/UEFA_Champions_League_logo_2.svg"
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
              src="https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg"
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
              src="https://upload.wikimedia.org/wikipedia/en/7/76/La_Liga_logo.svg"
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
              src="https://upload.wikimedia.org/wikipedia/en/b/ba/Ligue_1_Uber_Eats_2020.svg"
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
    <>
      <Menu
        onClick={onClick}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub2"]}
        mode="inline"
        items={items}
      />
    </>
  );
}

export default SectionTwoj;
