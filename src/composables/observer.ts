import { observerOptions } from "@/interfaces/"

export function useIntersectionObserver(){
    function createObserver(callback: IntersectionObserverCallback,  options: observerOptions){
        return new IntersectionObserver(callback , options)
    }


    return { createObserver }
}