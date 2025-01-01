'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const ThemeButton = () => {
  const { setTheme, theme } = useTheme();

  const handleChangeTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <button type="button" className="p-2" onClick={handleChangeTheme}>
      {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>
  );
};

export { ThemeButton };
