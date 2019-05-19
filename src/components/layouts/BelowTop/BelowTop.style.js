import styled from 'styled-components';

const belowTopStyle = styled.div`
  background: ${props => props.theme.COLOR.WHITE};
  display: flex;
  flex: 1 1 auto;

  .aside-left-nav {
    background: ${props => props.theme.COLOR.DAVY_GREY};
    border-right: 1px solid ${props => props.theme.COLOR.LIGHT_GREY};
    font-size: 0.7rem;
    width: 80px;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        > a {
          color: ${props => props.theme.COLOR.WHITE};
          display: block;
          padding: 20px 10px;
          text-align: center;

          .anticon {
            font-size: 1.3rem;
            margin-bottom: 5px;
          }

          &.active {
            color: ${props => props.theme.COLOR.DAVY_GREY};
            background: ${props => props.theme.COLOR.WHITE};
          }
        }
      }
    }
  }

  .main-body {
    flex: 1 1 auto;
    width: 0;
    padding: 15px;
  }
`;

export default belowTopStyle;
