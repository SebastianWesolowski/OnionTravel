import React from 'react';
import PropTypes from 'prop-types';
import TagPortfolio from './TagPortfolio';

const GroupTagPortfolio = ({ dataTag }) => {
  let arrayTag = [];
  for (let index = 0; index < dataTag.length; index += 1) {
    arrayTag.push(dataTag[index]);
    if (index !== dataTag.length - 1) {
      arrayTag.push('I');
    }
  }

  arrayTag = arrayTag.map((item, i) => {
    return { id: `GroupTagPortfolio${i}`, value: item };
  });

  return (
    <div style={{ padding: `25px 0 20px` }}>
      {arrayTag.map((item, i) => (
        <>
          <TagPortfolio
            isFirst={i === 0 ? `true` : ``}
            key={item.id}
            isLast={i === arrayTag.length - 1 ? `true` : ``}
          >
            {item.value}
          </TagPortfolio>
        </>
      ))}
    </div>
  );
};

GroupTagPortfolio.propTypes = {
  dataTag: PropTypes.array,
};

GroupTagPortfolio.defaultProps = {
  dataTag: ['Wizualizacje 3D', 'Foldery reklamowe', 'Infografiki'],
};

export default GroupTagPortfolio;
