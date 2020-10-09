import styled from 'styled-components';

import { Heart } from 'styled-icons/boxicons-regular/Heart';
import { Whatsapp } from 'styled-icons/fa-brands/Whatsapp';
import { Comment } from 'styled-icons/fa-regular';
import { Mail } from 'styled-icons/feather/Mail';
import { InfoCircle as Info } from 'styled-icons/boxicons-regular/InfoCircle';



import Colors from '../../utils/constants/colors';





export const FooterWrapper = styled.footer`
  background: ${Colors.MainBlue};
`;

export const FooterWrapperInfo = styled.div`
  background: ${Colors.SecondaryBlue};
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const FooterInfo = styled.div`
  width: 100%;
  max-width: 1140px;

  display: grid;
  grid-template-areas:
    'wpp wpp wpp'
    'chat email info';

  > div:first-child {
    border: none;
  }

  > div {
    border-top: 3px solid ${Colors.MainBlue};
  }

  > div:nth-child(3) {
    border-right: 3px solid ${Colors.MainBlue};
    border-left: 3px solid ${Colors.MainBlue};
  }

  > div:nth-child(3) {
  }

  @media (min-width: 900px) {
    grid-template-areas: 'wpp chat email info';
    > div {
      border: none !important;
    }
  }
`;

export const FooterBoxInfo = styled.div`
  padding: 0 20px;
  width: 100%;
  grid-area: ${props => props.nameGrid};

  > div {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${props => (props.nameGrid === 'wpp' ? 'row' : 'column')};
  }

  @media (min-width: 900px) {
    > div {
      flex-direction: row;
    }

    span {
      display: inline;
    }
  }
`;

export const InfoText = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  font-weight: bold;

  span:nth-child(1) {
    font-weight: bold;
    font-size: 18px;
  }

  .mobile {
    font-weight: bold;
    margin: 10px;
  }

  .mobile-wpp {
    font-weight: normal;
  }

  .desktop {
    display: none;

  }

  @media (min-width: 800px) {
    padding: 10px;
    .mobile,
    .mobile-wpp {
      display: none;
    }

    .desktop {
      font-size: 14px;
      display: initial;
    }
  }

  @media (min-width: 1025x) {
    .desktop {
      font-size: 16px;
    }
  }
`;

export const FooterMessage = styled.div`
  margin: 0 auto;
  padding: 20px;
  max-width: 1140px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  font-weight: bold;

  > svg {
    margin: 05px;
  }

  @media (min-width: 700px) {
    font-size: 14px;
    font-weight: bold;
  }
`;

/**
 * Icons
 */

export const HeartIcon = styled(Heart)`
  width: 18px;
`;

export const WhatsappIcon = styled(Whatsapp)`
  width: 30px;
  color: #fff;
  margin-right: 10px;
`;

export const ChatIcon = styled(Comment)`
  width: 30px;
  color: #fff;
`;

export const InfoIcon = styled(Info)`
  width: 40px;
  color: #fff;
`;

export const MailIcon = styled(Mail)`
  width: 30px;
  color: #fff;
`;
