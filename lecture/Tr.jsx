import React, { useRef, useEffect, useMemo, memo } from "react";
import Td from "./Td";
import Table from "./Table";

const Tr = memo(({ rowData, rowIndex, dispatch }) => {
    console.log('tr rendered')
    return (
        <tr>
            {Array(rowData.length).fill().map((td, i) => (
                useMemo(() => <Td key={i} dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]}>{''}</Td>,
                    [rowData[i]],
                )
            ))}
        </tr>
    )
})
export default Tr;