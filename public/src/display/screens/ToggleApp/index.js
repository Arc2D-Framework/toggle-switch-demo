import 'display.components.ToggleSwitch';

namespace `display.screens` (
    class ToggleApp extends w3c.ui.Application {
        constructor(element){
            super(element);
        }

        async onConnected() {
            await super.onConnected();
            
            // New Event Listeners Are Initialized Here
            // example: 
            // this.addEventListener("click", (e) => this.doSomething(e),false); ..etc)
        }

        // doSomething(){
        //     code here
        // }
    }
);