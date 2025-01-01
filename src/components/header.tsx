import { GithubButton } from '@/components/github-button';
import { ThemeButton } from '@/components/theme-button';

const Header = () => {
  return (
    <header className="flex items-center justify-between h-20 p-4">
      <div className="font-bold select-none">
        <h1 className="sm:text-lg text-base">YOUTUBE PLAYLIST RANDOM</h1>
      </div>

      <div className="flex items-center gap-4">
        <ThemeButton />
        <GithubButton />
      </div>
    </header>
  );
};

export { Header };
