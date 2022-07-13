import { BottomPanel } from "./BottomPanel/BottomPanel";
import { MidPanel } from "./MidPanel/MidPanel";
import { TopPanel } from "./TopPanel/TopPanel";

export const Footer = () => {
  return (
    <footer>
      <TopPanel />
      <MidPanel />
      <BottomPanel />
    </footer>
  );
};