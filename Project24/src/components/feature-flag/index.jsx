import React, { useContext } from 'react';
import { FeatureFlagContext } from './context';
import LightAndDarkTheme from '../LightAndDark';
import TicTacToe from '../TicTacToe';
import ColourChanger from '../ColourChanger';
import Accodian from '../Accodian';
import TreeView from '../TreeView/TreeView';

const FeatureFlag = () => {
    const { allComponents, loading } = useContext(FeatureFlagContext);

    // If loading, return a loading state
    if (loading) {
        return <div>Loading...</div>;
    }

    const arr = [
        { key: 'showLightAndDarkMode', page: <LightAndDarkTheme /> },
        { key: 'showTicTacToeBoard', page: <TicTacToe /> },
        { key: 'showRandomColorGenerator', page: <ColourChanger /> },
        { key: 'showAccodian', page: <Accodian /> },
        { key: 'showTreeView', page: <TreeView /> }
    ];

    const handleElement = (key) => {
        return allComponents ? allComponents[key] : false; // Check if allComponents is not null
    };

    return (
        <div>
            {arr.map(element => handleElement(element.key) ? element.page : null)}
        </div>
    );
};

export default FeatureFlag;
