import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

// Fix for estree and json-schema errors
declare module 'estree' {}
declare module 'json-schema' {} 