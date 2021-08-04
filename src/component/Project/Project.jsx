import React, { useEffect } from "react";
import { useState } from "react";
import IntroList from "../ProjectList/ProjectList";
import "./Project.scss";
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
  } from "../../data"

const Intro = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);


  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() =>{

    switch(selected){
        case "featured":
            setData(featuredPortfolio);
            break;
        case "web":
            setData(webPortfolio);
            break;
        case "mobile":
            setData(mobilePortfolio);
            break;
        case "design":
            setData(designPortfolio);
            break;
        case "content":
            setData(contentPortfolio);
            break;
        default:
            setData(featuredPortfolio)
    }
  },[selected])

  return (
    <div className="intro" id="intro">
      <h1>Project</h1>
      <ul>
        {list.map((item) => (
          <IntroList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
          {
              data.map((data) =>(   
        <div className="item">
          <img
            src={data.img}
            alt=""
          />
          <h3>{data.title}</h3>
        </div>
         ))
        }
      </div>
    </div>
  );
};

export default Intro;
