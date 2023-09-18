import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export function useDroneDetails() {
  const { droneId } = useParams();
  const allDronesState = useSelector((state) => state.getAllDrones);
  const { drones } = allDronesState;
  const drone = drones?.find((drone) => drone._id === droneId);
  return drone;
}

export function useFeaturedDetails() {
  const { featuredId } = useParams();
  const allFeaturedState = useSelector((state) => state.getAllFeatured);
  const { featureds } = allFeaturedState;
  const featured = featureds.find((featured) => featured.id == featuredId);
  return featured;
}

export function useOutsideClick(ref, cb) {
  useEffect(function () {
    function outsideClick(e) {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      cb();
    }
    document.addEventListener("mousedown", outsideClick);
    document.addEventListener("touchstart", outsideClick);

    return function () {
      document.removeEventListener("mousedown", outsideClick);
      document.removeEventListener("touchstart", outsideClick);
    };
  });
}
