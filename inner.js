"use strict";

const inner = {
    bindings: {
        outerF: "&"
    },
    template: `
    <button type="button" ng-click="$ctrl.outerF()">Button in Inner Component</button>
    `,
    controller: function() {

    }

};

app.component("inner", inner)