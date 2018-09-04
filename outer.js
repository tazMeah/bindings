"use strict";

const outer = {
    template: `
    <inner outer-f="$ctrl.outerF();"></inner>
    `,
    controller: function() {
        const vm = this;
        vm.outerF = function(){
            console.log("The method is in the outer component. The button is in the inner component.");
        }
        
    }

};

app.component("outer", outer)