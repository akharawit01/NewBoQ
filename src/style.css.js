import styled from 'styled-components';

const appStyle = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  background-color: #f5f5f5;
  font-family: 'Roboto', sans-serif;

  .inner {
    min-height: 100vh;
  }

  .ant-table-content,
  table {
    background: ${props => props.theme.COLOR.WHITE};
  }

  .btn {
    &-origin {
      background: ${props => props.theme.COLOR.DAVY_GREY};
      color: ${props => props.theme.COLOR.WHITE};
      border-color: ${props => props.theme.COLOR.DAVY_GREY};
    }
  }

  /* Align  */
  .text-right {
    text-align: right;
  }

  /* Form */
  .fm-item-btn {
    padding: 0 0 15px 0;
    text-align: right;
    .ant-btn {
      margin-left: 5px;
    }
  }

  /* Other */
  #components-table-demo-drag-sorting tr.drop-over-downward td {
    border-bottom: 2px dashed #1890ff !important;
  }

  #components-table-demo-drag-sorting tr.drop-over-upward td {
    border-top: 2px dashed #1890ff !important;
  }

  .ellipsis {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export default appStyle;
