import { ref } from "vue";
import type { Ref } from "vue"

export function useScrollEvent() {
    const scrolling: Ref<boolean> = ref(false);

    function getDomHeight(dom: HTMLElement): number {
        console.log(dom);
        return dom.offsetTop;
    }

    return { getDomHeight };
}