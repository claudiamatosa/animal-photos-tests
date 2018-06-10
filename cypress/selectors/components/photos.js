import component from "../component";

import photoCard from "./photo-card";

export default () =>
  component('[data-id="navigation"]', {
    photo: photoCard
  });
