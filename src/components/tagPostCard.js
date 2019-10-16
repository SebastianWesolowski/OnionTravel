import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import flexUnit from '../assets/styles/mixins';

flexUnit({ weight: 'bold', fontSize: 12, lineHeight: 20 });

const TagPostCard = () => {
  const StyledWrapper = styled.div`
    padding-bottom: 5px;
    width:100%;

    p {
      ${flexUnit({ weight: 'Medium', fontSize: 15, lineHeight: 16, letterSpacing: '0.5px' })}
      color: ${props => (props.dataColor ? props.dataColor : '#fff')};
      opacity:0.5;
      text-transform:uppercase;
      text-align: left;
    }
  `;
  return (
    <StyledWrapper>
      <p>Travel</p>
    </StyledWrapper>
  );
};

TagPostCard.propTypes = {
  // dataLink: PropTypes.string,
  dataColor: PropTypes.string,
};

TagPostCard.defaultProps = {
  // dataLink: "#",
  dataColor: '#fff',
};

export default TagPostCard;
