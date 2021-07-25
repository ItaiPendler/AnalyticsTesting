import React from "react";
import ReactGA from "react-ga";
import { useAppInsightsContext } from "@microsoft/applicationinsights-react-js";

export default function One() {
  const appInsights = useAppInsightsContext();

  appInsights.trackPageView({
    isLoggedIn: true,
    pageType: "info",
    name:'page one'
  });
  return (
    <div>
      First page
      <button
        onClick={() => {
          appInsights.trackEvent({name:'ClickButton'})
          ReactGA.event({
            category: "Button",
            action: "Click the button from first page",
          });
          alert(
            "Send the information to google analystic that I touched the click button"
          );
        }}
      >
        Press me
      </button>
    </div>
  );
}
