export default class Tooltip {
  $element = null;
  content = "";
  eventMove = null;
  options = {};
  tooltipOpen = false;

  constructor(node, options = {}) {
    if (typeof node === "string") {
      this.$element = document.querySelector(node);
    } else if (typeof node === "object") {
      this.$element = node;
    } else {
      throw new Error("Tooltip node incorrect typeof ");
    }


    this.options.color = options.color ?? "#ccc";
    this.options.width = options.width ?? 200;
    this.options.padding = options.padding ?? 5;
    this.options.margin = options.margin ?? 10;
    this.options.background = options.background ?? '#fff';
    this.options.position = options.position ?? "left";
    this.options.border = options.border ?? "1px solid";
    this.options.border += ' ' + options.color
    this.options.cross = options.cross ?? false;
    this.options.tooltipMove = options.tooltipMove ?? false;
    this.options.animation = options.animation ? { show: 100 } : {};
    this.options.class = options.class ?? "";

    if (!this.$element) return;

    if (this.options.tooltipMove) {
      this.eventMove = (e) => {

        const $tooltip = this.$element.previousElementSibling;
        if (!$tooltip || !$tooltip.dataset.tooltip) return;

        const boundingElement = this.$element.getBoundingClientRect();
        let x = e.pageX,
          y = e.pageY;

        if (
          this.options.position === "left" ||
          this.options.position === "right"
        ) {
          $tooltip.style.top =
            (boundingElement.top + window.pageYOffset) -
            $tooltip.offsetHeight / 2 +
            y -
            this.$element.offsetTop +
            "px";
        } else if (
          this.options.position === "top" ||
          this.options.position === "bottom"
        ) {
          $tooltip.style.left =
            boundingElement.left +
            (boundingElement.left - x) * -1 -
            $tooltip.offsetWidth / 2 +
            "px";
        }
      };

      this.$element.addEventListener("mousemove", this.eventMove);
    }

    this.resizeHandler =  () => {
        if(this.tooltipOpen){
          this.close();
        }
      }

    window.addEventListener("resize",this.resizeHandler,
      false
    );
  }

  open(contentHTML = "") {
    if (document.readyState === "complete") {
        this.tooltipOpen = true
    _addTooltip(this.$element, this.options, contentHTML);
  }
  }

  close() {
    if(this.tooltipOpen){
    const tooltip = this.$element.previousElementSibling;
    if (!tooltip || !tooltip.dataset.tooltip) return;
    tooltip.remove();
    this.tooltipOpen = false
  }
  }

  destroy() {
    this.close();
    if (this.eventMove) {
      this.$element.removeEventListener("mousemove", this.eventMove);
    }
      window.removeEventListener("resize", this.resizeHandler);
  }
}



function _addTooltipPosition($el, $tooltip, options) {
  const boundingElement = $el.getBoundingClientRect();
  const tooltipCenter =
    boundingElement.left + $el.offsetWidth / 2 - options.width / 2 + "px";

  switch (options.position) {
    case "top":
      $tooltip.style.top = _getCenterTopPosition($el, $tooltip, options);
      $tooltip.style.left = tooltipCenter;
      break;
    case "bottom":
      $tooltip.style.top = _getCenterBottomPosition($el, $tooltip, options);
      $tooltip.style.left = tooltipCenter;
      break;
    case "left":
      $tooltip.style.top = _getCenterLeftPosition($el, $tooltip);
      $tooltip.style.left =
        boundingElement.left - $tooltip.offsetWidth - options.margin + "px";
      break;
    case "right":
      $tooltip.style.top = _getCenterRightPosition($el, $tooltip);
      $tooltip.style.left =
        boundingElement.left + $el.offsetWidth + options.margin + "px";
      break;
    default:
      break;
  }
}

