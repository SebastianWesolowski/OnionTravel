import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import flexUnit from '../assets/styles/mixins';

flexUnit({ weight: 'bold', fontSize: 12, lineHeight: 20 });

const TitlePostCard = () => {
  const StyledWrapper = styled.div`
    width:100%;

    h3 {
      ${flexUnit({ weight: 'Bold', fontSize: 30, letterSpacing: '0.5px' })}
      color: ${props => (props.dataColor ? props.dataColor : '#fff')};
      text-align: left;
    }
  `;
  return (
    <StyledWrapper>
      <h3>3..&nbsp;2..&nbsp;1.. Starujemy&nbsp;z Blogiem</h3>
    </StyledWrapper>
  );
};

TitlePostCard.propTypes = {
  // dataLink: PropTypes.string,
  dataColor: PropTypes.string,
};

TitlePostCard.defaultProps = {
  // dataLink: "#",
  dataColor: '#fff',
};

export default TitlePostCard;
