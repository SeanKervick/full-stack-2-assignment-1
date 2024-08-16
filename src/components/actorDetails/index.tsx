import React from "react";
import Typography from "@mui/material/Typography";
import { BaseActorProps } from "../../types/interfaces";


const ActorDetails: React.FC<BaseActorProps> = (actor) => {

    return (
        <>
            <Typography variant="h5" component="h3">
                Biography
            </Typography>

            <Typography variant="h6" component="p">
                {actor.biography}
            </Typography>
        </>
    );
};
export default ActorDetails;