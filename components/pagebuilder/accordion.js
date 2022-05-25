import { useEffect, useState, Fragment, useCallback } from "react";

export default function Accordion({ sectiondata }) {
  const [accordions, setAccords] = useState([]);

  useEffect(() => {
    sectiondata["Accordions"] &&
      setAccords(
        sectiondata["Accordions"].map((item) => {
          return {
            isopen: false,
            title: item.value.Title,
            content: item.value.Content,
          };
        })
      );
  }, [sectiondata]);

  const handleOpen = (target) => {
    setAccords(
      accordions.map((item, index) => {
        return index == target ? { ...item, isopen: !item.isopen } : item;
      })
    );
  };

  return (
    <section className="section--accordion">
      <div className="content--accordion container">
        {accordions.map((item, index) => {
          return (
            <div className="accordion-item" key={index}>
              <div
                className={`item__header ${item.isopen ? "open" : "closed"}`}
                onClick={(e) => handleOpen(index)}
                dangerouslySetInnerHTML={{
                  __html: item.title,
                }}
              ></div>
              <div
                className={`item__content ${item.isopen ? "open" : "closed"}`}
                dangerouslySetInnerHTML={{
                  __html: item.content,
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
