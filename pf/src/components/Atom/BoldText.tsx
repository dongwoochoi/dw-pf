import Typography from "./Typography";
import { BaseTypes } from "../../types/common";

interface PropsType extends BaseTypes {
  children: React.ReactNode;
  size?: number;
}

export default function BoldText(props: PropsType) {
  return <Typography variant="bold" {...props} />;
}
