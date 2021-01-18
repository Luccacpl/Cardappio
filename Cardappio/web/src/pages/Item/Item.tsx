import React from 'react';

import CustomHeader from '../../components/CustomHeader/CustomHeader';
import CustomAside from '../../components/CustomAside/CustomAside';

function Item() {
    return(
        <div id="page-item">
            <CustomHeader />
            <CustomAside />
        </div>
    );
}

export default Item;