import styled from 'styled-components';

const Item = styled.div`
  background-image: url(${(props) => props.link});
  background-position: center;
  background-size: cover;
  height:400px;
  width:800px;
`

export default Item;