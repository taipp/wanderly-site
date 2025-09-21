class Accordion {
    constructor(options) {
        const {
            $container,
            actionButtonSelectorClassName = 'accordion__item-header-button',
            itemSelectorClassName = 'accordion__item',
        }  = options;

        if (!($container instanceof HTMLElement)) {
            throw new Error('Container must be HTMLElement');
        }

        this.$container = $container;
        this.actionButtonSelectorClassName = actionButtonSelectorClassName;
        this.itemSelectorClassName = itemSelectorClassName;

        this.init();
    }

    init () {
        this.initListeners();
    }

    initListeners () {
        this.$container.addEventListener('click', this.containerOnClick.bind(this))
    }

    containerOnClick (event) {
        const {target} = event;

        if (target.classList.contains(this.actionButtonSelectorClassName) || target.parentElement.classList.contains(this.actionButtonSelectorClassName)) {
            const item = target.closest(`.${this.itemSelectorClassName}`);
            item.classList.toggle('is-active');
        }
    }
}