import PropTypes from 'prop-types';
import { useMemo } from 'react';
// @mui
import { CssBaseline, darkScrollbar, GlobalStyles } from '@mui/material';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
// hooks
import useSettings from '../hooks/useSettings';
//
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function ThemeProvider({ children }) {
  const { themeMode, themeDirection } = useSettings();
  const isLight = themeMode === 'light';

  const themeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      typography,
      breakpoints,
      shape: { borderRadius: 8 },
      direction: themeDirection,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
    }),
    [isLight, themeDirection]
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ...darkScrollbar(
            themeMode === "light"
            ? {
              track: palette.light.background.paper,
              thumb: palette.light.info.dark,
              active: palette.light.info.darker
              }
            : {
              track: palette.dark.grey[900],
              thumb: palette.dark.info.darker,
              active: palette.dark.info.dark
            }
          ),
          scrollbarWidth: "thin",
        }} />
      {children}
    </MUIThemeProvider>
  );
}
