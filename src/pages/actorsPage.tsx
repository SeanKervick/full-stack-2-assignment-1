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
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";

const nameFiltering = {
  name: "name",
  value: "",
  condition: nameFilter,
};


const ActorsPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverActors, Error>("actors", getActors);
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
      type === "name"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  const actors = data ? data.results : [];
  const displayedActors = filterFunction(actors);


  return (
    <>
      <PageTemplate
        title="Actors"
        actors={displayedActors}
        action={(actor: BaseActorProps) => {
            return <AddToPlaylistIcon {...actor} />
          }}
      />
      <ActorFilterUI
        onFilterValuesChange={changeFilterValues}
        nameFilter={filterValues[0].value}
      />
    </>
  );
};
export default ActorsPage;