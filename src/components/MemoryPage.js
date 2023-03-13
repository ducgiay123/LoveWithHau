import React from "react";
import "./memoryPage.css";
import ReactRoundedImage from "react-rounded-image";
import FirstPicture from "../Asserts/firstPicture.jpg";
import DaLat from "../Asserts/DaLatTime.jpg";
import BirthDay from "../Asserts/Birtday.jpg";
import BanaHill from "../Asserts/BanaHill.jpg";
import Kissing from "../Asserts/kissing.jpg";
const MemoryPage = () => {
  return (
    <div className="memoryPage" id="ourMemory">
      <div className="memoryContainer">
        <div className="memoryTitle">
          <h1>Our Story</h1>
        </div>
        <div className="rowStory">
          <div className="storyPicture">
            <ReactRoundedImage
              image={FirstPicture}
              roundedColor="#fff"
              imageWidth="320"
              imageHeight="320"
              roundedSize="0"
              borderRadius="160"
              style={{ opacity: 0.9 }}
            />
          </div>
          <div className="heartContainer">
            <div className="hearDiv">
              <div className="year">2022</div>
              <div className="month">July</div>
            </div>
          </div>
          <div className="storyContent">
            <h3>The begun day of us</h3>
            <p>
              Meet on the special situation and fall in love unexpectedly and
              the place is her hometown{" "}
              <span style={{ color: "#ff8578", fontWeight: "bold" }}>
                Phu Yen
              </span>{" "}
              provice. At the beginning, the love between us is raw and not
              thing more than social love. Because of that, our love become
              stronger naturally and deeply.
            </p>
          </div>
        </div>
        <div className="verticleLine"></div>

        <div className="rowStory">
          <div className="storyContent">
            <h3>The first traveling together</h3>
            <p>
              After waiting for 6 months we have first traveling together. It is
              romatic for a couple like us{" "}
              <span style={{ color: "#ff8578", fontWeight: "bold" }}>
                Da Lat{" "}
              </span>
              city. It was beautiful memory between. All thing we have done
              toghether are special for me. First hug, first kiss .
            </p>
          </div>

          <div className="heartContainer">
            <div className="hearDiv">
              <div className="year">2023</div>
              <div className="month">Jan</div>
            </div>
          </div>
          <div className="storyPicture">
            <ReactRoundedImage
              image={DaLat}
              roundedColor="#fff"
              imageWidth="320"
              imageHeight="320"
              roundedSize="0"
              borderRadius="160"
            />
          </div>
        </div>
        <div className="rowStory">
          <div className="storyPicture">
            <ReactRoundedImage
              image={BirthDay}
              roundedColor="#fff"
              imageWidth="320"
              imageHeight="320"
              roundedSize="0"
              borderRadius="160"
            />
          </div>
          <div className="heartContainer">
            <div className="hearDiv">
              <div className="year">2022</div>
              <div className="month">July</div>
            </div>
          </div>
          <div className="storyContent">
            <h3>Birthday Girl</h3>
            <p>
              All the purpose of my trip is her special time.
              <span style={{ color: "#ff8578", fontWeight: "bold" }}>
                15, Jan 2023
              </span>
              . It is so good that we could celebrate her birthday toghether.
              That is all my wish at the beginning.
            </p>
          </div>
        </div>
        <div className="rowStory">
          <div className="storyContent">
            <h3>Tripping to my hometown</h3>
            <p>
              It took a while for us to decide heading to my family place -
              <span style={{ color: "#ff8578", fontWeight: "bold" }}>
                Da Nang
              </span>
              We traveled all the city, all the best place in the city. All the
              purpose of is kidnapping her to my family and the result was so
              good for me. Luckily, my family are fond of her so much. :))
            </p>
          </div>

          <div className="heartContainer">
            <div className="hearDiv">
              <div className="year">2023</div>
              <div className="month">Feb</div>
            </div>
          </div>
          <div className="storyPicture">
            <ReactRoundedImage
              image={BanaHill}
              roundedColor="#fff"
              imageWidth="320"
              imageHeight="320"
              roundedSize="0"
              borderRadius="160"
            />
          </div>
        </div>
        <div className="rowStory" style={{ marginBottom: "70px" }}>
          <div className="storyPicture">
            <ReactRoundedImage
              image={Kissing}
              roundedColor="#fff"
              imageWidth="320"
              imageHeight="320"
              roundedSize="0"
              borderRadius="160"
            />
          </div>
          <div className="heartContainer">
            <div className="hearDiv">
              <div className="year">2023</div>
              <div className="month">Feb</div>
            </div>
          </div>
          <div className="storyContent">
            <h3>The ending of first journey</h3>
            <p>
              This was the most tough time for us to deal with, after we
              realized that distance love had back again. I had to back to
              <span style={{ color: "#ff8578", fontWeight: "bold" }}>
                Finland
              </span>
              . We were so sad to say "good bye" and Hugging, Kissing and Crying
              were the last memories of us. I appreciated her so much for the
              best journey we have been through.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryPage;
