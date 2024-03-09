import React from "react";
import "../../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assets/images/hero-img01.jpg";
import heroImg02 from "../../assets/images/hero-img02.jpg";
import heroVideo from "../../assets/images/hero-video.mp4";
import worldImg from "../../assets/images/world.png";
import Subtitle from "../../shared/Subtitle";
import SearchBar from "../../shared/SearchBar";
const Home = () => {
  return (
    <>
      {/* ============== hero section start ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content">
                <div className="hero_subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know before you go"} />
                  <img src={worldImg} alt="worldImg" />
                </div>
                <h1>
                  Each journey is a chapter in the book of{" "}
                  <span className="highlight">Memories</span>
                </h1>
                <p>
                  Travel isn't just about reaching a place; it's about
                  discovering ourselves amidst the world's beauty. From tranquil
                  beaches to towering mountains, each journey is a story waiting
                  to be told. Let's wander, not just to escape, but to find
                  ourselves in this extraordinary world
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box ">
                <img src={heroImg} alt="heroImg" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box mt-4">
                <video src={heroVideo} alt="heroVideo" autoPlay muted loop />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box mt-5">
                <img src={heroImg02} alt="heroImg02" />
              </div>
            </Col>
            <SearchBar/>
          </Row>
        </Container>
      </section>
      {/* ============== hero section end ============= */}
    </>
  );
};

export default Home;
