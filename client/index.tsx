import { appHtml } from "../shared/appHtml";

export function App() {
  return (
    <iframe
      title="GBSA Scoreboard"
      srcDoc={appHtml}
      style={{ width: "100%", height: "100vh", border: "0", display: "block" }}
    />
  );
}
