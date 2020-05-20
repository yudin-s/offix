(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{276:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),i=n(11),o=(n(0),n(288)),a={id:"client-configuration",title:"Client Configuration",sidebar_label:"Client Configuration"},c={id:"version-0.9.0/client-configuration",title:"Client Configuration",description:"The `OfflineClient(options)` constructor takes a number of configuration options.",source:"@site/versioned_docs/version-0.9.0/ref-configuration.md",permalink:"/docs/0.9.0/client-configuration",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.9.0/ref-configuration.md",version:"0.9.0",sidebar_label:"Client Configuration",sidebar:"version-0.9.0/docs",previous:{title:"Getting Started",permalink:"/docs/0.9.0/getting-started"},next:{title:"Offline Support",permalink:"/docs/0.9.0/offline-client"}},l=[],s={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"OfflineClient(options)")," constructor takes a number of configuration options."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"httpUrl")," -  URL of the HTTP server that will be used to create a default HTTP link. Ignored if ",Object(o.b)("inlineCode",{parentName:"li"},"terminatingLink")," is passed."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"terminatingLink")," -  ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.apollographql.com/docs/link/"}),"ApolloLink")," that will be used to create the client. Used for more advanced configurations such as enabling subscriptions."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"storage")," - The ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/aerogear/offix/blob/master/packages/offix-offline/src/offline/storage/PersistentStore.ts"}),"PersistentStore")," you want your client to use (Uses indexeddb by default)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"cache")," The Apollo ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.apollographql.com/docs/react/caching/cache-configuration/"}),"InMemoryCache")," that will be used. (creates one by default)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"networkStatus")," ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/aerogear/offix/blob/master/packages/offix-offline/src/offline/network/NetworkStatus.ts"}),"NetworkStatus")," Interface for detecting changes in network status."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"offlineQueueListener")," ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.9.0/offline-client#listening-for-events"}),"ApolloOfflineQueueListener")," User provided listener that contains a set of methods that are called when certain events occur in the queue."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"conflictProvider")," ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.9.0/conflict-server#implementing-custom-conflict-resolution"}),"ObjectState")," Interface that defines how object state is progressed. This interface needs to match state provider supplied on server."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mutationCacheUpdates")," ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.9.0/offline-client#global-update-functions"}),"CacheUpdates")," Cache updates functions for your mutations. Argument allows to restore optimistic responses on application restarts."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"retryOptions")," The options to configure how failed offline mutations are retried. See ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.apollographql.com/docs/link/links/retry/"}),Object(o.b)("inlineCode",{parentName:"a"},"apollo-link-retry")),".")))}p.isMDXComponent=!0},288:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,d=u["".concat(a,".").concat(b)]||u[b]||f[b]||o;return n?i.a.createElement(d,c({ref:t},s,{components:n})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);