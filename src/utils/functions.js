import {ThemeColors} from '../theme/themeColor';

const getRandomColor = index => {
  switch (index % 10) {
    case 0:
      return ThemeColors.RED;
    case 1:
      return ThemeColors.COLOR1;
    case 2:
      return ThemeColors.COLOR2;
    case 3:
      return ThemeColors.COLOR3;
    case 4:
      return ThemeColors.COLOR4;
    case 5:
      return ThemeColors.COLOR5;

    default:
      return ThemeColors.RED;
  }
};

export {getRandomColor};
