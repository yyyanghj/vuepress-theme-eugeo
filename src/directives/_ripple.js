function setStyle(el, styleObj) {
  for (const prop of Object.keys(styleObj)) {
    el.style[prop] = styleObj[prop];
  }
}

const RIPPLE_CONTAINER_CLASS = 'v-ripple__container';
const RIPPLE_INNER_CLASS = 'v-ripple__inner';

class Ripple {
  constructor(event, container) {
    this.event = event;
    this.container = container;
    this.create();
  }

  create() {
    const { size, left, top } = this.calcSize();
    const container = this.container;
    const index = ++container.count;
    const ripple = document.createElement('span');
    const handler = () => {
      // 不是最后一个动画就直接删除
      if (index !== container.count) {
        container.removeChild(ripple);
      } else if (container.isMouseUp) {
        // 最后一个动画且鼠标已经抬起
        container.parentNode.removeChild(container); // 直接删除容器
      } else {
        // 最后一个动画且鼠标未抬起, 交给 mouseUp 事件删除
        container.keepLastRipple = true;
      }
    };

    ripple.classList.add(RIPPLE_INNER_CLASS);

    setStyle(ripple, {
      width: `${size}px`,
      height: `${size}px`,
      left: `${left}px`,
      top: `${top}px`
    });

    ripple.addEventListener('animationend', handler);

    container.appendChild(ripple);
  }

  calcSize() {
    const { offsetX, offsetY, currentTarget: el } = this.event;
    const { clientWidth: width, clientHeight: height } = el;
    const points = [[0, 0], [width, 0], [width, height], [0, height]];
    const radius = points.reduce((max, [x, y]) => {
      // 勾股定理求半径
      const r = Math.sqrt((offsetX - x) ** 2 + (offsetY - y) ** 2);
      return r > max ? r : max;
    }, 0);

    return {
      size: 2 * radius,
      left: offsetX - radius,
      top: offsetY - radius
    };
  }

  static handleShow(event) {
    const el = event.currentTarget;

    let container = el.querySelector(`.${RIPPLE_CONTAINER_CLASS}`);
    if (!container) {
      container = document.createElement('span');
      container.classList.add(RIPPLE_CONTAINER_CLASS);
      container.count = 0;
      el.appendChild(container);
    }
    container.isMouseUp = false;
    new Ripple(event, container);
  }

  static handleHide(event) {
    const el = event.currentTarget;
    const container = el.querySelector(`.${RIPPLE_CONTAINER_CLASS}`);
    if (!container) {
      return;
    }
    container.isMouseUp = true;
    if (container.keepLastRipple) {
      el.removeChild(container);
    }
  }
}

function isEnabled(v) {
  return typeof v === 'undefined' || !!v;
}

function updateRipple(el, binding, wasEnabled) {
  const enabled = isEnabled(binding.value);
  if (enabled && !wasEnabled) {
    el.classList.add('v-ripple');
    el.addEventListener('mousedown', Ripple.handleShow);
    el.addEventListener('mouseup', Ripple.handleHide);
    el.addEventListener('mouseleave', Ripple.handleHide);
  } else if (!enabled && wasEnabled) {
    removeListener(el);
  }
}

function removeListener(el) {
  el.removeEventListener('mousedown', Ripple.handleShow);
  el.removeEventListener('mouseup', Ripple.handleHide);
  el.removeEventListener('mouseleave', Ripple.handleHide);
}

export default {
  bind(el, binding, vnode) {
    updateRipple(el, binding, false);
    vnode.context &&
      vnode.context.$nextTick(() => {
        const computed = window.getComputedStyle(el);
        if (computed && computed.display === 'inline') {
          console.warn('ripple 指定无法作用在 inline 元素上');
        }
      });
  },
  unbind(el) {
    removeListener(el);
  },
  update(el, binding) {
    if (binding.value === binding.oldValue) {
      return;
    }
    const wasEnabled = isEnabled(binding.oldValue);
    updateRipple(el, binding, wasEnabled);
  }
};
