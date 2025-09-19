// css imports
import "@/styles/_main.css";
import "@/styles/core.css";
import "@/styles/fonts.css";
import "@/styles/responsive.css";

import Head from "next/head";
import { useEffect } from "react";

import { navServices, navGuest, openExt } from "@/lib/pageNav";

export default function Home() {

  useEffect(() => {
    document.querySelectorAll(".attachDisclaimer").forEach((el) => {
      (el as HTMLElement).title = `see "Disclaimer" linked below for details.`;
    });
  }, []);

  return (
    <main>
      <Head>
        <title>Seven Crowns Consulting</title>
        <meta name="og:type" content="website" />
        <meta name="og:title" content="Seven Crowns Consulting" />
        <meta
          name="og:image"
          content="https://sevencrownsconsulting.vercel.app/web/preview.png"
        />
        <meta
          name="og:url"
          content="https://sevencrownsconsulting.vercel.app"
        />
        <meta
          name="og:description"
          content="Consultancy services closer to home."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GourmetDayLife" />
      </Head>
      <header>
        <div>
          <img
            src="/images/logo.png"
            alt="Seven Crowns Consulting"
            className="sccLogo"
          />
        </div>
        <div className="navBar">
          <p onClick={navServices}>SERVICES</p>
          <p onClick={navGuest}>GUEST</p>
        </div>
      </header>
      <div className="frontPage"></div>
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
  );
}
