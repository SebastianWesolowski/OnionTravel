import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArrowLinkIcon from '../assets/images/svg/arrowLink.svg';
import flexUnit from '../assets/styles/mixins';

flexUnit({ weight: 'bold', fontSize: 12, lineHeight: 20 });

const ReadMore = () => {
  const StyledWrapper = styled.div`
    width: calc(100% - 30px);
    max-width: 160px;
    height: auto;
    min-height: 30px;
    background: ${props => (props.dataColor ? props.dataColor : '#fff')};
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    padding: 7px;
    position: absolute;
    bottom: 15px;

    p {
      ${flexUnit({ weight: 'Black', fontSize: 14, lineHeight: 16, letterSpacing: '0.5px' })}
      color: #000000;
      text-align: left;
      align-items: baseline;
    }

    svg {
      width: 16px;
      height: 16px;
      margin-left: auto;
      fill: #000000;
    }
  `;
  return (
    <StyledWrapper>
      <p>Czytaj więcej</p>
      <ArrowLinkIcon />
    </StyledWrapper>
  );
};

ReadMore.propTypes = {
  // dataLink: PropTypes.string,
  dataColor: PropTypes.string,
};

ReadMore.defaultProps = {
  // dataLink: "#",
  dataColor: '#fff',
};

export default ReadMore;
