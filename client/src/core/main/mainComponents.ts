import { IQSHeaderOptions } from "../../types/interfaces";
import { DomListener } from "../DomListener";
import { Dom } from "../dom";

export class MainComponents extends DomListener {


        emitter;


        constructor($root: Dom, options:IQSHeaderOptions ) {
            super($root, options.listeners)
            this.emitter = options.emitter
            this.name = options.name
        }

        init() {
            this.initDomListener()
        }
}