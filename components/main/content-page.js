import { useRouter } from "next/router";
import { useEffect, useState, Fragment } from "react";
import { dynamic } from "next/dynamic";

export default function ContentPage({ pagedata }) {
  const router = useRouter();
  const [builder, setBuilder] = useState([]);

  //Maps to block files
  const buildermap = {
    singlesection: "single",
    splitsection: "split",
    accordions: "accordion",
    cards: "cards",
  };

  //When pagedata changes, import the required component files as needed.
  //Component names in CMS  are mapped to file names via above object.
  //If not found a fallback will be displayed,
  //Dynamic imports are used to prevent loading all components at once.
  useEffect(() => {
    var builderresult =
      pagedata &&
      pagedata.LayoutBuilder &&
      pagedata.LayoutBuilder.map(async (component) => {
        try {
          const Block = (
            await import("../pagebuilder/" + buildermap[component.component])
          ).default;
          return <Block sectiondata={component.settings}></Block>;
        } catch (e) {
          return <div>Component not found</div>;
        }
      });

    builderresult &&
      Promise.all(builderresult).then((result) => {
        setBuilder(result);
      });
  }, [pagedata]);

  if (router.isFallback || !pagedata) {
    return <div>Loading . . .</div>;
  }

  return <Fragment>{builder.map((section) => section)}</Fragment>;
}
