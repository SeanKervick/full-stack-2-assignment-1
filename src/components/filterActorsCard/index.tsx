import React, { ChangeEvent } from "react";  // useState/useEffect redundant 
import { FilterOption} from "../../types/interfaces"; //include GenreData interface 
import { SelectChangeEvent } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const styles = {
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },
 
  formControl: {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
};


interface FilterActorsCardProps {
  onUserInput: (f: FilterOption, s: string)  => void; // Add this line
  titleFilter: string;
}

const FilterActorsCard: React.FC<FilterActorsCardProps> = ({ titleFilter,  onUserInput }) => {

  const handleChange = (e: SelectChangeEvent, type: FilterOption, value: string) => {
    e.preventDefault()
      onUserInput(type, value)
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e, "title", e.target.value)
  }

  return (
    <>
    <Card sx={styles.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <FilterAltIcon fontSize="large" />
          Filter the actors by name.
        </Typography>
        <TextField
          sx={styles.formControl}
          id="filled-search"
          label="Search field"
          type="search"
          value={titleFilter}
          variant="filled"
          onChange={handleTextChange}
        />
      </CardContent>
    </Card>
      </>
  );
}

export default FilterActorsCard;