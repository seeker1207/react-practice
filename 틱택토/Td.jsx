import React, { useCallback } from 'react';
import { CLICK_CELL, SET_TURN } from "./TikTakTok";

const Td = ({ rowIndex, cellIndex, cellData, dispatch }) => {
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
};

export default Td;
