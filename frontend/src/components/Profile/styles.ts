import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1075px) {
    width: 100%;
  }

  @media only screen and (max-width: 614px) {
    height: 225px;
  }
`;

export const ProfileArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  min-width: 500px;
  padding-top: 20px;

  background-color: ${props => props.theme.Color2};
  border-radius: ${props => props.about};

  @media only screen and (max-width: 1075px) {
    border-radius: ${props => props.slot};
    padding: 20px;
  }

  @media only screen and (max-width: 614px) {
    border-radius: ${props => props.autoCorrect};
    padding: 15px 0;
    min-width: 200px;
  }
`;

export const AvatarArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: 90%;
`;

export const DescriptionArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  width: 90%;

  margin-top: 10px;

  @media only screen and (max-width: 614px) {
    width: 100%;
    justify-content: center;

    min-width: 200px;
    height: 300px;
  }
`;

export const SocialColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 0 8px;
`;

export const AvatarImage = styled.img`
  width: 100px;

  margin-right: 10px;
`;

export const ProfileName = styled.span`
  font-family: "Jost";
  font-size: 18pt;
  font-weight: 700;
  color: ${props => props.theme.Color4};

  @media only screen and (max-width: 614px) {
    font-size: 16pt;
  }
`;

export const ProfileUsername = styled.span`
  font-family: "Jost";
  font-size: 16pt;
  font-weight: 700;
  color: ${props => props.theme.Color3};

  @media only screen and (max-width: 614px) {
    font-size: 14pt;
  }
`;

export const ProfileOccupation = styled.span`
  font-family: "Open Sans";
  font-size: 11pt;
  font-weight: 500;
  color: ${props => props.theme.Color4};

  @media only screen and (max-width: 614px) {
    font-size: 10pt;
  }
`;

export const SocialIcon = styled.svg`
  width: 30px;
  height: 30px;

  margin: 0 5px;

  fill: ${props => props.theme.Color3};
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;

  font-family: "Jost";
  font-size: 12pt;
  font-weight: 700;
  color: ${props => props.theme.Color4};

  text-decoration: none;

  margin: 2.5px 0;

  @media only screen and (max-width: 614px) {
    font-size: 10pt;
    font-weight: 500;
  }
`;
