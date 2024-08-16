import React from "react";
// import Chip from "@mui/material/Chip";
// import Paper from "@mui/material/Paper";
// import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import Typography from "@mui/material/Typography";
import { BaseActorProps } from "../../types/interfaces";


// const styles = {
//     chipSet: {
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexWrap: "wrap",
//         listStyle: "none",
//         padding: 1.5,
//         margin: 0,
//     },
//     chipLabel: {
//         margin: 0.5,
//     },
//     fab: {
//         position: "fixed",
//         top: 50,
//         right: 2,
//     },
// };

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