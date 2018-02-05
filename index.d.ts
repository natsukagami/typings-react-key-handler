import {Component} from 'react';

declare const KEYDOWN: string;
declare const KEYUP: string;
declare const KEYPRESS: string;

declare namespace keyHandler {
  interface KeyboardEventName {
    keyEventName: 'keydown'|'keypress'|'keyup';
  }
  interface KeyboardEventValue extends KeyboardEventName {
    keyValue: string;
  }
  interface KeyboardEventCode extends KeyboardEventName {
    keyCode: number;
  }
  export type KeyboardEvent = KeyboardEventCode|KeyboardEventValue;
  export interface State {
    keyValue: null|string;
    keyCode: null|number;
  }
}

declare function keyHandler<P, S>(keyboardEvent: keyHandler.KeyboardEvent):
    (comp: Component<P&keyHandler.State, S>) => Component<P, keyHandler.State>;

declare function keyToggleHandler<P, S>(
    keyboardEvent: keyHandler.KeyboardEvent):
    (comp: Component<P&keyHandler.State, S>) => Component<P, keyHandler.State>;

declare namespace KeyHandler {
  export type Props = keyHandler.KeyboardEvent&{
    onKeyHandle?: (event: KeyboardEvent) => void;
  }
}

declare class KeyHandler extends Component<KeyHandler.Props> {}

export default KeyHandler;

export {keyHandler, keyToggleHandler, KEYUP, KEYDOWN, KEYPRESS};