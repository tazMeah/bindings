"use strict";

const inner = {
    bindings: {
        outerF: "&"
    },
    template: `
    <button type="button" ng-click="$ctrl.outerF()">Button in Inner Component</button>
    `
   

};

app.component("inner", inner)