import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.subscribe = options.subscribe || []
        this.store = options.store
        this.unsubscribers = []

        this.prepare()
    }

    /**
     *  Prepare component to init
     */
    prepare() {
        // this.storeChanged()
    }

    /**
     *  Return components template
     * @return {string}
     */
    toHTML() {
        return ''
    }

    /**
     *  Event listener notification
     * @param event
     * @param args
     */
    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }

    /**
     * Subscribe on event
     * @param event
     * @param fn
     */
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubscribers.push(unsub)
    }

    $dispatch(action) {
        this.store.dispatch(action)
    }

    storeChanged() {
    }

    isWatching(key) {
        return this.subscribe.includes(key)
    }

    /**
     *  add dom listeners
     */
    init() {
        this.initDOMListeners()
    }

    /**
     * Remove component and listeners
     */
    destroy() {
        this.removeDOMListeners()
        this.unsubscribers.forEach(unsub => unsub())
    }
}
