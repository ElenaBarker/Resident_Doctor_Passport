import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(2, 2, 2, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

const OrganisationSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        console.log("Searching for:", event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Searching for:", searchTerm);
    };

    return (
        <div>
            <h2>Search for Employee GMC</h2>
            <form onSubmit={handleSubmit}>
                <Search >
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <IconButton type="submit" aria-label="search" style={{ position: 'absolute', right: 0 }}>
                        <SearchIcon />
                    </IconButton>
                </Search>
            </form>
        </div>
    );
};

export default OrganisationSearch;
