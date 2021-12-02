import React from 'react';
const extractData = require('./extractData');
const passReactState = require('./passReactState');

function makeChildNodes(reactData, stateData, getState) {

  return reactData.map((obj, i) => {

    return obj.children.length === 0

      ? (
          React.createElement(
            obj.tag,
            passReactState(obj, stateData, getState),
            obj.props.textContent)
        )

      : React.createElement(obj.tag, obj.props, extractData(obj.children).mappedData.map(obj => makeChildNodes([obj], stateData, getState)))

  });

}

module.exports = makeChildNodes