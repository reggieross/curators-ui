import React from 'react';

interface HomePageProps {
}

export const HomePage: React.FC<HomePageProps> = React.memo(() => {
  return (
    <div>
      Hello World from Curators UI
    </div>
  );
});
