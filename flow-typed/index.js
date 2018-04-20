// @flow

declare var Intl: {
    DateTimeFormat: TODO,
    NumberFormat: TODO,
    Collator: TODO,
    PluralRules: TODO,
};

type MediaQueryListEventTypes = 'change';

declare class EventTarget {
    addEventListener(type: MouseEventTypes, listener: MouseEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
    addEventListener(type: FocusEventTypes, listener: FocusEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
    addEventListener(type: KeyboardEventTypes, listener: KeyboardEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
    addEventListener(type: TouchEventTypes, listener: TouchEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
    addEventListener(type: WheelEventTypes, listener: WheelEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
    addEventListener(type: ProgressEventTypes, listener: ProgressEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
    addEventListener(type: DragEventTypes, listener: DragEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
    addEventListener(type: AnimationEventTypes, listener: AnimationEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
    addEventListener(type: MediaQueryListEventTypes, listener: MediaQueryListListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
    addEventListener(type: string, listener: EventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;

    removeEventListener(type: MouseEventTypes, listener: MouseEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
    removeEventListener(type: FocusEventTypes, listener: FocusEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
    removeEventListener(type: KeyboardEventTypes, listener: KeyboardEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
    removeEventListener(type: TouchEventTypes, listener: TouchEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
    removeEventListener(type: WheelEventTypes, listener: WheelEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
    removeEventListener(type: ProgressEventTypes, listener: ProgressEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
    removeEventListener(type: DragEventTypes, listener: DragEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
    removeEventListener(type: AnimationEventTypes, listener: AnimationEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
    removeEventListener(type: string, listener: EventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;

    attachEvent?: (type: MouseEventTypes, listener: MouseEventListener) => void;
    attachEvent?: (type: FocusEventTypes, listener: FocusEventListener) => void;
    attachEvent?: (type: KeyboardEventTypes, listener: KeyboardEventListener) => void;
    attachEvent?: (type: TouchEventTypes, listener: TouchEventListener) => void;
    attachEvent?: (type: WheelEventTypes, listener: WheelEventListener) => void;
    attachEvent?: (type: ProgressEventTypes, listener: ProgressEventListener) => void;
    attachEvent?: (type: DragEventTypes, listener: DragEventListener) => void;
    attachEvent?: (type: AnimationEventTypes, listener: AnimationEventListener) => void;
    attachEvent?: (type: string, listener: EventListener) => void;

    detachEvent?: (type: MouseEventTypes, listener: MouseEventListener) => void;
    detachEvent?: (type: FocusEventTypes, listener: FocusEventListener) => void;
    detachEvent?: (type: KeyboardEventTypes, listener: KeyboardEventListener) => void;
    detachEvent?: (type: TouchEventTypes, listener: TouchEventListener) => void;
    detachEvent?: (type: WheelEventTypes, listener: WheelEventListener) => void;
    detachEvent?: (type: ProgressEventTypes, listener: ProgressEventListener) => void;
    detachEvent?: (type: DragEventTypes, listener: DragEventListener) => void;
    detachEvent?: (type: AnimationEventTypes, listener: AnimationEventListener) => void;
    detachEvent?: (type: string, listener: EventListener) => void;

    dispatchEvent(evt: Event): boolean;

    // Deprecated

    cancelBubble: boolean;
    initEvent(eventTypeArg: string, canBubbleArg: boolean, cancelableArg: boolean): void;
}

type $If<X: boolean, Then, Else = empty> = $Call<((true, Then, Else) => Then) & ((false, Then, Else) => Else), X, Then, Else>;

type $Not<X: boolean> = $If<X, false, true>;
type $And<X: boolean, Y: boolean> = $If<X, Y, false>;
type $Or<X: boolean, Y: boolean> = $If<X, true, Y>;

type $Gte<X, Y> = $Call<(($Subtype<X>) => true) & (mixed => false), Y>;
