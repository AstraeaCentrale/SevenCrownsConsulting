// css imports
import "@/styles/_main.css";
import "@/styles/core.css";
import "@/styles/fonts.css";
import "@/styles/responsive.css";

import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// js function imports
import { navHome, navServices, openExt } from "@/lib/pageNav";

export default function Guest() {
  const router = useRouter();
  const initialGuid =
    typeof router.query.guid === "string" ? router.query.guid : "";
  const [guid, setGuid] = useState(initialGuid);
  const [inputGuid, setInputGuid] = useState(initialGuid);
  const [guest, setGuest] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [newGuestName, setNewGuestName] = useState("");
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

  // Fetch guest when guid is set
  const fetchGuest = async (id: string) => {
    setLoading(true);
    setNotFound(false);
    setGuest(null);
    try {
      const res = await fetch(`/api/scc_guest?guid=${id}`);
      if (res.ok) {
        const data = await res.json();
        if (data && data._id) {
          setGuest(data);
        } else {
          setNotFound(true);
        }
      } else {
        setNotFound(true);
      }
    } catch {
      showSnackbarMsg("Error fetching records.");
    }
    setLoading(false);
  };

  // Handle GUID input change and fetch on button click
  const handleGuidInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputGuid(e.target.value);
  };
  const handleGuidFetch = () => {
    if (inputGuid) {
      setGuid(inputGuid);
      fetchGuest(inputGuid);
    } else {
      showSnackbarMsg("Unique ID is required.");
    }
  };

  // Handle new guest save
  const handleSaveGuest = async () => {
    if (!guid || !newGuestName) {
      showSnackbarMsg("Please enter your name.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/scc_guest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id: guid, name: newGuestName }),
      });
      if (res.ok) {
        showSnackbarMsg("Records have been saved to our system.");
        fetchGuest(guid);
      } else {
        showSnackbarMsg("Error saving records.");
      }
    } catch {
      showSnackbarMsg("Sorry, something went wrong.");
    }
    setLoading(false);
  };

  // Handle guest delete
  const handleDeleteGuest = async () => {
    if (!guid) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/scc_guest?guid=${guid}`, {
        method: "DELETE",
      });
      if (res.ok) {
        showSnackbarMsg("Records have been removed from our system.");
        setGuest(null);
        setNotFound(false);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        showSnackbarMsg("Error removing records.");
      }
    } catch {
      showSnackbarMsg("Sorry, something went wrong.");
    }
    setLoading(false);
  };

  useEffect(() => {
    document.querySelectorAll(".attachDisclaimer").forEach((el) => {
      (el as HTMLElement).title = `see "Disclaimer" linked below for details.`;
    });
    if (typeof router.query.guid === "string") {
      setGuid(router.query.guid);
      setInputGuid(router.query.guid);
      fetchGuest(router.query.guid);
    }
  }, [router.query.guid]);

  return (
    <main>
      <Head>
        <title>Guest Lookup</title>
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
          <p onClick={navServices}>SERVICES</p>
        </div>
      </header>
      <div
        className="frontPage"
        style={{
          height: "25rem",
          backgroundImage: `url("https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg")`,
          backgroundPosition: "center center",
          backgroundAttachment: "initial",
        }}
      ></div>
      <div className="guestServView">
        <div>
          <h1>Guest Lookup</h1>
          <br />
          <div className="fyiBlk">
            <p>
              &#x1f6c8; You may use this website to look up your basic
              information, which will be used to grant you access to Seven
              Crowns Consulting's services and amenities around the globe. More
              data will be included over time.
            </p>
          </div>
          <br />
          <br />
          {loading ? (
            <div className="loadingScreen">
              <p>Fetching data...</p>
            </div>
          ) : !guid ? (
            <>
              <p>To get started, enter the unique ID provided here:</p>
              <input
                title="Enter the GUID provided here"
                placeholder="Syntax: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                value={inputGuid}
                onChange={handleGuidInput}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleGuidFetch();
                }}
                required
              ></input>
              <br />
              <p style={{ fontSize: "calc(1em - calc(1em / 4))" }}>
                You may also refer to the business card in order to obtain the
                unique ID.
              </p>
              <br />
            </>
          ) : guest ? (
            <>
              <div className="guestInfo">
                {Object.entries(guest).map(([key, value]) => (
                  <div key={key}>
                    <h3>{key}</h3>
                    <p>{String(value)}</p>
                    <br />
                  </div>
                ))}
              </div>
              <br />
              <button
                onClick={handleDeleteGuest}
                style={{
                  backgroundColor: "red",
                  color: "white",
                }}
              >
                Remove record
              </button>
            </>
          ) : notFound ? (
            <>
              <p style={{ color: "red", fontWeight: "bold" }}>
                No record found for ID {guid}.
              </p>
              <p>Please provide the details below to register.</p>
              <br />
              <input
                title="Enter your name here"
                placeholder="Enter your name here"
                value={newGuestName}
                onChange={(e) => setNewGuestName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSaveGuest();
                }}
                required
              ></input>
              <br />
            </>
          ) : null}
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
  );
}
