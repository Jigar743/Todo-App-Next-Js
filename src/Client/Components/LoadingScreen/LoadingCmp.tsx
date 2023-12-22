import { LoadingOutlined } from "@ant-design/icons";
import { LoadingCmpStyled } from "./LoadingCmp.styled";

export default function LoadingCmp() {
  return (
    <LoadingCmpStyled>
      <LoadingOutlined />
      Loading...
    </LoadingCmpStyled>
  );
}
