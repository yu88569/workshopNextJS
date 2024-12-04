import { fetchLandmarks, fetchLandmarksHero } from "@/actions/actions";
import LandmarkList from "./LandmarkList";
import { LandmarkCardProps } from "@/utils/types";
import Hero from "../hero/Hero";
import CategoriesList from "./CategoriesList";
import { categories } from "@/utils/categories";
import EmptyList from "./EmptyList";

const LandmarkContainer = async ({ search, category }: { search?: string, category?: string }) => {
  const landmarks: LandmarkCardProps[] = await fetchLandmarks({ search, category });
  const landmarksHero: LandmarkCardProps[] = await fetchLandmarksHero();
  //console.log(landmarks);

  return (
    <div>
      <Hero landmarks={landmarksHero} />
      <CategoriesList search={search} category={category} />
      {
        landmarks.length === 0
          ? <EmptyList heading="No result " btnText="Clear Filter" />
          : <LandmarkList landmarks={landmarks} />
      }

    </div>
  );
};
export default LandmarkContainer;
