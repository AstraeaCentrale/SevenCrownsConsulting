// css imports
import "@/styles/_main.css";
import "@/styles/core.css";
import "@/styles/fonts.css";
import "@/styles/responsive.css";

import Head from "next/head";
import { useEffect, useState } from "react";

// js function imports
import { navGuest, navHome, openExt } from "@/lib/pageNav";

export default function Services() {
  const [snackbarMsg, setSnackbarMsg] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);

  // Show snackbar with message
  const showSnackbarMsg = (msg: string) => {
    setSnackbarMsg(msg);
    setShowSnackbar(true);
    setTimeout(() => {
      setShowSnackbar(false);
    }, 2500);
  };

  useEffect(() => {
    document.querySelectorAll(".attachDisclaimer").forEach((el) => {
      (el as HTMLElement).title = `see "Disclaimer" linked below for details.`;
    });
  }, []);

  return (
    <>
      <main>
        <Head>
          <title>Our Services</title>
        </Head>
        <div className="snackOVL">
          <div
            id="snackbar"
            className={showSnackbar ? "snackbar show" : "snackbar"}
          >
            {snackbarMsg}
          </div>
        </div>
        <header>
          <div>
            <img
              src="/images/logo.png"
              alt="Seven Crowns Consulting"
              className="sccLogo"
            />
          </div>
          <div className="navBar">
            <p onClick={navHome}>HOME</p>
            <p onClick={navGuest}>GUEST</p>
          </div>
        </header>
        <div
          className="frontPage"
          style={{
            height: "25rem",
            backgroundImage: `url("https://images.unsplash.com/photo-1633114128814-11fac33f707b?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            backgroundPosition: "center center",
            backgroundAttachment: "initial",
          }}
        ></div>
        <div className="guestServView">
          <div>
            <h1>Our Services</h1>
            <br />
            <p>
              Seven Crowns Consulting offers a wide range of services that cater
              to each use case:
            </p>
            <br />
            <br />
            <h2>Legal</h2>
            <br />
            <p>
              Our team of legal professionals is dedicated to providing expert
              advice and representation in various areas of law, including
              corporate law, intellectual property, contract law, and more.
            </p>
            <br />
            <p>
              We work closely with our clients to understand their unique needs
              and develop tailored solutions that align with their business
              goals.
            </p>
            <br />
            <br />
            <h2>Gaming Development and Services</h2>
            <br />
            <p>
              We offer comprehensive game development services, including game
              design, programming, art creation, and quality assurance.
            </p>
            <br />
            <p>
              Our team of experienced developers and designers work closely with
              clients to effectively bring their game ideas to life, ensuring a
              seamless and engaging gaming experience.
            </p>
            <br />
            <br />
            <h2>Information Technology</h2>
            <br />
            <p>
              Our IT services encompass a wide range of solutions, including
              network infrastructure, cybersecurity, cloud computing, and IT
              consulting.
            </p>
            <br />
            <p>
              As the industry-first business firm specializing in cutting-edge
              technologies, we are committed to helping our clients stay ahead
              of the curve in the ever-evolving digital landscape.
            </p>
            <br />
            <br />
            <h1>Inquiries</h1>
            <br />
            <p>
              If you wish to inquire about our services, please do not hesitate
              to contact us by clicking the button below:
            </p>
            <br />
            <button
              onClick={() =>
                showSnackbarMsg(
                  'Please refer to the "Disclaimer" linked in the footer for details.'
                )
              }
            >
              business@sevencrowns.jp
            </button>
          </div>
        </div>
        <footer>
          <div>
            <p>
              Main Office: Osaka Fukoku Seimei Building 19F, 2-4 Komatsubaracho,
              Kita-ku, Osaka 530-0018, Japan
            </p>
            <br />
            <p>
              Phone: <span className="attachDisclaimer">(06) 7276-6262</span>
              &ensp;&bull;&ensp;Email:{" "}
              <span className="attachDisclaimer">inquiries@sevencrowns.jp</span>
              <br />
              <span className="opnDsclmr" onClick={() => openExt("disclaimer")}>
                Disclaimer
              </span>
            </p>
            <br />
            <p>
              © 2018-2025 SCC Ventures, Inc.
              <br />
              based in Japan
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
