// Adapted from @types/react/index.d.ts to produce native DOM objects instead
// of React.DOM objects.

/// <reference lib="dom" />

import * as CSS from 'csstype';

export {}

type NativeEvent = Event;
type NativeAnimationEvent = AnimationEvent;
type NativeClipboardEvent = ClipboardEvent;
type NativeCompositionEvent = CompositionEvent;
type NativeDragEvent = DragEvent;
type NativeFocusEvent = FocusEvent;
type NativeKeyboardEvent = KeyboardEvent;
type NativeMouseEvent = MouseEvent;
type NativeTouchEvent = TouchEvent;
type NativePointerEvent = PointerEvent;
type NativeTransitionEvent = TransitionEvent;
type NativeUIEvent = UIEvent;
type NativeWheelEvent = WheelEvent;
type Booleanish = boolean | 'true' | 'false';

declare namespace NativeJSX {
    type Key = string | number;

    interface Attributes {
        key?: Key | null
    }

    interface ClassAttributes extends Attributes {}
    type DetailedHTMLProps<E extends HTMLAttributes<T>, T> = ClassAttributes & E;

    interface BaseTypedEvent<C, T> {
        currentTarget: C;
        target: T;
    }

    interface TypedEvent<T = Element> extends BaseTypedEvent<EventTarget & T, EventTarget> {}

    type OverrideTarget<E extends NativeEvent> = Omit<E, 'currentTarget' | 'target'>

    type Event<T = Element> = TypedEvent<T> & OverrideTarget<NativeEvent>
    type ChangeEvent<T = Element> = TypedEvent<T> & OverrideTarget<NativeEvent>
    type ClipboardEvent<T = Element> = TypedEvent<T> & OverrideTarget<NativeClipboardEvent>
    type CompositionEvent<T = Element> = TypedEvent<T> & OverrideTarget<NativeCompositionEvent>
    type DragEvent<T = Element> = MouseEvent<T> & OverrideTarget<NativeDragEvent>
    type PointerEvent<T = Element> = MouseEvent<T> & OverrideTarget<NativePointerEvent>
    type FormEvent<T = Element> = TypedEvent<T> & OverrideTarget<NativeEvent>
    type FocusEvent<T = Element> = TypedEvent<T> & OverrideTarget<NativeFocusEvent>
    type KeyboardEvent<T = Element> = TypedEvent<T> & OverrideTarget<NativeKeyboardEvent>
    type MouseEvent<T = Element> = UIEvent<T> & OverrideTarget<NativeMouseEvent>
    type TouchEvent<T = Element> = UIEvent<T> & OverrideTarget<NativeTouchEvent>
    type UIEvent<T = Element> = TypedEvent<T> & OverrideTarget<NativeUIEvent>
    type WheelEvent<T = Element> = MouseEvent<T> & OverrideTarget<NativeWheelEvent>
    type AnimationEvent<T = Element> = TypedEvent<T> & OverrideTarget<NativeAnimationEvent>
    type TransitionEvent<T = Element> = TypedEvent<T> & OverrideTarget<NativeTransitionEvent>

    type BaseEventHandler<E extends NativeEvent> = { bivarianceHack(event: E): void }['bivarianceHack'];

    type EventHandler<T = Element> = BaseEventHandler<Event<T>>
    type ClipboardEventHandler<T = Element> = BaseEventHandler<ClipboardEvent<T>>;
    type CompositionEventHandler<T = Element> = BaseEventHandler<CompositionEvent<T>>;
    type DragEventHandler<T = Element> = BaseEventHandler<DragEvent<T>>;
    type FocusEventHandler<T = Element> = BaseEventHandler<FocusEvent<T>>;
    type FormEventHandler<T = Element> = BaseEventHandler<FormEvent<T>>;
    type ChangeEventHandler<T = Element> = BaseEventHandler<ChangeEvent<T>>;
    type KeyboardEventHandler<T = Element> = BaseEventHandler<KeyboardEvent<T>>;
    type MouseEventHandler<T = Element> = BaseEventHandler<MouseEvent<T>>;
    type TouchEventHandler<T = Element> = BaseEventHandler<TouchEvent<T>>;
    type PointerEventHandler<T = Element> = BaseEventHandler<PointerEvent<T>>;
    type UIEventHandler<T = Element> = BaseEventHandler<UIEvent<T>>;
    type WheelEventHandler<T = Element> = BaseEventHandler<WheelEvent<T>>;
    type AnimationEventHandler<T = Element> = BaseEventHandler<AnimationEvent<T>>;
    type TransitionEventHandler<T = Element> = BaseEventHandler<TransitionEvent<T>>;

    interface DOMAttributes<T> {
        children?: HTMLElement | string | Array<HTMLElement | string>;
        dangerouslySetInnerHTML?: {
            __html: string;
        };

        // Clipboard Events
        onCopy?: ClipboardEventHandler<T>;
        onCopyCapture?: ClipboardEventHandler<T>;
        onCut?: ClipboardEventHandler<T>;
        onCutCapture?: ClipboardEventHandler<T>;
        onPaste?: ClipboardEventHandler<T>;
        onPasteCapture?: ClipboardEventHandler<T>;

