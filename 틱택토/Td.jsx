import React, { useCallback, useEffect, useRef, memo } from 'react';
import { CLICK_CELL, SET_TURN } from "./TikTakTok";

const Td = memo(({ rowIndex, cellIndex, cellData, dispatch }) => {
    const ref = useRef([]);

    const onClickTd = useCallback(() => {
        console.log(rowIndex, cellIndex);
        if (cellData) {
            return;
        }
        dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });

    },[cellData]);

    return (
        <td onClick={onClickTd}>
            {cellData}
        </td>
    );
});

export default Td;
