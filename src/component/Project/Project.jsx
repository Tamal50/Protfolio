import React, { useEffect } from "react";
import { useState } from "react";
import IntroList from "../ProjectList/ProjectList";
import icon from '../../image/arrow.svg'
import "../../Style/Project.scss";
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    templatePortfolio,
    miniPortfolio,
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
      title: "Mobile Responsive",
    },
    {
      id: "template",
      title: "Template",
    },
    {
      id: "mini-project",
      title: "Mini Project",
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
        case "template":
            setData(templatePortfolio);
            break;
        case "mini-project":
            setData(miniPortfolio);
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
          <a className="icon" href={data.link} target="_blank" rel="noreferrer"><img src={icon} alt="" /></a>
        </div>
         ))
        }
      </div>
    </div>
  );
};

export default Intro;
