import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDronesAction } from "../actions/droneActions";
import SingleProduct from "../components/SingleProduct";
import Spinner from "../components/Spinner";

export default function Products() {
  const allDronesState = useSelector((state) => state.getAllDrones);
  const { drones, loading } = allDronesState;

  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(getAllDronesAction());
    },
    [dispatch]
  );

  const dronesNum = drones?.length;

  return (
    <section className="products section container">
      <h2 className="section__title">products</h2>
      {loading ? (
        <Spinner />
      ) : (
        <ul className="products__container">
          {dronesNum > 0 &&
            drones?.map((drone) => {
              return <SingleProduct key={drone.id} drone={drone} />;
            })}
        </ul>
      )}
    </section>
  );
}