        // Composition Events
        onCompositionEnd?: CompositionEventHandler<T>;
        onCompositionEndCapture?: CompositionEventHandler<T>;
        onCompositionStart?: CompositionEventHandler<T>;
        onCompositionStartCapture?: CompositionEventHandler<T>;
        onCompositionUpdate?: CompositionEventHandler<T>;
        onCompositionUpdateCapture?: CompositionEventHandler<T>;

        // Focus Events
        onFocus?: FocusEventHandler<T>;
        onFocusCapture?: FocusEventHandler<T>;
        onBlur?: FocusEventHandler<T>;
        onBlurCapture?: FocusEventHandler<T>;

        // Form Events
        onChange?: FormEventHandler<T>;
        onChangeCapture?: FormEventHandler<T>;
        onBeforeInput?: FormEventHandler<T>;
        onBeforeInputCapture?: FormEventHandler<T>;
        onInput?: FormEventHandler<T>;
        onInputCapture?: FormEventHandler<T>;
        onReset?: FormEventHandler<T>;
        onResetCapture?: FormEventHandler<T>;
        onSubmit?: FormEventHandler<T>;
        onSubmitCapture?: FormEventHandler<T>;
        onInvalid?: FormEventHandler<T>;
        onInvalidCapture?: FormEventHandler<T>;

        // Image Events
        onLoad?: EventHandler<T>;
        onLoadCapture?: EventHandler<T>;
        onError?: EventHandler<T>; // also a Media Event
        onErrorCapture?: EventHandler<T>; // also a Media Event

        // Keyboard Events
        onKeyDown?: KeyboardEventHandler<T>;
        onKeyDownCapture?: KeyboardEventHandler<T>;
        onKeyPress?: KeyboardEventHandler<T>;
        onKeyPressCapture?: KeyboardEventHandler<T>;
        onKeyUp?: KeyboardEventHandler<T>;
        onKeyUpCapture?: KeyboardEventHandler<T>;

        // Media Events
        onAbort?: EventHandler<T>;
        onAbortCapture?: EventHandler<T>;
        onCanPlay?: EventHandler<T>;
        onCanPlayCapture?: EventHandler<T>;
        onCanPlayThrough?: EventHandler<T>;
        onCanPlayThroughCapture?: EventHandler<T>;
        onDurationChange?: EventHandler<T>;
        onDurationChangeCapture?: EventHandler<T>;
        onEmptied?: EventHandler<T>;
        onEmptiedCapture?: EventHandler<T>;
        onEncrypted?: EventHandler<T>;
        onEncryptedCapture?: EventHandler<T>;
        onEnded?: EventHandler<T>;
        onEndedCapture?: EventHandler<T>;
        onLoadedData?: EventHandler<T>;
        onLoadedDataCapture?: EventHandler<T>;
        onLoadedMetadata?: EventHandler<T>;
        onLoadedMetadataCapture?: EventHandler<T>;
        onLoadStart?: EventHandler<T>;
        onLoadStartCapture?: EventHandler<T>;
        onPause?: EventHandler<T>;
        onPauseCapture?: EventHandler<T>;
        onPlay?: EventHandler<T>;
        onPlayCapture?: EventHandler<T>;
        onPlaying?: EventHandler<T>;
        onPlayingCapture?: EventHandler<T>;
        onProgress?: EventHandler<T>;
        onProgressCapture?: EventHandler<T>;
        onRateChange?: EventHandler<T>;
        onRateChangeCapture?: EventHandler<T>;
        onSeeked?: EventHandler<T>;
        onSeekedCapture?: EventHandler<T>;
        onSeeking?: EventHandler<T>;
        onSeekingCapture?: EventHandler<T>;
        onStalled?: EventHandler<T>;
        onStalledCapture?: EventHandler<T>;
        onSuspend?: EventHandler<T>;
        onSuspendCapture?: EventHandler<T>;
        onTimeUpdate?: EventHandler<T>;
        onTimeUpdateCapture?: EventHandler<T>;
        onVolumeChange?: EventHandler<T>;
        onVolumeChangeCapture?: EventHandler<T>;
        onWaiting?: EventHandler<T>;
        onWaitingCapture?: EventHandler<T>;

