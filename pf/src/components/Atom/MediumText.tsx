import Typography from "./Typography";
import { BaseTypes } from "../../types/common";

interface PropsType extends BaseTypes {
  children: React.ReactNode;
  size?: number;
}

export default function MediumText(props: PropsType) {
  return <Typography variant="medium" {...props} />;
}
