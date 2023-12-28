import React from "react";
import "../ComponentUI/Home.css";
import "../ComponentUI/home_media.css";
import travel from "../Image/travel.jpg";
import tech from "../Image/tech.jpg";
import bolly from "../Image/bolly.jpg";
import { StoreData } from "../Store/Store";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

function Home() {
  let homeData = useContext(StoreData);

  return (
    <>
      <div className="home-container">
        <div className="home-image">
          <div className="image1">
            <img src={bolly} alt="" />
          </div>
          <div className="image2">
            <img src={travel} alt="" />
            <img src={tech} alt="" />
          </div>
        </div>
      </div>
      <div className="top-section">
        <h1 className="top-section-heading">The Latest</h1>
        <div className="post-section">
          {homeData.newsData
            .filter((item, index) => index < 3)
            .map((item, index) => {
              return (
                <>
                  <div className="home-item">
                    <img src={item.image} alt="" />
                    <h3 className="title">
                      {item.title.split(/(\s+)/).slice(0, 20)}...
                    </h3>
                    <p>
                      {item.description.split(/(\s+)/).slice(0, 40)}
                      ...
                    </p>
                    <NavLink to={`/detail/${item.id}`}>Click Here...</NavLink>
                  </div>
                </>
              );
            })}
        </div>
      </div>
      <div className="middle-section">
        <h3>Latest Article</h3>
        <div className="article-section2">
          <div className="article-content">
            {homeData.newsData
              .filter((item, index) => index > 54 && index < 59)
              .map((item, index) => {
                return (
                  <>
                    <div className="article-item">
                      <img src={item.image} alt="" />
                      <div className="article-block">
                        <h3 className="title">
                          {item.title.split(/(\s+)/).slice(0, 20)}...
                        </h3>
                        <p>
                          {item.description.split(/(\s+)/).slice(0, 40)}
                          ...
                        </p>
                        <NavLink to={`/detail/${item.id}`}>
                          Click Here...
                        </NavLink>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
          <div className="advertisement">
            <img
              src="https://newspaperads.ads2publish.com/wp-content/uploads/2018/08/giordano-time-wear-upto-50-off-ad-times-of-india-mumbai-21-08-2018-568x945.png"
              alt="not found"
            />
            <img
              src="https://newspaperads.ads2publish.com/wp-content/uploads/2019/02/flipkart-save-on-the-flights-cheaper-flights-elsewhere-ad-times-of-india-bangalore-01-02-2019.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="middle-section">
        <h3>Latest Article-</h3>
        <div className="article-section2 article-section3">
          <div className="advertisement2">
            <img
              src="https://newspaperads.ads2publish.com/wp-content/uploads/2018/08/giordano-time-wear-upto-50-off-ad-times-of-india-mumbai-21-08-2018-568x945.png"
              alt="not found"
            />
          </div>
          <div className="article-content-lower article-content-2">
            {homeData.newsData
              .filter((item, index) => index > 25 && index < 30)
              .map((item, index) => {
                return (
                  <>
                    <div className="article-item-lower article-item2">
                      <img src={item.image} alt="" />
                      <div className="article-block">
                        <h3 className="title-2">
                          {item.title.split(/(\s+)/).slice(0, 20)}...
                        </h3>

                        <NavLink to={`/detail/${item.id}`}>
                          Click Here...
                        </NavLink>
                      </div>
                    </div>
                    <hr />
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