        // MouseEvents
        onAuxClick?: MouseEventHandler<T>;
        onAuxClickCapture?: MouseEventHandler<T>;
        onClick?: MouseEventHandler<T>;
        onClickCapture?: MouseEventHandler<T>;
        onContextMenu?: MouseEventHandler<T>;
        onContextMenuCapture?: MouseEventHandler<T>;
        onDoubleClick?: MouseEventHandler<T>;
        onDoubleClickCapture?: MouseEventHandler<T>;
        onDrag?: DragEventHandler<T>;
        onDragCapture?: DragEventHandler<T>;
        onDragEnd?: DragEventHandler<T>;
        onDragEndCapture?: DragEventHandler<T>;
        onDragEnter?: DragEventHandler<T>;
        onDragEnterCapture?: DragEventHandler<T>;
        onDragExit?: DragEventHandler<T>;
        onDragExitCapture?: DragEventHandler<T>;
        onDragLeave?: DragEventHandler<T>;
        onDragLeaveCapture?: DragEventHandler<T>;
        onDragOver?: DragEventHandler<T>;
        onDragOverCapture?: DragEventHandler<T>;
        onDragStart?: DragEventHandler<T>;
        onDragStartCapture?: DragEventHandler<T>;
        onDrop?: DragEventHandler<T>;
        onDropCapture?: DragEventHandler<T>;
        onMouseDown?: MouseEventHandler<T>;
        onMouseDownCapture?: MouseEventHandler<T>;
        onMouseEnter?: MouseEventHandler<T>;
        onMouseLeave?: MouseEventHandler<T>;
        onMouseMove?: MouseEventHandler<T>;
        onMouseMoveCapture?: MouseEventHandler<T>;
        onMouseOut?: MouseEventHandler<T>;
        onMouseOutCapture?: MouseEventHandler<T>;
        onMouseOver?: MouseEventHandler<T>;
        onMouseOverCapture?: MouseEventHandler<T>;
        onMouseUp?: MouseEventHandler<T>;
        onMouseUpCapture?: MouseEventHandler<T>;

        // Selection Events
        onSelect?: EventHandler<T>;
        onSelectCapture?: EventHandler<T>;

        // Touch Events
        onTouchCancel?: TouchEventHandler<T>;
        onTouchCancelCapture?: TouchEventHandler<T>;
        onTouchEnd?: TouchEventHandler<T>;
        onTouchEndCapture?: TouchEventHandler<T>;
        onTouchMove?: TouchEventHandler<T>;
        onTouchMoveCapture?: TouchEventHandler<T>;
        onTouchStart?: TouchEventHandler<T>;
        onTouchStartCapture?: TouchEventHandler<T>;

        // Pointer Events
        onPointerDown?: PointerEventHandler<T>;
        onPointerDownCapture?: PointerEventHandler<T>;
        onPointerMove?: PointerEventHandler<T>;
        onPointerMoveCapture?: PointerEventHandler<T>;
        onPointerUp?: PointerEventHandler<T>;
        onPointerUpCapture?: PointerEventHandler<T>;
        onPointerCancel?: PointerEventHandler<T>;
        onPointerCancelCapture?: PointerEventHandler<T>;
        onPointerEnter?: PointerEventHandler<T>;
        onPointerEnterCapture?: PointerEventHandler<T>;
        onPointerLeave?: PointerEventHandler<T>;
        onPointerLeaveCapture?: PointerEventHandler<T>;
        onPointerOver?: PointerEventHandler<T>;
        onPointerOverCapture?: PointerEventHandler<T>;
        onPointerOut?: PointerEventHandler<T>;
        onPointerOutCapture?: PointerEventHandler<T>;
        onGotPointerCapture?: PointerEventHandler<T>;
        onGotPointerCaptureCapture?: PointerEventHandler<T>;
        onLostPointerCapture?: PointerEventHandler<T>;
        onLostPointerCaptureCapture?: PointerEventHandler<T>;

        // UI Events
        onScroll?: UIEventHandler<T>;
        onScrollCapture?: UIEventHandler<T>;

        // Wheel Events
        onWheel?: WheelEventHandler<T>;
        onWheelCapture?: WheelEventHandler<T>;

        // Animation Events
        onAnimationStart?: AnimationEventHandler<T>;
        onAnimationStartCapture?: AnimationEventHandler<T>;
        onAnimationEnd?: AnimationEventHandler<T>;
        onAnimationEndCapture?: AnimationEventHandler<T>;
        onAnimationIteration?: AnimationEventHandler<T>;
        onAnimationIterationCapture?: AnimationEventHandler<T>;

        // Transition Events
        onTransitionEnd?: TransitionEventHandler<T>;
        onTransitionEndCapture?: TransitionEventHandler<T>;
    }

    export interface CSSProperties extends CSS.Properties<string | number> {
        /**
         * The index signature was removed to enable closed typing for style
         * using CSSType. You're able to use type assertion or module augmentation
         * to add properties or an index signature of your own.
         *
         * For examples and more information, visit:
         * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
         */
    }

