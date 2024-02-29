import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const NotifyingContext = createContext();

const NotifyingProvider = ({ children }) => {
    const [infoNotify, setInfoNotify] = useState({
        message: '',
        time: 5000,
        isNotify: false,
    });
    return <NotifyingContext.Provider value={{ infoNotify, setInfoNotify }}>{children}</NotifyingContext.Provider>;
};

NotifyingContext.propTypes = {
    children: PropTypes.node.isRequired,
};

export { NotifyingContext, NotifyingProvider };
