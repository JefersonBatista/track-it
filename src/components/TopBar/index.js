import { Header, UserImage } from "./style";

export default function TopBar({ userImage }) {
  return (
    <Header>
      TrackIt
      <UserImage src={userImage} alt="Imagem do usuário" />
    </Header>
  );
}
