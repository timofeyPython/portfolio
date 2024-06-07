import { IDomListener, IQSHeaderOptions } from "../../types/interfaces";
import { DomListener } from "../DomListener";

export class MainComponents extends DomListener {


        emitter;


        constructor($root: IDomListener, options:IQSHeaderOptions ) {
            super($root, options.listeners)
            this.emitter = options.emitter
            this.name = options.name
        }

        init() {
            this.initDomListener()
        }
}