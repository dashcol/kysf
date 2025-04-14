import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../../assets/img/bannerPost.webp";
import "animate.css";
import TrackVisibility from "react-on-screen";

function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setisDeleting] = useState(false);

  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;

    let updatedtext = isDeleting
      ? fulltext.substring(0, text.length - 1)
      : fulltext.substring(0, text.length + 1);
    setText(updatedtext);
    if (isDeleting) {
      setDelta((prev) => prev / 2);
    }
    if (!isDeleting && updatedtext == fulltext) {
      setisDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedtext == "") {
      setisDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate-animated animate_fadeIn" : ""}
                >
                  <span className="tagline">Welcome to KYS</span>
                  <h1>
                    {"Derived From Destiny"}
                    <br />
                  </h1>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>

                  <button onClick={() => console.log("clicked")}>
                    Let's Connect
                    <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="headerImg" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
