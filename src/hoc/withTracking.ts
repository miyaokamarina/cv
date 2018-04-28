import * as React from 'react';
import { withHandlers } from 'recompose';

type Touch = React.SyntheticEvent<HTMLElement> & { nativeEvent: TouchEvent; target: HTMLElement };
type Mouse = React.SyntheticEvent<HTMLElement> & { nativeEvent: MouseEvent; target: HTMLElement };

export const withTracking = <Props, C extends React.ComponentType<Props>>(Component: C): C => {
    return withHandlers({
        onMouseMove: () => (event: Mouse) => {
            const {
                currentTarget,
                target,
                nativeEvent: { offsetX, offsetY },
            } = event;

            let node: null | HTMLElement = target;
            let prev: null | HTMLElement = target;
            let x = offsetX;
            let y = offsetY;

            while (prev !== null && node !== null && node !== currentTarget) {
                node = node.parentElement;

                x = x + prev.offsetLeft - ((node as any) as HTMLElement).offsetLeft;
                y = y + prev.offsetTop - ((node as any) as HTMLElement).offsetTop;

                prev = node;
            }

            currentTarget.style.setProperty('--x', `${x}px`);
            currentTarget.style.setProperty('--y', `${y}px`);
        },
        onTouchMove: () => (event: Touch) => {
            const {
                currentTarget,
                target,
                nativeEvent: { touches },
            } = event;

            if (touches.length !== 1) {
                return;
            }

            const [touch] = touches as any; // TODO: Add `Symbol.iterator` method to `TouchList`
            const rect = target.getBoundingClientRect(); // TODO: Use `IntersectionObserver`.

            let node: null | HTMLElement = target;
            let prev: null | HTMLElement = target;
            let x = touch.pageX - rect.left - window.scrollX;
            let y = touch.pageY - rect.top - window.scrollY;

            while (prev !== null && node !== null && node !== currentTarget) {
                node = node.parentElement;

                x = x + prev.offsetLeft - (node as HTMLElement).offsetLeft;
                y = y + prev.offsetTop - (node as HTMLElement).offsetTop;

                prev = node;
            }

            currentTarget.style.setProperty('--x', `${x}px`);
            currentTarget.style.setProperty('--y', `${y}px`);
        },
        onTouchStart: () => ({ currentTarget, target, nativeEvent: { touches } }: Touch) => {
            currentTarget.style.setProperty('--r', '90px'); // TODO: Use variable.

            if (touches.length !== 1) {
                return;
            }

            const [touch] = touches as any;
            const rect = target.getBoundingClientRect(); // TODO: Use `IntersectionObserver`.

            let node: null | HTMLElement = target;
            let prev: null | HTMLElement = target;
            let x = touch.pageX - rect.left - window.scrollX;
            let y = touch.pageY - rect.top - window.scrollY;

            while (prev !== null && node !== null && node !== currentTarget) {
                node = node.parentElement;

                x = x + prev.offsetLeft;
                y = y + prev.offsetTop;

                prev = node;
            }

            currentTarget.style.setProperty('--x', `${x}px`);
            currentTarget.style.setProperty('--y', `${y}px`);
        },
        onTouchEnd: () => (event: Touch) => {
            const { currentTarget } = event;

            currentTarget.style.setProperty('--r', '0');
        },
        onTouchCancel: () => (event: Touch) => {
            const { currentTarget } = event;

            currentTarget.style.setProperty('--r', '0');
        },
    })(Component as any) as any;
};
