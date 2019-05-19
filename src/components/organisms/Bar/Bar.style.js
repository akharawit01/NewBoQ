import styled from 'styled-components';

const BarStyle = styled.div`
  background-color: ${props => props.theme.COLOR.BLACK};
  color: ${props => props.theme.COLOR.WHITE};
  display: flex;

  .app-logo {
    height: 50px;
    margin: 10px 14px;
  }

  .user-bar {
    border-left: 1px solid ${props => props.theme.COLOR.DAVY_GREY};
    border-right: 1px solid ${props => props.theme.COLOR.DAVY_GREY};
    line-height: 12px;
    min-width: 250px;
    padding: 16px 20px;
    .username {
      margin-bottom: 0;
      margin-top: 8px;
    }
    .position {
      color: #b5b1b1;
      font-size: 10px;
    }
  }
`;

export default BarStyle;
