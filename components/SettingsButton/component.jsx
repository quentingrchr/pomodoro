import SettingsIcon from "../../icons/SettingsIcon";
import { Button } from "./style";
export default function SettingsButton({ ...props }) {
  return (
    <Button {...props}>
      <SettingsIcon />
    </Button>
  );
}
