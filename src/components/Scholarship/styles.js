import styled from 'styled-components';

import Colors from '../../utils/constants/colors';

export const ScholarshipWrapper = styled.div`
  width: 100%;
  padding: 20px;
  height: 458px;
  margin: 20px 0px;
  max-width: 320px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  box-shadow: 0px 2px 5px 0px ${Colors.LightGray};
  -moz-box-shadow: 0px 2px 5px 0px ${Colors.LightGray};
  -webkit-box-shadow: 0px 2px 5px 0px ${Colors.LightGray};

  @media screen and (min-width: 600px) {
    margin-top: -230px;
  }
`;

export const ScholarshipHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid ${Colors.Black};

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  > div > img {
    height: 74px;
    max-width: 150px;
  }

  div.info {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    > span {
      margin: 5px;
    }

    > span.name {
      font-size: 14px;
      font-weight: bold;
      color: ${Colors.LightBlack};
    }

    > span.course {
      font-size: 14px;
      font-weight: bold;
      color: ${Colors.SecondaryBlue};
    }

    > div.note {
      padding: 10px 0;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        font-weight: bold;
        margin-right: 10px;
      }
    }
  }
`;

export const ScholarshipInfoCourse = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid ${Colors.LightGray};

  > span {
    font-size: 12px;
  }

  > span.type {
    padding-bottom: 10px;

    font-weight: bold;
    color: ${Colors.Black};
    text-transform: uppercase;
  }

  > span.start-class {
    color: ${Colors.Black};
  }
`;

export const ScholarshipPrice = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  > span {
    font-size: 12px;
  }

  > span.title {
    padding: 20px 0;
    font-weight: bold;
    color: ${Colors.Black};
  }

  > span.discount {
    padding-bottom: 0px;
    color: ${Colors.Black};
    text-decoration: line-through;
  }

  > span.price-promotion {
    font-size: 22px;
    font-weight: bold;
    padding-bottom: 20px;
    color: ${Colors.Green};

    > small {
      font-size: 14px;
      color: ${Colors.Black};
    }
  }
`;

export const ScholarshipButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > button {
    padding: 10px;

    &:first-child {
      width: 80px;
      margin-right: 10px;
    }
  }

  > button.delete {
    font-weight: bold;
    background: transparent;
    color: ${Colors.SecondaryBlue};
    border-radius: 5px;
    border: 1px solid ${Colors.SecondaryBlue};
  }

  > button.see-offer {
    flex: 1;
    font-weight: bold;
    background: ${props => (props.enabled ? Colors.MainYellow : Colors.Black)};
    color: ${Colors.Black};
    border-radius: 5px;
    border: 1px solid
      ${props => (props.enabled ? Colors.SecondaryYellow : Colors.Black)};
  }
`;
