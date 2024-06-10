export function utils() {

    function capitalize(string: string) {
        if (typeof string != 'string') {
            return ``
        }
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    function getMethodName(eventName: string) {
        return `on` + capitalize(eventName)
    }

    function storage(key: string, data: null | any = null) {
        if (!data) {
            return JSON.parse(localStorage.getItem(key))
        }

        localStorage.setItem(key, JSON.stringify(data))
    }

    function removeStorage(key: string) {
        localStorage.removeItem(key)
    }

    function debounce(fn: any, wait: number) {
        let timeout: string | number | NodeJS.Timeout
        return function(...args: any) {
            const later = () => {
                clearTimeout(timeout)
                // eslint-disable-next-line no-invalid-this
                fn.apply(this, args)
                // fn(...args)
            }
            clearTimeout(timeout)
            timeout = setTimeout(later, wait)
        }
    }

    function isEqual(a: Object, b: Object) {
        if (typeof a === 'object' && typeof b === 'object') {
            return JSON.stringify(a) === JSON.stringify(b)
        }
        return a == b
    }

    function rewind(array: Array<any>) {
        const res = array
        let m = array.length,
        t,i

        while (m) {
            i = Math.floor(Math.random() * m--)
            t = res[m]

            res[m] = res[i]
            res[i] = t
        }
           
        return res;
    }


    return {
        getMethodName, storage, debounce, isEqual, removeStorage, rewind
    }
}