import { HLET } from "../../../types/interfaces";

export function observer ($el:HLET, $this: any) {

    const options = {
        rootMargin: '0px',
        threshold: [ 0, 0.5 ]
    };
     

    // callback-функция (возвратная функция)
    const trueCallback = function(entries: Array<{target: any, isIntersecting: boolean}>) {
        entries.forEach((entry) => {
            const {target, isIntersecting } = entry
            isIntersecting ? fn(true) : fn(false)
   
        });
    }

    const observer = new IntersectionObserver( trueCallback, options );
 
    observer.observe( $el.querySelector('#title') ); // запускаем "слежку" за элементом(ами) в константе target


    const fn = (status: boolean) =>  $this.$emit('info : visibleInfo',  status)
}