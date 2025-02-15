import { createStyles, MantineTheme } from '@mantine/core';
import { colors, shadows } from '../config';
import { getGradient } from '../config/helper';

export default createStyles((theme: MantineTheme, _params, getRef) => {
  const dark = theme.colorScheme === 'dark';
  const label = getRef('label');

  return {
    root: {
      width: '100%',
      maxWidth: '300px',
      marginBottom: '30px',
      background: dark ? theme.colors.dark[7] : theme.white,
      padding: '5px',
      boxShadow: dark ? shadows.dark : shadows.light,
    },
    active: {
      background: `${dark ? getGradient(colors.B20) : getGradient(colors.white)} padding-box, ${
        colors.horizontal
      } border-box`,
      border: '2px solid transparent',
    },
    label: {
      ref: label,
      fontSize: '14px',
      fontWeight: '700',
      padding: '12px 18px',
      color: theme.colors.gray[8],
    },
    labelActive: {
      color: dark ? theme.white : theme.colors.gray[8],
    },
  };
});