    // All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
    interface AriaAttributes {
        /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
        'aria-activedescendant'?: string;
        /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
        'aria-atomic'?: boolean | 'false' | 'true';
        /**
         * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
         * presented if they are made.
         */
        'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
        /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
        'aria-busy'?: boolean | 'false' | 'true';
        /**
         * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
         * @see aria-pressed @see aria-selected.
         */
        'aria-checked'?: boolean | 'false' | 'mixed' | 'true';
        /**
         * Defines the total number of columns in a table, grid, or treegrid.
         * @see aria-colindex.
         */
        'aria-colcount'?: number;
        /**
         * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
         * @see aria-colcount @see aria-colspan.
         */
        'aria-colindex'?: number;
        /**
         * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
         * @see aria-colindex @see aria-rowspan.
         */
        'aria-colspan'?: number;
        /**
         * Identifies the element (or elements) whose contents or presence are controlled by the current element.
         * @see aria-owns.
         */
        'aria-controls'?: string;
        /** Indicates the element that represents the current item within a container or set of related elements. */
        'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time';
        /**
         * Identifies the element (or elements) that describes the object.
         * @see aria-labelledby
         */
        'aria-describedby'?: string;
        /**
         * Identifies the element that provides a detailed, extended description for the object.
         * @see aria-describedby.
         */
        'aria-details'?: string;
        /**
         * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
         * @see aria-hidden @see aria-readonly.
         */
        'aria-disabled'?: boolean | 'false' | 'true';
        /**
         * Indicates what functions can be performed when a dragged object is released on the drop target.
         * @deprecated in ARIA 1.1
         */
        'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup';
        /**
         * Identifies the element that provides an error message for the object.
         * @see aria-invalid @see aria-describedby.
         */
        'aria-errormessage'?: string;
        /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
        'aria-expanded'?: boolean | 'false' | 'true';
        /**
         * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
         * allows assistive technology to override the general default of reading in document source order.
         */
        'aria-flowto'?: string;
        /**
         * Indicates an element's "grabbed" state in a drag-and-drop operation.
         * @deprecated in ARIA 1.1
         */
        'aria-grabbed'?: boolean | 'false' | 'true';
        /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
        'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
        /**
         * Indicates whether the element is exposed to an accessibility API.
         * @see aria-disabled.
         */
        'aria-hidden'?: boolean | 'false' | 'true';
        /**
         * Indicates the entered value does not conform to the format expected by the application.
         * @see aria-errormessage.
         */
        'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling';
        /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
        'aria-keyshortcuts'?: string;
        /**
         * Defines a string value that labels the current element.
         * @see aria-labelledby.
         */
        'aria-label'?: string;
        /**
         * Identifies the element (or elements) that labels the current element.
         * @see aria-describedby.
         */
        'aria-labelledby'?: string;
        /** Defines the hierarchical level of an element within a structure. */
        'aria-level'?: number;
        /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
        'aria-live'?: 'off' | 'assertive' | 'polite';
        /** Indicates whether an element is modal when displayed. */
        'aria-modal'?: boolean | 'false' | 'true';
        /** Indicates whether a text box accepts multiple lines of input or only a single line. */
        'aria-multiline'?: boolean | 'false' | 'true';
        /** Indicates that the user may select more than one item from the current selectable descendants. */
        'aria-multiselectable'?: boolean | 'false' | 'true';
        /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
        'aria-orientation'?: 'horizontal' | 'vertical';
        /**
         * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
         * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
         * @see aria-controls.
         */
        'aria-owns'?: string;
        /**
         * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
         * A hint could be a sample value or a brief description of the expected format.
         */
        'aria-placeholder'?: string;
        /**
         * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
         * @see aria-setsize.
         */
        'aria-posinset'?: number;
        /**
         * Indicates the current "pressed" state of toggle buttons.
         * @see aria-checked @see aria-selected.
         */
        'aria-pressed'?: boolean | 'false' | 'mixed' | 'true';
        /**
         * Indicates that the element is not editable, but is otherwise operable.
         * @see aria-disabled.
         */
        'aria-readonly'?: boolean | 'false' | 'true';
        /**
         * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
         * @see aria-atomic.
         */
        'aria-relevant'?: 'additions' | 'additions removals' | 'additions text' | 'all' | 'removals' | 'removals additions' | 'removals text' | 'text' | 'text additions' | 'text removals';
        /** Indicates that user input is required on the element before a form may be submitted. */
        'aria-required'?: boolean | 'false' | 'true';
        /** Defines a human-readable, author-localized description for the role of an element. */
        'aria-roledescription'?: string;
        /**
         * Defines the total number of rows in a table, grid, or treegrid.
         * @see aria-rowindex.
         */
        'aria-rowcount'?: number;
        /**
         * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
         * @see aria-rowcount @see aria-rowspan.
         */
        'aria-rowindex'?: number;
        /**
         * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
         * @see aria-rowindex @see aria-colspan.
         */
        'aria-rowspan'?: number;
        /**
         * Indicates the current "selected" state of various widgets.
         * @see aria-checked @see aria-pressed.
         */
        'aria-selected'?: boolean | 'false' | 'true';
        /**
         * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
         * @see aria-posinset.
         */
        'aria-setsize'?: number;
        /** Indicates if items in a table or grid are sorted in ascending or descending order. */
        'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other';
        /** Defines the maximum allowed value for a range widget. */
        'aria-valuemax'?: number;
        /** Defines the minimum allowed value for a range widget. */
        'aria-valuemin'?: number;
        /**
         * Defines the current value for a range widget.
         * @see aria-valuetext.
         */
        'aria-valuenow'?: number;
        /** Defines the human readable text alternative of aria-valuenow for a range widget. */
        'aria-valuetext'?: string;
    }

