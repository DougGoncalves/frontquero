import styled from 'styled-components';

import { AddCircleOutline as Add } from 'styled-icons/material/AddCircleOutline';


import Colors from '../../utils/constants/colors';



export const Wrapper = styled.div`
  width: 105%;
  height: 250px;
  padding: 20px;
  margin-bottom: 250px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  box-shadow: 0px 2px 5px 0px ${Colors.LightGray};
  -moz-box-shadow: 0px 2px 5px 0px ${Colors.LightGray};
  -webkit-box-shadow: 0px 2px 5px 0px ${Colors.LightGray};

  div.text {
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    > span {
      font-weight: bold;
      color: ${Colors.Black};

      @media screen and (min-width: 450px) {
        font-size: 20px;
      }
    }

    > p {
      font-size: 12px;
      line-height: 1.7;
      text-align: center;
      color: ${Colors.Black};

      @media screen and (min-width: 450px) {
        max-width: 200px;
      }
    }
  }

  @media screen and (min-width: 450px) {
    max-width: 445px;
  }

  @media screen and (min-width: 600px) {
    height: 458px;
  }
`;

/**
 * Icons
 */

export const AddIcon = styled(Add)`
  width: 80px;
  margin: 5px;
  color: ${Colors.MainBlue};

  @media screen and (min-width: 450px) {
    width: 100px;
  }
`;
