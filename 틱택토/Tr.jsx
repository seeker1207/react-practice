import React, { memo } from 'react';
import Td from './Td';

const Tr = memo(({ rowData, rowIndex, dispatch }) => {
    return (
        <tr>
            {Array(rowData.length).fill(null).map((td, i) => (<Td rowIndex={rowIndex} cellIndex={i} dispatch={dispatch} cellData={rowData[i]}>{''}</Td>))}
        </tr>
    );
});

export default Tr;