    // All the WAI-ARIA 1.1 role attribute values from https://www.w3.org/TR/wai-aria-1.1/#role_definitions
    type AriaRole =
        | 'alert'
        | 'alertdialog'
        | 'application'
        | 'article'
        | 'banner'
        | 'button'
        | 'cell'
        | 'checkbox'
        | 'columnheader'
        | 'combobox'
        | 'complementary'
        | 'contentinfo'
        | 'definition'
        | 'dialog'
        | 'directory'
        | 'document'
        | 'feed'
        | 'figure'
        | 'form'
        | 'grid'
        | 'gridcell'
        | 'group'
        | 'heading'
        | 'img'
        | 'link'
        | 'list'
        | 'listbox'
        | 'listitem'
        | 'log'
        | 'main'
        | 'marquee'
        | 'math'
        | 'menu'
        | 'menubar'
        | 'menuitem'
        | 'menuitemcheckbox'
        | 'menuitemradio'
        | 'navigation'
        | 'none'
        | 'note'
        | 'option'
        | 'presentation'
        | 'progressbar'
        | 'radio'
        | 'radiogroup'
        | 'region'
        | 'row'
        | 'rowgroup'
        | 'rowheader'
        | 'scrollbar'
        | 'search'
        | 'searchbox'
        | 'separator'
        | 'slider'
        | 'spinbutton'
        | 'status'
        | 'switch'
        | 'tab'
        | 'table'
        | 'tablist'
        | 'tabpanel'
        | 'term'
        | 'textbox'
        | 'timer'
        | 'toolbar'
        | 'tooltip'
        | 'tree'
        | 'treegrid'
        | 'treeitem'
        | (string & {});

    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // React-specific Attributes
        defaultChecked?: boolean;
        defaultValue?: string | number | ReadonlyArray<string>;
        suppressContentEditableWarning?: boolean;
        suppressHydrationWarning?: boolean;

        // Standard HTML Attributes
        accessKey?: string;
        className?: string;
        contentEditable?: Booleanish | "inherit";
        contextMenu?: string;
        dir?: string;
        draggable?: Booleanish;
        hidden?: boolean;
        id?: string;
        lang?: string;
        placeholder?: string;
        slot?: string;
        spellCheck?: Booleanish;
        style?: CSSProperties;
        tabIndex?: number;
        title?: string;
        translate?: 'yes' | 'no';

        // Unknown
        radioGroup?: string; // <command>, <menuitem>

        // WAI-ARIA
        role?: AriaRole;

        // RDFa Attributes
        about?: string;
        datatype?: string;
        inlist?: any;
        prefix?: string;
        property?: string;
        resource?: string;
        typeof?: string;
        vocab?: string;

        // Non-standard Attributes
        autoCapitalize?: string;
        autoCorrect?: string;
        autoSave?: string;
        color?: string;
        itemProp?: string;
        itemScope?: boolean;
        itemType?: string;
        itemID?: string;
        itemRef?: string;
        results?: number;
        security?: string;
        unselectable?: 'on' | 'off';

