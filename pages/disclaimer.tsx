// css imports
import "@/styles/_main.css";
import "@/styles/fonts.css";
import "@/styles/responsive.css";
import "@/styles/disclaimer.css";

import Head from "next/head";

// js function imports
import { navGuest, openExt } from "@/lib/pageNav";

// https://princess-connect.fandom.com/wiki/Seven_Crowns

export default function Disclaimer() {
  const opnWki = () => {
    window.open(
      "https://princess-connect.fandom.com/wiki/Seven_Crowns",
      "_blank"
    );
  };
  const senriVT = () => {
    window.open("https://youtube.com/@SenriMana", "_blank");
  };
  const mgDBdoc = () => {
    window.open(
      "https://mongodb.com/developer/languages/javascript/nextjs-with-mongodb",
      "_blank"
    );
  };
  const mgDBvod = () => {
    window.open("https://youtu.be/JIlYroSsInU", "_blank");
  };
  const sccSrc = () => {
    window.open(
      "https://github.com/AstraeaCentrale/sevencrownsconsulting",
      "_blank"
    );
  };

  return (
    <main>
      <Head>
        <title>some disclaimer.</title>
        <link
          rel="shortcut icon"
          href="https://astraeacentrale.github.io/senrimana/assets/images/icon/senrimana_redive.png"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          href="https://astraeacentrale.github.io/senrimana/assets/images/icon/senrimana_redive.png"
          type="image/x-icon"
        />
      </Head>
      <div className="dsclmrScrn">
        <h1>some disclaimer here.</h1>
        <br />
        <p>
          as you may have expected,{" "}
          <b
            style={{
              color: "#efbf04",
            }}
          >
            none of this is actually real.
          </b>{" "}
          I've decided to build this website to try out this new innovation as
          part of my efforts to expand the horizons as a cosplayer.
        </p>
        <br />
        <p>
          it just came to my attention that the next character I'm cosplaying is
          closely related to this "org" as she (or he in some cases, see Re:Dive
          lore) is among the members of{" "}
          <span className="scvFdm" onClick={opnWki}>
            Seven Crowns
          </span>
          . following that, I used this opportunity to showcase the next cosplay
          in my suite, which is this one below:
        </p>
        <br />
        <img src="/images/senri_reAlive.png" alt="Senri Mana (Re:Alive ver.)" />
        <p
          style={{
            fontSize: "calc(1em - calc(1em / 4))",
            textAlign: "center",
            fontStyle: "italic",
            marginTop: "0.5rem",
          }}
        >
          Senri Mana (Re:Alive ver.)&ensp;&bull;&ensp;cred. Cygames
        </p>
        <br />
        <p>
          coincidentally, they're one of the characters -- let alone antagonists
          to some extent -- that I personally fell in love with. not because
          they're antagonists (cuz the main character I'm associated with is
          previously one), but they have some sort of a personality that got me
          hooked into. not to mention the dyanmicity between them as I sometimes
          use their voice in some applicable situations. (you may learn more{" "}
          <span className="scvFdm" onClick={senriVT}>
            here
          </span>
          .)
        </p>
        <br />
        <p>but how does this relate to the website, you might ask?</p>
        <br />
        <p>
          as I've previously mentioned before, Senri Mana -- colloquially known
          as Kaiser Insight -- is part of the Seven Crowns.
        </p>
        {/* <br />
        <p>
          in addition, the cards that I'll be handing out in relation to this
          character will employ the new innovation in the form of NFC tags (that
          they can tap to know that they're in the database) -- hence making it
          unique in its own right.
        </p> */}
        <br />
        <br />
        <h2>how does this website actually work??</h2>
        <br />
        <p>
          while the website is mostly the same as most of the static sites I
          develop with the theme of a typical consulting firm (Idk if it
          coincides with the Seven Crowns' lore in Re:Dive -- I can call it
          loosely to put it lightly), the ✨magic✨ happens when someone taps
          the "business card" on their NFC-capable devices, like NFC readers or
          a mobile phone.
        </p>
        <br />
        <p>
          the card will direct them to the{" "}
          <span className="scvFdm" onClick={navGuest}>
            Guest
          </span>{" "}
          portion of this website so that they can see their so-called "Guest
          Access Info" -- basically acting as an access pass for clients in the
          firm, showing their profile details to see if they're up to date.
          (they can also update their details or purge them, if they wish.)
        </p>
        <br />
        <p>
          if not found, they will be given the opportunity to register
          themselves to the database for the first time. upon successful
          registration, their data will be stored to a MongoDB database that I
          operate so that they can retrieve the data from their card at any time
          that they want.
        </p>
        <br />
        <br />
        <h2>how long did this take you to complete??</h2>
        <br />
        <p>
          I started working on this web project on 4 Sep 2025 (considering that
          I only have some days left before the next cosplay convention){" "}
          <i>without</i> any prior knowledge of Vercel and NodeJS, let alone
          fullstack development.
        </p>
        <br />
        <p>
          however, with the sheer power that I have in order to complete this
          thing, it somehow took me 3wks to complete this, although I'll be
          improving this as we go. (and possibly use this in other conventions
          aswell, if needed.)
        </p>
        <br />
        <br />
        <h2>services used</h2>
        <br />
        <ul>
          <li>GitHub</li>
          <li>Vercel</li>
          <li>MongoDB</li>
          <li>Node.js</li>
        </ul>
        <br />
        <br />
        <h2>credits</h2>
        <br />
        <p>
          most references on this website are credited to Cygames, the dev/pub
          behind Princess Connect! Re:Dive. some resources from their respective
          owners, which you can attribute through links referenced on this
          sourcecode.
        </p>
        <br />
        <p>
          this website is based from the example repository, obtained with the
          command <code>npx create-next-app --example with-mongodb</code>. you
          may learn more about this using the{" "}
          <span className="scvFdm" onClick={mgDBdoc}>
            provided documentation
          </span>
          .
        </p>
        <br />
        <p>
          alternatively, you may also learn more about this integration --
          albeit out of date -- using this{" "}
          <span className="scvFdm" onClick={mgDBvod}>
            vod
          </span>
          .
        </p>
        <br />
        <br />
        <p>
          full details and inner workings are in the{" "}
          <span className="scvFdm" onClick={sccSrc}>
            GitHub repository
          </span>
          . they may be updated occasionally due to <code>npm</code>{" "}
          dependencies thanks to Dependabot.
        </p>
        <br />
        <br />
        <div
          style={{
            fontSize: "calc(1em - calc(1em / 3))",
          }}
        >
          Senri Mana and related resources © 2018 Cygames, Inc.
          <br />
          © 2025 Astraea Centrale, a tbmassoc brand
          <br />
          under joint operation with vTbmassoc
          <br />
          <br />
          some images courtesy of the following:
          <ul>
            <li>Hankyu Hanshin Properties Corp.</li>
            <li className="scvFdm" onClick={() => openExt("unsplash")}>
              Unsplash
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
