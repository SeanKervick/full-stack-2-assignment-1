import React from "react";
import PageTemplate from "../components/templateActorListPage";
import { getActors } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import ActorFilterUI, {
  nameFilter,
} from "../components/actorFilterUI";
import { BaseActorProps, DiscoverActors } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesActorsIcon from '../components/cardIcons/addToActorFavourites'



const nameFiltering = {
  name: "name",
  value: "",
  condition: nameFilter,
};


const HomePage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverActors, Error>("discover", getActors);
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [nameFiltering]
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  const actors = data ? data.results : [];
  const displayedActors = filterFunction(actors);


  return (
    <>
      <PageTemplate
        name="Discover Actors"
        actors={displayedActors}
        action={(actor: BaseActorProps) => {
          return <AddToFavouritesActorsIcon {...actor} />
        }}
      />
      <ActorFilterUI
        onFilterValuesChange={changeFilterValues}
        nameFilter={filterValues[0].value}
      />
    </>
  );
};
export default HomePage;