        // Living Standard
        /**
         * Hints at the type of data that might be entered by the user while editing the element or its contents
         * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
         */
        inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
        /**
         * Specify that a standard HTML element should behave like a defined custom built-in element
         * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
         */
        is?: string;
    }

    interface AllHTMLAttributes<T> extends HTMLAttributes<T> {
        // Standard HTML Attributes
        accept?: string;
        acceptCharset?: string;
        action?: string;
        allowFullScreen?: boolean;
        allowTransparency?: boolean;
        alt?: string;
        as?: string;
        async?: boolean;
        autoComplete?: string;
        autoFocus?: boolean;
        autoPlay?: boolean;
        capture?: boolean | string;
        cellPadding?: number | string;
        cellSpacing?: number | string;
        charSet?: string;
        challenge?: string;
        checked?: boolean;
        cite?: string;
        classID?: string;
        cols?: number;
        colSpan?: number;
        content?: string;
        controls?: boolean;
        coords?: string;
        crossOrigin?: string;
        data?: string;
        dateTime?: string;
        default?: boolean;
        defer?: boolean;
        disabled?: boolean;
        download?: any;
        encType?: string;
        form?: string;
        formAction?: string;
        formEncType?: string;
        formMethod?: string;
        formNoValidate?: boolean;
        formTarget?: string;
        frameBorder?: number | string;
        headers?: string;
        height?: number | string;
        high?: number;
        href?: string;
        hrefLang?: string;
        htmlFor?: string;
        httpEquiv?: string;
        integrity?: string;
        keyParams?: string;
        keyType?: string;
        kind?: string;
        label?: string;
        list?: string;
        loop?: boolean;
        low?: number;
        manifest?: string;
        marginHeight?: number;
        marginWidth?: number;
        max?: number | string;
        maxLength?: number;
        media?: string;
        mediaGroup?: string;
        method?: string;
        min?: number | string;
        minLength?: number;
        multiple?: boolean;
        muted?: boolean;
        name?: string;
        nonce?: string;
        noValidate?: boolean;
        open?: boolean;
        optimum?: number;
        pattern?: string;
        placeholder?: string;
        playsInline?: boolean;
        poster?: string;
        preload?: string;
        readOnly?: boolean;
        rel?: string;
        required?: boolean;
        reversed?: boolean;
        rows?: number;
        rowSpan?: number;
        sandbox?: string;
        scope?: string;
        scoped?: boolean;
        scrolling?: string;
        seamless?: boolean;
        selected?: boolean;
        shape?: string;
        size?: number;
        sizes?: string;
        span?: number;
        src?: string;
        srcDoc?: string;
        srcLang?: string;
        srcSet?: string;
        start?: number;
        step?: number | string;
        summary?: string;
        target?: string;
        type?: string;
        useMap?: string;
        value?: string | ReadonlyArray<string> | number;
        width?: number | string;
        wmode?: string;
        wrap?: string;
    }

    type HTMLAttributeReferrerPolicy =
        | ''
        | 'no-referrer'
        | 'no-referrer-when-downgrade'
        | 'origin'
        | 'origin-when-cross-origin'
        | 'same-origin'
        | 'strict-origin'
        | 'strict-origin-when-cross-origin'
        | 'unsafe-url';

    interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
        download?: any;
        href?: string;
        hrefLang?: string;
        media?: string;
        ping?: string;
        rel?: string;
        target?: string;
        type?: string;
        referrerPolicy?: HTMLAttributeReferrerPolicy;
    }

    interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {}

    interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
        alt?: string;
        coords?: string;
        download?: any;
        href?: string;
        hrefLang?: string;
        media?: string;
        referrerPolicy?: HTMLAttributeReferrerPolicy;
        rel?: string;
        shape?: string;
        target?: string;
    }

    interface BaseHTMLAttributes<T> extends HTMLAttributes<T> {
        href?: string;
        target?: string;
    }

    interface BlockquoteHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string;
    }

    interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
        autoFocus?: boolean;
        disabled?: boolean;
        form?: string;
        formAction?: string;
        formEncType?: string;
        formMethod?: string;
        formNoValidate?: boolean;
        formTarget?: string;
        name?: string;
        type?: 'submit' | 'reset' | 'button';
        value?: string | ReadonlyArray<string> | number;
    }

    interface CanvasHTMLAttributes<T> extends HTMLAttributes<T> {
        height?: number | string;
        width?: number | string;
    }

    interface ColHTMLAttributes<T> extends HTMLAttributes<T> {
        span?: number;
        width?: number | string;
    }

    interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
        span?: number;
    }

    interface DataHTMLAttributes<T> extends HTMLAttributes<T> {
        value?: string | ReadonlyArray<string> | number;
    }

    interface DetailsHTMLAttributes<T> extends HTMLAttributes<T> {
        open?: boolean;
        onToggle?: EventHandler<T>;
    }

    interface DelHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string;
        dateTime?: string;
    }

    interface DialogHTMLAttributes<T> extends HTMLAttributes<T> {
        open?: boolean;
    }

    interface EmbedHTMLAttributes<T> extends HTMLAttributes<T> {
        height?: number | string;
        src?: string;
        type?: string;
        width?: number | string;
    }

    interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean;
        form?: string;
        name?: string;
    }

    interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
        acceptCharset?: string;
        action?: string;
        autoComplete?: string;
        encType?: string;
        method?: string;
        name?: string;
        noValidate?: boolean;
        target?: string;
    }

    interface HtmlHTMLAttributes<T> extends HTMLAttributes<T> {
        manifest?: string;
    }

    interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
        allow?: string;
        allowFullScreen?: boolean;
        allowTransparency?: boolean;
        /** @deprecated */
        frameBorder?: number | string;
        height?: number | string;
        loading?: "eager" | "lazy";
        /** @deprecated */
        marginHeight?: number;
        /** @deprecated */
        marginWidth?: number;
        name?: string;
        referrerPolicy?: HTMLAttributeReferrerPolicy;
        sandbox?: string;
        /** @deprecated */
        scrolling?: string;
        seamless?: boolean;
        src?: string;
        srcDoc?: string;
        width?: number | string;
    }

    interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
        alt?: string;
        crossOrigin?: "anonymous" | "use-credentials" | "";
        decoding?: "async" | "auto" | "sync";
        height?: number | string;
        loading?: "eager" | "lazy";
        referrerPolicy?: HTMLAttributeReferrerPolicy;
        sizes?: string;
        src?: string;
        srcSet?: string;
        useMap?: string;
        width?: number | string;
    }

    interface InsHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string;
        dateTime?: string;
    }

    interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
        accept?: string;
        alt?: string;
        autoComplete?: string;
        autoFocus?: boolean;
        capture?: boolean | string; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
        checked?: boolean;
        crossOrigin?: string;
        disabled?: boolean;
        enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
        form?: string;
        formAction?: string;
        formEncType?: string;
        formMethod?: string;
        formNoValidate?: boolean;
        formTarget?: string;
        height?: number | string;
        list?: string;
        max?: number | string;
        maxLength?: number;
        min?: number | string;
        minLength?: number;
        multiple?: boolean;
        name?: string;
        pattern?: string;
        placeholder?: string;
        readOnly?: boolean;
        required?: boolean;
        size?: number;
        src?: string;
        step?: number | string;
        type?: string;
        value?: string | ReadonlyArray<string> | number;
        width?: number | string;

        onChange?: ChangeEventHandler<T>;
    }

    interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
        autoFocus?: boolean;
        challenge?: string;
        disabled?: boolean;
        form?: string;
        keyType?: string;
        keyParams?: string;
        name?: string;
    }

    interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string;
        htmlFor?: string;
    }

    interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
        value?: string | ReadonlyArray<string> | number;
    }

    interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
        as?: string;
        crossOrigin?: string;
        href?: string;
        hrefLang?: string;
        integrity?: string;
        media?: string;
        referrerPolicy?: HTMLAttributeReferrerPolicy;
        rel?: string;
        sizes?: string;
        type?: string;
        charSet?: string;
    }

    interface MapHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string;
    }

    interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
        type?: string;
    }

    interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
        autoPlay?: boolean;
        controls?: boolean;
        controlsList?: string;
        crossOrigin?: string;
        loop?: boolean;
        mediaGroup?: string;
        muted?: boolean;
        playsInline?: boolean;
        preload?: string;
        src?: string;
    }

    interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
        charSet?: string;
        content?: string;
        httpEquiv?: string;
        name?: string;
    }

    interface MeterHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string;
        high?: number;
        low?: number;
        max?: number | string;
        min?: number | string;
        optimum?: number;
        value?: string | ReadonlyArray<string> | number;
    }

    interface QuoteHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string;
    }

    interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
        classID?: string;
        data?: string;
        form?: string;
        height?: number | string;
        name?: string;
        type?: string;
        useMap?: string;
        width?: number | string;
        wmode?: string;
    }

    interface OlHTMLAttributes<T> extends HTMLAttributes<T> {
        reversed?: boolean;
        start?: number;
        type?: '1' | 'a' | 'A' | 'i' | 'I';
    }

    interface OptgroupHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean;
        label?: string;
    }

    interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean;
        label?: string;
        selected?: boolean;
        value?: string | ReadonlyArray<string> | number;
    }

    interface OutputHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string;
        htmlFor?: string;
        name?: string;
    }

    interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string;
        value?: string | ReadonlyArray<string> | number;
    }

    interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
        max?: number | string;
        value?: string | ReadonlyArray<string> | number;
    }

    interface SlotHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string;
    }

    interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
        async?: boolean;
        /** @deprecated */
        charSet?: string;
        crossOrigin?: string;
        defer?: boolean;
        integrity?: string;
        noModule?: boolean;
        nonce?: string;
        referrerPolicy?: HTMLAttributeReferrerPolicy;
        src?: string;
        type?: string;
    }

    interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
        autoComplete?: string;
        autoFocus?: boolean;
        disabled?: boolean;
        form?: string;
        multiple?: boolean;
        name?: string;
        required?: boolean;
        size?: number;
        value?: string | ReadonlyArray<string> | number;
        onChange?: ChangeEventHandler<T>;
    }

    interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
        media?: string;
        sizes?: string;
        src?: string;
        srcSet?: string;
        type?: string;
    }

    interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
        media?: string;
        nonce?: string;
        scoped?: boolean;
        type?: string;
    }

    interface TableHTMLAttributes<T> extends HTMLAttributes<T> {
        cellPadding?: number | string;
        cellSpacing?: number | string;
        summary?: string;
        width?: number | string;
    }

    interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
        autoComplete?: string;
        autoFocus?: boolean;
        cols?: number;
        dirName?: string;
        disabled?: boolean;
        form?: string;
        maxLength?: number;
        minLength?: number;
        name?: string;
        placeholder?: string;
        readOnly?: boolean;
        required?: boolean;
        rows?: number;
        value?: string | ReadonlyArray<string> | number;
        wrap?: string;

        onChange?: ChangeEventHandler<T>;
    }

    interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
        align?: "left" | "center" | "right" | "justify" | "char";
        colSpan?: number;
        headers?: string;
        rowSpan?: number;
        scope?: string;
        abbr?: string;
        height?: number | string;
        width?: number | string;
        valign?: "top" | "middle" | "bottom" | "baseline";
    }

    interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
        align?: "left" | "center" | "right" | "justify" | "char";
        colSpan?: number;
        headers?: string;
        rowSpan?: number;
        scope?: string;
        abbr?: string;
    }

    interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
        dateTime?: string;
    }

    interface TrackHTMLAttributes<T> extends HTMLAttributes<T> {
        default?: boolean;
        kind?: string;
        label?: string;
        src?: string;
        srcLang?: string;
    }

    interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
        height?: number | string;
        playsInline?: boolean;
        poster?: string;
        width?: number | string;
        disablePictureInPicture?: boolean;
        disableRemotePlayback?: boolean;
    }
}

