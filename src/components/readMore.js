import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'gatsby';
import ArrowLinkIcon from '../assets/images/svg/arrowLink.svg';
import flexUnit from '../assets/styles/mixins';

flexUnit({ weight: 'bold', fontSize: 12, lineHeight: 20 })

const ReadMore = () => {
  const StyledWrapper = styled.div`
    width: 160px;
    height: 30px;
    background: ${props => (props.dataColor ? props.dataColor  : '#fff')};
    border-radius:5px;
    display: flex;
    flex-direction: row;
    padding: 7px;

    p{
      ${flexUnit({ weight: 'Black', fontSize: 14, lineHeight: 16, letterSpacing: 5 })}
      /* font-family: Roboto-Black; */
    /* font-weight: 900; */
      color: #000000;
      letter-spacing: 0.5px;
    text-align: right;
    align-items: baseline;
    }

    svg {
      width:16px;
      height:16px;
      margin-left: auto;
      fill: #000000;
    }
  `;
  return (
    <StyledWrapper>
      <Link to='asd'>
        <p>Czytaj więcej</p><ArrowLinkIcon />
      </Link>
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
