import { Carousel } from './Carousel';
import { ExploreToBooks } from './ExploreToBooks';
import { Heroes } from './Heroes';
import { LibraryServices } from './LibraryServices';

export const HomePage = () => {
  return (
    <div>
      <ExploreToBooks />
      <Carousel />
      <Heroes />
      <LibraryServices />
    </div>
  );
};
