declare module 'react-scroll' {
    import * as React from 'react';
  
    export interface LinkProps {
      to: string;
      spy?: boolean;
      smooth?: boolean;
      hashSpy?: boolean;
      offset?: number;
      duration?: number;
      delay?: number;
      isDynamic?: boolean;
      onSetActive?: (to: string) => void;
      onSetInactive?: () => void;
      ignoreCancelEvents?: boolean;
      spyThrottle?: number;
      containerId?: string;
      activeClass?: string;
      className?: string;
      children?: React.ReactNode;
    }
  
    export class Link extends React.Component<LinkProps> {}
  
    export const scroller: {
      scrollTo: (to: string, options: any) => void;
      scrollMore: (to: number, options: any) => void;
    };
  
    export const Events: {
      scrollEvent: {
        register: (evtName: string, callback: Function) => void;
        remove: (evtName: string) => void;
      };
    };
  
    export const animateScroll: {
      scrollToTop: (options?: any) => void;
      scrollToBottom: (options?: any) => void;
      scrollTo: (y: number, options?: any) => void;
      scrollMore: (y: number, options?: any) => void;
    };
  
    export const Element: React.FC<{ name: string; id?: string }>;
  }
  