// @flow

import * as React from 'react';
import { withHandlers } from 'recompose';

import { store } from '~/store';
import { createTheme } from '~/fun/createTheme';
import type { ThemeType } from '~/fun/createTheme';

let old: ?boolean = null;
let __: ?ThemeType = null;

export const withTracking = <T>(Component: React.ComponentType<T>): React.ComponentType<T> =>
    withHandlers({
        onMouseMove: () => event => {
            const {
                currentTarget,
                target,
                nativeEvent: { offsetX, offsetY },
            } = event;

            let node = target;
            let prev = target;
            let x = offsetX;
            let y = offsetY;

            while (node !== currentTarget) {
                node = node.parentNode;

                x = x + prev.offsetLeft - node.offsetLeft;
                y = y + prev.offsetTop - node.offsetTop;

                prev = node;
            }

            currentTarget.style.setProperty('--x', `${x}px`);
            currentTarget.style.setProperty('--y', `${y}px`);
        },
        onTouchMove: () => event => {
            const {
                currentTarget,
                target,
                nativeEvent: { touches },
            } = event;

            if (touches.length !== 1) {
                return;
            }

            const [touch] = touches;
            const rect = target.getBoundingClientRect(); // TODO: Use `IntersectionObserver`.

            let node = target;
            let prev = target;
            let x = touch.pageX - rect.left - window.scrollX;
            let y = touch.pageY - rect.top - window.scrollY;

            while (node !== currentTarget) {
                node = node.parentNode;

                x = x + prev.offsetLeft - node.offsetLeft;
                y = y + prev.offsetTop - node.offsetTop;

                prev = node;
            }

            currentTarget.style.setProperty('--x', `${x}px`);
            currentTarget.style.setProperty('--y', `${y}px`);
        },
        onTouchStart: () => ({ currentTarget, target, nativeEvent: { touches } }) => {
            const state = store.getState();

            if (!__ || old !== state.isTouch) {
                __ = createTheme(state);
                old = state.isTouch;
            }

            currentTarget.style.setProperty('--size', __.cellIL3);

            if (touches.length !== 1) {
                return;
            }

            const [touch] = touches;
            const rect = target.getBoundingClientRect(); // TODO: Use `IntersectionObserver`.

            let node = target;
            let prev = target;
            let x = touch.pageX - rect.left - window.scrollX;
            let y = touch.pageY - rect.top - window.scrollY;

            while (node !== currentTarget) {
                node = node.parentNode;

                x = x + prev.offsetLeft;
                y = y + prev.offsetTop;

                prev = node;
            }

            currentTarget.style.setProperty('--x', `${x}px`);
            currentTarget.style.setProperty('--y', `${y}px`);
        },
        onTouchEnd: () => event => {
            const { currentTarget } = event;

            currentTarget.style.setProperty('--size', 0);
        },
        onTouchCancel: () => event => {
            const { currentTarget } = event;

            currentTarget.style.setProperty('--size', 0);
        },
    })(Component);
