import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  CSSTransition,
  TransitionGroup,
  SwitchTransition,
} from "react-transition-group";
import Hero from "./main/Hero";
import Header from "./main/header";
import Footer from "./main/footer";

export default function Layout(props) {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const router = useRouter();

  return (
    <Fragment>
      <Header activepage={props.pagedata && props.pagedata._id}></Header>
      <TransitionGroup>
        <CSSTransition key={router.asPath} timeout={400} classNames="page-fade">
          <main className="main">
            {props.pagedata && props.pagedata.Hero && (
              <Hero title={!router.isFallback && props.pagedata.Title} />
            )}
            {props.children}
          </main>
        </CSSTransition>
      </TransitionGroup>
      <Footer activepage={props.pagedata && props.pagedata._id}></Footer>
    </Fragment>
  );
}