declare global {
    namespace JSX {
        interface Element extends HTMLElement { }
        interface ElementAttributesProperty { props: {}; }
        interface ElementChildrenAttribute { children: {}; }

        interface IntrinsicAttributes extends NativeJSX.Attributes { }
        interface IntrinsicClassAttributes<T> extends NativeJSX.ClassAttributes { }

        interface IntrinsicElements {
            // HTML
            a: NativeJSX.DetailedHTMLProps<NativeJSX.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
            abbr: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            address: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            area: NativeJSX.DetailedHTMLProps<NativeJSX.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
            article: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            aside: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            audio: NativeJSX.DetailedHTMLProps<NativeJSX.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
            b: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            base: NativeJSX.DetailedHTMLProps<NativeJSX.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
            bdi: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            bdo: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            big: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            blockquote: NativeJSX.DetailedHTMLProps<NativeJSX.BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>;
            body: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
            br: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
            button: NativeJSX.DetailedHTMLProps<NativeJSX.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
            canvas: NativeJSX.DetailedHTMLProps<NativeJSX.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
            caption: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            cite: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            code: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            col: NativeJSX.DetailedHTMLProps<NativeJSX.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            colgroup: NativeJSX.DetailedHTMLProps<NativeJSX.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            data: NativeJSX.DetailedHTMLProps<NativeJSX.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>;
            datalist: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
            dd: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            del: NativeJSX.DetailedHTMLProps<NativeJSX.DelHTMLAttributes<HTMLElement>, HTMLElement>;
            details: NativeJSX.DetailedHTMLProps<NativeJSX.DetailsHTMLAttributes<HTMLElement>, HTMLElement>;
            dfn: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            dialog: NativeJSX.DetailedHTMLProps<NativeJSX.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
            div: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
            dl: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
            dt: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            em: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            embed: NativeJSX.DetailedHTMLProps<NativeJSX.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
            fieldset: NativeJSX.DetailedHTMLProps<NativeJSX.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
            figcaption: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            figure: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            footer: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            form: NativeJSX.DetailedHTMLProps<NativeJSX.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
            h1: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h2: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h3: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h4: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h5: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h6: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            head: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>;
            header: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            hgroup: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            hr: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
            html: NativeJSX.DetailedHTMLProps<NativeJSX.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
            i: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            iframe: NativeJSX.DetailedHTMLProps<NativeJSX.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
            img: NativeJSX.DetailedHTMLProps<NativeJSX.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
            input: NativeJSX.DetailedHTMLProps<NativeJSX.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
            ins: NativeJSX.DetailedHTMLProps<NativeJSX.InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
            kbd: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            keygen: NativeJSX.DetailedHTMLProps<NativeJSX.KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
            label: NativeJSX.DetailedHTMLProps<NativeJSX.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
            legend: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
            li: NativeJSX.DetailedHTMLProps<NativeJSX.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
            link: NativeJSX.DetailedHTMLProps<NativeJSX.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
            main: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            map: NativeJSX.DetailedHTMLProps<NativeJSX.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
            mark: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            menu: NativeJSX.DetailedHTMLProps<NativeJSX.MenuHTMLAttributes<HTMLElement>, HTMLElement>;
            menuitem: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            meta: NativeJSX.DetailedHTMLProps<NativeJSX.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
            meter: NativeJSX.DetailedHTMLProps<NativeJSX.MeterHTMLAttributes<HTMLElement>, HTMLElement>;
            nav: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            noindex: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            noscript: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            object: NativeJSX.DetailedHTMLProps<NativeJSX.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
            ol: NativeJSX.DetailedHTMLProps<NativeJSX.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
            optgroup: NativeJSX.DetailedHTMLProps<NativeJSX.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
            option: NativeJSX.DetailedHTMLProps<NativeJSX.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
            output: NativeJSX.DetailedHTMLProps<NativeJSX.OutputHTMLAttributes<HTMLElement>, HTMLElement>;
            p: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
            param: NativeJSX.DetailedHTMLProps<NativeJSX.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
            picture: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            pre: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
            progress: NativeJSX.DetailedHTMLProps<NativeJSX.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
            q: NativeJSX.DetailedHTMLProps<NativeJSX.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
            rp: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            rt: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            ruby: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            s: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            samp: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            slot: NativeJSX.DetailedHTMLProps<NativeJSX.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>;
            script: NativeJSX.DetailedHTMLProps<NativeJSX.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
            section: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            select: NativeJSX.DetailedHTMLProps<NativeJSX.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
            small: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            source: NativeJSX.DetailedHTMLProps<NativeJSX.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
            span: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
            strong: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            style: NativeJSX.DetailedHTMLProps<NativeJSX.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
            sub: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            summary: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            sup: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            table: NativeJSX.DetailedHTMLProps<NativeJSX.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
            template: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>;
            tbody: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            td: NativeJSX.DetailedHTMLProps<NativeJSX.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
            textarea: NativeJSX.DetailedHTMLProps<NativeJSX.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
            tfoot: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            th: NativeJSX.DetailedHTMLProps<NativeJSX.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
            thead: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            time: NativeJSX.DetailedHTMLProps<NativeJSX.TimeHTMLAttributes<HTMLElement>, HTMLElement>;
            title: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
            tr: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
            track: NativeJSX.DetailedHTMLProps<NativeJSX.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
            u: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            ul: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
            "var": NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;
            video: NativeJSX.DetailedHTMLProps<NativeJSX.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
            wbr: NativeJSX.DetailedHTMLProps<NativeJSX.HTMLAttributes<HTMLElement>, HTMLElement>;

        }
    }
}
