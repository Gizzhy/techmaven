import React from "react";

export default function Component() {
  return (
    <>
      <nav
        className="nav-container"
        style={{
          margin: "0px",
          boxSizing: "inherit",
          gridColumn: "1 / -1",
          padding: "4rem 6rem",
          zIndex: 30,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a
          href="https://apexpay.org/index.html"
          style={{ margin: "0px", padding: "0px", boxSizing: "inherit" }}
        >
          <img
            className="brand-logo"
            alt="apexpay logo"
            src="https://apexpay.org/static/svg/apexpay-logo.svg"
            style={{
              margin: "0px",
              padding: "0px",
              boxSizing: "inherit",
              cursor: "pointer",
              opacity: 1,
              transform: "translate(0px, 0px)",
            }}
          />
        </a>
        <ul
          className="nav-list"
          style={{
            margin: "0px",
            padding: "0px",
            boxSizing: "inherit",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <li
            className="nav-item nav-link"
            style={{
              margin: "0px",
              padding: "0px",
              boxSizing: "inherit",
              listStyle: "none",
              overflow: "hidden",
              paddingBottom: "0.6rem",
              display: "inline-block",
              position: "relative",
              marginRight: "5rem",
              opacity: 1,
              transform: "translate(0px, 0px)",
            }}
          >
            <a
              href="https://apexpay.org/#sectionFeatures"
              style={{
                margin: "0px",
                padding: "0px",
                boxSizing: "inherit",
                textDecoration: "none",
                fontSize: "1.6rem",
                lineHeight: "18px",
                color: "#fff",
              }}
            >
              Features
            </a>
          </li>
          <li
            className="nav-item nav-link"
            style={{
              margin: "0px",
              padding: "0px",
              boxSizing: "inherit",
              listStyle: "none",
              overflow: "hidden",
              paddingBottom: "0.6rem",
              display: "inline-block",
              position: "relative",
              marginRight: "5rem",
              opacity: 1,
              transform: "translate(0px, 0px)",
            }}
          >
            <a
              href="https://apexpay.org/faq.html"
              style={{
                margin: "0px",
                padding: "0px",
                boxSizing: "inherit",
                textDecoration: "none",
                fontSize: "1.6rem",
                lineHeight: "18px",
                color: "#fff",
              }}
            >
              FAQ
            </a>
          </li>
          <li
            className="nav-item nav-link"
            style={{
              margin: "0px",
              padding: "0px",
              boxSizing: "inherit",
              listStyle: "none",
              overflow: "hidden",
              paddingBottom: "0.6rem",
              display: "inline-block",
              position: "relative",
              marginRight: "5rem",
              opacity: 1,
              transform: "translate(0px, 0px)",
            }}
          >
            <a
              href="https://apexpay.org/about.html"
              style={{
                margin: "0px",
                padding: "0px",
                boxSizing: "inherit",
                textDecoration: "none",
                fontSize: "1.6rem",
                lineHeight: "18px",
                color: "#fff",
              }}
            >
              About Us
            </a>
          </li>
          <li
            className="nav-item nav-link"
            style={{
              margin: "0px",
              padding: "0px",
              boxSizing: "inherit",
              listStyle: "none",
              overflow: "hidden",
              paddingBottom: "0.6rem",
              display: "inline-block",
              position: "relative",
              opacity: 1,
              transform: "translate(0px, 0px)",
            }}
          >
            <a
              href="https://www.apexpay.org/posts"
              rel="noopener"
              target="_blank"
              style={{
                margin: "0px",
                padding: "0px",
                boxSizing: "inherit",
                textDecoration: "none",
                fontSize: "1.6rem",
                lineHeight: "18px",
                color: "#fff",
              }}
            >
              Blog
            </a>
          </li>
        </ul>
        <div
          className="nav-end"
          style={{
            margin: "0px",
            padding: "0px",
            boxSizing: "inherit",
            gap: "1rem",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            className="auth-btns"
            style={{
              margin: "0px",
              padding: "0px",
              boxSizing: "inherit",
              gap: "1rem",
              display: "flex",
              flexDirection: "row",
              opacity: 1,
              transform: "translate(0px, 0px)",
            }}
          >
            <a
              className="auth-btn d-none"
              href="https://dash.apexpay.org/login"
              target="_blank"
              style={{
                margin: "0px",
                padding: "0px",
                boxSizing: "inherit",
                borderRadius: "1.25rem",
                background: "rgba(111, 207, 151, 0.2)",
                textDecoration: "none",
                transition: "all 0.3s ease-in-out 0s",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "9.5rem",
                height: "5rem",
                cursor: "pointer",
                fontSize: "1.4rem",
                color: "rgb(33, 150, 83)",
              }}
            >
              Login
            </a>
            <a
              className="auth-btn auth-btn2"
              href="https://dash.apexpay.org/register"
              target="_blank"
              style={{
                margin: "0px",
                padding: "0px",
                boxSizing: "inherit",
                borderRadius: "1.25rem",
                textDecoration: "none",
                transition: "all 0.3s ease-in-out 0s",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "9.5rem",
                height: "5rem",
                cursor: "pointer",
                fontSize: "1.4rem",
                background: "rgb(33, 150, 83)",
                color: "rgb(255, 255, 255)",
              }}
            >
              Sign Up
            </a>
          </div>
          <div
            className="nav-icon"
            style={{
              margin: "0px",
              padding: "0px",
              boxSizing: "inherit",
              display: "none",
            }}
          >
            <div
              className="bar1"
              style={{ margin: "0px", padding: "0px", boxSizing: "inherit" }}
            />
            <div
              className="bar2"
              style={{ margin: "0px", padding: "0px", boxSizing: "inherit" }}
            />
          </div>
        </div>
        <div
          className="mobile-nav"
          style={{
            margin: "0px",
            padding: "0px",
            boxSizing: "inherit",
            display: "none",
          }}
        >
          <a
            href="https://apexpay.org/#sectionFeatures"
            style={{ margin: "0px", padding: "0px", boxSizing: "inherit" }}
          >
            Features
          </a>
          <a
            href="https://apexpay.org/faq.html"
            style={{ margin: "0px", padding: "0px", boxSizing: "inherit" }}
          >
            FAQ
          </a>
          <a
            href="https://apexpay.org/about.html"
            style={{ margin: "0px", padding: "0px", boxSizing: "inherit" }}
          >
            About Us
          </a>
          <div
            className="mobile-auth-btns"
            style={{
              margin: "0px",
              padding: "0px",
              boxSizing: "inherit",
              gap: "2rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              marginRight: "5rem",
              marginTop: "6rem",
            }}
          >
            <a
              className="mobile-auth-btn"
              href="https://dash.apexpay.org/login"
              target="_blank"
              style={{
                boxSizing: "inherit",
                borderRadius: "1.25rem",
                background: "rgba(111, 207, 151, 0.2)",
                textDecoration: "none",
                transition: "all 0.3s ease-in-out 0s",
                display: "flex",
                justifyContent: "center",
                width: "fit-content",
                alignItems: "center",
                cursor: "pointer",
                padding: "2rem 4rem",
                margin: "0px",
                fontSize: "1.6rem",
                color: "rgb(33, 150, 83)",
              }}
            >
              Login
            </a>
          </div>
        </div>
      </nav>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  margin: 0px;
  padding: 0px;
  font-size: 62.5%;
  box-sizing: border-box;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
}

body {
  margin: 0px;
  padding: 0px;
  box-sizing: inherit;
  font-family: "GT Walsheim Pro Regular", sans-serif;
  font-size: 1.6rem;
  overflow-x: hidden;
  background-color: #13611d;
  color: #fff;
}
`,
        }}
      />
    </>
  );
}
