import React, { useReducer } from "react";
import Table from "../7.tutorial/Table";

const initialState = {
    tableData: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
const MineSearch = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Table />
    )
}

export default MineSearch;