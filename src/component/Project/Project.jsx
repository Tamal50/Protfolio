import React, { useEffect } from "react";
import { useState } from "react";
import IntroList from "../ProjectList/ProjectList";
import icon from '../../image/arrow.svg'
import "../../Style/Project.scss";
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
  } from "../../Api/data"

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
    <div className="project" id="project">
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
          <img className="icon" src={icon} alt="" />
        </div>
         ))
        }
      </div>
    </div>
  );
};

export default Intro;
