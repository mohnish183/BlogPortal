import React from "react";
import { useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { StoreData } from "../Store/Store";
import "../ComponentUI/DynamicCompo.css";
function DynamicCompo() {
  const id = useParams().id;
  const Navigate = useNavigate();
  console.log(id);
  const contextData = useContext(StoreData);
  let titleName;
  return (
    <>
      <div className="Dynamic-container">
        {contextData.newsData
          .filter((item, index) => parseInt(id) === item.id)
          .map((item, index) => {
            titleName = item.category;
            return (
              <>
                <div className="heading">
                  <h1>{item.title}</h1>
                </div>
                <div className="image">
                  <img src={item.image} alt="not found" />
                </div>
                <div className="discription">
                  <p>{item.description}</p>
                </div>
                <button onClick={() => Navigate(-1)}>Back</button>
              </>
            );
          })}
      </div>

      <div className="Dynamic-container-2">
        {contextData.newsData
          .filter(
            (item, index) =>
              index >= parseInt(id) &&
              index < parseInt(id) + 3 &&
              item.category === titleName
          )
          .map((item, index) => {
            return (
              <div key={index}>
                <div className="flex_container2">
                  <Link to={`/detail/${item.id}`}>
                    <div className="image-box-1">
                      <img src={item.image} alt="" />
                    </div>
                  </Link>
                  <div className="content">
                    <Link to={`/detail/${item.id}`}>
                      <h1 className="title-1">
                        {item.title.split(/(\s+)/).slice(0, 20)}...
                      </h1>
                    </Link>

                    <p>{item.description.split(/(\s+)/).slice(0, 40)}...</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default DynamicCompo;
