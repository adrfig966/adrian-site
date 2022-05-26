export default function SplitColumn({ sectiondata }) {
  const bgimage = {
    backgroundImage: `url(${
      sectiondata.imagehalf && sectiondata.imagehalf.path
    })`,
  };

  const flexalign =
    sectiondata.align == "Center" ? "self-center" : "self-stretch";

  const splitspace = sectiondata.gap ? "" : "no-space";

  return (
    <section className={`section--split`}>
      <div
        className={`column-container container  ${
          sectiondata.flipsection ? "split-flip" : ""
        } ${splitspace}`}
      >
        <div
          className={`split__image-half min-h-350 lg:min-h-${
            sectiondata.minheight && sectiondata.minheight
          }`}
          style={bgimage}
        ></div>
        <div
          className={`split__text-half content ${flexalign}`}
          dangerouslySetInnerHTML={{ __html: sectiondata["texthalf"] }}
        ></div>
      </div>
    </section>
  );
}