function _addTooltip($el, options, html) {
  if (
    $el.previousElementSibling !== null &&
    $el.previousElementSibling.dataset.tooltip
  )
    return;
  const $tooltip = _createTooltip($el, options, html);
  $el.insertAdjacentElement("beforebegin", $tooltip);
  _addTooltipPosition($el, $tooltip, options);

  if (options.animation.show) {
    const opacityAnimate = (ms = 50) => {
      let opacity = 0;
      let timerId = setInterval(() => {
        $tooltip.style.opacity = opacity;
        if (opacity >= 1) {
          clearInterval(timerId);
        } else {
          opacity = opacity + 0.1;
        }
      }, 50);
    };
    opacityAnimate(options.animation.show);
  }

  if (options.cross) _addEventCrossClick($el);

  return $tooltip;
}

function _createTooltip($el, options, html) {
  const $tooltip = document.createElement("div");

  const p = options.padding;

  const pt =
    !options.cross || options.padding > 10 ? options.padding : 10;

  $tooltip.dataset.tooltip = "open";
  $tooltip.style.display = "inline-block";
  $tooltip.style.width = options.width + "px";
  $tooltip.style.padding = `${pt}px ${p}px ${p}px ${p}px`;
  $tooltip.style.position = "absolute";
  $tooltip.style.border = options.border;
  $tooltip.style.background = options.background

  if (options.animation.show) {
    $tooltip.style.opacity = 0;
  }

  if (options.class) $tooltip.classList.add(options.class);

  const btnClose = options.cross
    ? `
              <span style="
              position:absolute;
              top: 0px;
              right: 5px;
              font-weight: bold;
              line-height: 1;
              cursor: pointer;
              "
              data-cross=true
              >&times;</span>
          `
    : "";

  $tooltip.innerHTML = btnClose + html;

  $tooltip.insertAdjacentElement("afterbegin", _createArrow(options));

  return $tooltip;
}

function _createArrow(options) {
  const $arrow = document.createElement("div");

  $arrow.style.border = "solid transparent";
  $arrow.style.position = "absolute";
  $arrow.style.borderWidth = "9px";

  switch (options.position) {
    case "top":
      $arrow.style.top = "100%";
      $arrow.style.left = "50%";
      $arrow.style.borderTopColor = options.color;
      $arrow.style.marginLeft = "-9px";
      break;
    case "bottom":
      $arrow.style.bottom = "100%";
      $arrow.style.left = "50%";
      $arrow.style.borderBottomColor = options.color;
      $arrow.style.marginLeft = "-9px";
      break;
    case "left":
      $arrow.style.top = "50%";
      $arrow.style.left = "100%";
      $arrow.style.marginTop = "-9px";
      $arrow.style.borderLeftColor = options.color;
      break;
    case "right":
      $arrow.style.top = "50%";
      $arrow.style.right = "100%";
      $arrow.style.marginTop = "-9px";
      $arrow.style.borderRightColor = options.color;
      break;
    default:
      break;
  }

  return $arrow;
}

function _addEventCrossClick($el) {
  const tooltip = $el.previousElementSibling;
  if (!tooltip || !tooltip.dataset.tooltip) return;
  tooltip.addEventListener("click", (et) => {
    if (et.target.dataset.cross) {
      tooltip.remove();
    }
  });
}

function _getCenterBottomPosition($el, $tooltip, options) {
  return (
    $el.getBoundingClientRect().bottom +
    window.pageYOffset +
    options.margin +
    "px"
  );
}

function _getCenterRightPosition($el, $tooltip) {
  return (
    (window.pageYOffset +  $el.getBoundingClientRect().top) +
      $el.offsetHeight / 2 -
      $tooltip.offsetHeight / 2 +
      "px"
    );
}
function _getCenterLeftPosition($el, $tooltip) {
  return (
  (window.pageYOffset +  $el.getBoundingClientRect().top) +
    $el.offsetHeight / 2 -
    $tooltip.offsetHeight / 2 +
    "px"
  );
}
function _getCenterTopPosition($el, $tooltip, options) {
  return (
    $el.getBoundingClientRect().top +
    window.pageYOffset -
    $tooltip.offsetHeight -
    options.margin +
    "px"
  );
}
