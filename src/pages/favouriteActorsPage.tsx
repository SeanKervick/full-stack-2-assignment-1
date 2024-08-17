import React, { useContext } from "react"
import PageTemplate from "../components/templateActorListPage";
import { ActorsContext } from "../contexts/actorsContext";
import { useQueries } from "react-query";
import { getActor } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import ActorFilterUI, {
  nameFilter,
} from "../components/actorFilterUI";
import RemoveFromFavourites from "../components/cardIcons/removeFromActorFavourites";

const nameFiltering = {
  name: "name",
  value: "",
  condition: nameFilter,
};


const FavouriteActorsPage: React.FC = () => {
  const { favourites: actorIds } = useContext(ActorsContext);
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [nameFiltering]
  );

  // Create an array of queries and run them in parallel.
  const favouriteActorQueries = useQueries(
    actorIds.map((actorId) => {
      return {
        queryKey: ["actor", actorId],
        queryFn: () => getActor(actorId.toString()),
      };
    })
  );

  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteActorQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const allFavourites = favouriteActorQueries.map((q) => q.data);
  const displayedActors = allFavourites
    ? filterFunction(allFavourites)
    : [];

  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "name" ? [changedFilter, filterValues[1]] : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  const toDo = () => true;

  return (
    <>
   <PageTemplate
        name="Favourite Actors"
        actors={displayedActors}
        action={(actor) => {
          return (
            <>
              <RemoveFromFavourites {...actor} />
            </>
          );
        }}
      />
      <ActorFilterUI
        onFilterValuesChange={changeFilterValues}
        nameFilter={filterValues[0].value}
      />
    </>
  );
};

export default FavouriteActorsPage;