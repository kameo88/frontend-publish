import { ObjectDirective } from "vue";
import { createPopper } from "@popperjs/core";

// 마우스 엔터
const onMouseEnter = (event: any) => {
  if (event.target.popperInstance) {
    event.target.popperInstance.update();
  }

  if (event.target.tooltip) {
    event.target.tooltip.style.display = "";
  }
};

// 마우스 리브
const onMousLeave = (event: any) => {
  if (event.target.tooltip) {
    event.target.tooltip.style.display = "none";
  }
};

export default {
  mounted(el: any, binding: any) {
    setTimeout(() => {
      if (el.innerText && el.scrollWidth > el.offsetWidth) {
        // 위치
        let placement = "top";

        if (binding.arg) {
          placement = binding.arg;
        }

        // 최대넓이
        let maxWidth = "";

        if (binding.value && typeof binding.value === "number") {
          maxWidth = binding.value + "px";
        }

        // 툴팁
        const tooltip = document.createElement("div");
        tooltip.className = "el-popper is-dark";
        tooltip.innerText = el.innerText;
        tooltip.style.zIndex = "99999";
        tooltip.style.display = "none";
        tooltip.style.maxWidth = maxWidth;
        el.tooltip = tooltip;

        // 화살표
        const arrow = document.createElement("div");
        arrow.className = "el-popper__arrow";
        arrow.style.bottom = "-4px";
        tooltip.appendChild(arrow);

        // body에 추가
        document.body.appendChild(tooltip);

        // 팝업 생성
        el.popperInstance = createPopper(el, tooltip, {
          placement: placement as any,
          strategy: "fixed",
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 8],
              },
            },
            {
              name: "arrow",
              options: {
                element: arrow,
                padding: 10,
              },
            },
          ],
        });

        // 마우스 엔터 이벤트 생성
        el.addEventListener("mouseenter", onMouseEnter, false);

        // 마우스 리브 이벤트 생성
        el.addEventListener("mouseleave", onMousLeave, false);
      }
    }, 100);
  },
  beforeUnmount(el: any) {
    // 팝업 인스턴스 제거
    if (el.popperInstance) {
      el.popperInstance.destroy();
    }

    if (el.tooltip) {
      // 툴팁 제거
      document.body.removeChild(el.tooltip);

      // 마우스 엔터 이벤트 제거
      el.removeEventListener("mouseenter", onMouseEnter, false);

      // 마우스 리브 이벤트 제거
      el.removeEventListener("mouseleave", onMousLeave, false);
    }
  },
} as ObjectDirective;
