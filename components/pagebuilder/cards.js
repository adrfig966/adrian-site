import { useEffect, useState, Fragment, useCallback } from "react";

function condLink(elemclass, content, link) {
  if (link) {
    return (
      <a className={elemclass} href={link}>
        {content}
      </a>
    );
  } else {
    return <p className={elemclass}>{content}</p>;
  }
}

export default function Cards({ sectiondata }) {
  console.log("cards fam", sectiondata);
  return (
    <section className="section--cards">
      <div className="content--cards container">
        <div
          className="blurb-container"
          dangerouslySetInnerHTML={{ __html: sectiondata["blurb"] }}
        ></div>
        <div className="cards-container">
          {sectiondata["Cards"] &&
            sectiondata["Cards"].map((item, index) => {
              return (
                <div className="card-item" key={index}>
                  <div
                    className="card-image"
                    style={{
                      backgroundImage: `url(${
                        item.value["Featured Image"] &&
                        item.value["Featured Image"].path
                      })`,
                    }}
                  >
                    {condLink(
                      "image-hover",
                      item.value["Label"] ? item.value["Label"] : "View More",
                      item.value["Link"]
                    )}
                  </div>
                  <div
                    className="card-text"
                    dangerouslySetInnerHTML={{
                      __html: item.value && item.value.Content,
                    }}
                  ></div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
