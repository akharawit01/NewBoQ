import styled from 'styled-components';

const BoqStyle = styled.div`
  height: 100%;
  .boq_detail {
    display: flex;
    flex: 1 1 auto;
    height: calc(100% - 40px);

    .sub_category-table {
      margin: 15px 0;
    }
    &-body {
      flex: 1 1 auto;
      padding: 0 15px;
      width: 0;

      &-top {
        align-items: center;
        background: ${props => props.theme.COLOR.LIGHT_GREY};
        border-top: solid 1px ${props => props.theme.COLOR.GREY};
        display: flex;
        justify-content: space-between;
        padding: 8px;
      }
    }
  }

  .flex-contain {
    align-items: center;
    display: flex;
    & > * {
      flex: auto;
    }
    .add-another {
      & > span {
        cursor: pointer;
        color: #1890ff;
        padding: 0 15px;
        text-decoration: underline;
      }
    }
  }
`;
export default BoqStyle;
