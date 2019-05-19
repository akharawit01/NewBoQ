import styled from 'styled-components';

const CategoryLeftMenuStyle = styled.div`
  background: ${props => props.theme.COLOR.LIGHT_GREY};
  margin: -15px 15px 0 -15px;
  padding: 15px;
  width: 380px;

  .category-top {
    align-items: center;
    background-color: ${props => props.theme.COLOR.LIGHT_GREY};
    border-top: solid 1px ${props => props.theme.COLOR.GREY};
    display: flex;
    justify-content: space-between;
    padding: 8px;
  }

  .category-list {
    border: 0;
    border-radius: 0;
    margin: 15px -15px;

    li.active {
      background: #fff;
    }
  }
`;
export default CategoryLeftMenuStyle;
