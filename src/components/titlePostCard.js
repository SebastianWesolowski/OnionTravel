import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import flexUnit from '../assets/styles/mixins';

flexUnit({ weight: 'bold', fontSize: 12, lineHeight: 20 });

const TitlePostCard = ({ title }) => {
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
      <h3>{title}</h3>
    </StyledWrapper>
  );
};

TitlePostCard.propTypes = {
  // dataLink: PropTypes.string,
  dataColor: PropTypes.string,
  title: PropTypes.string,
};

TitlePostCard.defaultProps = {
  // dataLink: "#",
  dataColor: '#fff',
  title: '',
};

export default TitlePostCard;
