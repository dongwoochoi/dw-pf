import Typography from "./Typography";
import { BaseTypes } from "../../types/common";

interface PropsType extends BaseTypes {
  children: React.ReactNode;
  size?: number;
}

export default function LightText(props: PropsType) {
  return <Typography variant="light" {...props} />;
}
