import styled from 'styled-components';

const Item = styled.div`
  background-image: url(${(props) => props.link});
  text-align: center;
  padding: 50px;
  color: white;
`

export default Item;