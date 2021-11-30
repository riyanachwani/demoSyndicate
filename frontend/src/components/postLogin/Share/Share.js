import React, { useEffect, useState } from "react";

import Axios from "axios";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const QRCode = require("qrcode.react");

export default function Share() {
  const token = localStorage.getItem("token");

  const getUser = async () => {
    console.log("token");
  };
  const [userName, setUserName] = useState("");

  const id = "/" + userName.replace(/\s+/g, "").toLowerCase();
  console.log(id);
  useEffect(() => {
    Axios.get(
      `http://localhost:3001/read/${localStorage.getItem("userId")}`
    ).then((response) => {
      setUserName(response.data.name);
    });
  }, []);
  const [userdata, setUserdata] = useState({
    name: "",
    aboutSection: {
      aboutTitle: "",
      aboutSubTitle: "",
    },
  });

  useEffect(() => {
    Axios.get(
      `http://localhost:3001/read/${localStorage.getItem("userId")}`
    ).then((response) => {
      setUserdata({
        name: response.data.name,
        email: response.data.email,
        location: response.data.location,
        aboutSection: {
          aboutTitle: response.data.template.aboutSection.aboutTitle,
          aboutSubTitle: response.data.template.aboutSection.aboutSubTitle,
        },
      });
    });
  }, []);

  useEffect(() => {
    getUser();
  }, []);
  if (!token) {
    window.location.href = "/";
  } else {
    return (
      <>
        <section class="py-5 bg-white my-5">
          <div class="container my-5">
            <h1 className="text-center ">
              Share Your Business Website with other
            </h1>

            <div class="d-flex justify-content-center my-5">
              <div class="col-lg-5 col-12">
                <div class="h-100 p-5 border text-center text-light rounded-5  gradient-1">
                  <h3>{userdata.name}</h3>
                  <p>{userdata.email}</p>
                  <p>{userdata.location} </p>
                  <div className="p-5 bg-light rounded-5 my-4">
                    <QRCode
                      value={`https://syndicate-navy.vercel.app${id}`}
                      size="150"
                    />
                  </div>

                  <div className="d-flex justify-content-center p-3 bg-light rounded-5">
                    <FacebookShareButton
                      url={`https://syndicate-navy.vercel.app${id}`}
                    >
                      <FacebookIcon
                        size={"3rem"}
                        style={{
                          margin: "10px",
                        }}
                        round
                      />
                    </FacebookShareButton>
                    <TwitterShareButton
                      url={`https://syndicate-navy.vercel.app${id}`}
                    >
                      <TwitterIcon
                        size={"3rem"}
                        style={{
                          margin: "10px",
                        }}
                        round
                      />
                    </TwitterShareButton>
                    <WhatsappShareButton
                      url={`https://syndicate-navy.vercel.app${id}`}
                    >
                      <WhatsappIcon
                        size={"3rem"}
                        style={{
                          margin: "10px",
                        }}
                        round
                      />
                    </WhatsappShareButton>
                    <LinkedinShareButton
                      url={`https://syndicate-navy.vercel.app${id}`}
                    >
                      <LinkedinIcon
                        size={"3rem"}
                        style={{
                          margin: "10px",
                        }}
                        round
                      />
                    </LinkedinShareButton>
                    <TelegramShareButton
                      url={`https://syndicate-navy.vercel.app${id}`}
                    >
                      <TelegramIcon
                        size={"3rem"}
                        style={{
                          margin: "10px",
                        }}
                        round
                      />
                    </TelegramShareButton>
                    <EmailShareButton
                      url={`https://syndicate-navy.vercel.app${id}`}
                    >
                      <EmailIcon
                        size={"3rem"}
                        style={{
                          margin: "10px",
                        }}
                        round
                      />
                    </EmailShareButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
