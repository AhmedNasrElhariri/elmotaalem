import styled from 'styled-components';

import { variant } from 'styled-system';

const Button = styled('button')(
  {
    appearance: 'none',
    fontFamily: 'Roboto',
    padding: '11px 15px',
    margin: '5px',
    border: 'none',
    borderRadius: '5px',
    boxSizing: 'border-box',
    marginTop: '20px',
    fontSize: '18px',
    textTransform: 'capitalize',
  },

  variant({
    variants: {
      default: {
        color: '#0879FA',
        bg: 'white',
      },
      primary: {
        color: 'white',
        bg: '#0879FA',
      },
      secondary: {
        color: 'white',
        bg: '#6C757D',
      },
      warning: {
        color: 'white',
        bg: '#FEC134',
      },
      info: {
        color: 'white',
        bg: '#31A2B8',
      },
    },
  }),
);

export default Button;
