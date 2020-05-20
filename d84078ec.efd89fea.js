(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{274:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var i=n(1),a=n(11),o=(n(0),n(288)),r={id:"offix-cache",title:"Offix Cache",sidebar_label:"Client Cache"},c={id:"version-0.8.2/offix-cache",title:"Offix Cache",description:"The offix-cache package helps developers to manage some of their client's state such as cache, optimistic responses and subscriptions.",source:"@site/versioned_docs/version-0.8.2/ref-cache.md",permalink:"/docs/0.8.2/offix-cache",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.8.2/ref-cache.md",version:"0.8.2",sidebar_label:"Client Cache",sidebar:"version-0.8.2/docs",previous:{title:"Offline Support",permalink:"/docs/0.8.2/offline-client"},next:{title:"Client Side Conflict Resolution",permalink:"/docs/0.8.2/conflict-client"}},s=[{value:"Optimistic UI",id:"optimistic-ui",children:[]},{value:"Mutation Cache Helpers",id:"mutation-cache-helpers",children:[]},{value:"Subscription Helpers",id:"subscription-helpers",children:[{value:"Multiple Subscriptions",id:"multiple-subscriptions",children:[]}]}],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The offix-cache package helps developers to manage some of their client's state such as cache, optimistic responses and subscriptions."),Object(o.b)("h2",{id:"optimistic-ui"},"Optimistic UI"),Object(o.b)("p",null,"In Apollo Client, mutation results are not applied to the UI until responses are received from the server. To provide a better user experience, an application may want to update the UI immediately. ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-mutation-options-optimisticResponse",title:"Optimistic Responses"}),"Optimistic Responses")," are an easy to way to achieve this goal. However, creating individual optimistic responses for each mutation in your application can introduce boilerplate code. offix-cache can automatically create optimistic responses for you to reduce this boilerplate."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"createOptimisticResponse")," function returns an object which can be passed directly to Apollo Client's mutate function. ",Object(o.b)("inlineCode",{parentName:"p"},"createOptimisticResponse")," will help to build expected response object from input arguments.\nif your mutation returns different values you will still need to build it manually."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),'import { createOptimisticResponse } from "offix-cache";\n\nconst optimisticResponse = createOptimisticResponse({\n  mutation: ADD_TASK,\n  variables: { some_key: "some_value"},\n  operationType: "add",\n  returnType: "Task",\n  idField: "id"\n})\n\napolloClient.mutate({\n  mutation: ADD_TASK,\n  optimisticResponse: optimisticResponse\n})\n')),Object(o.b)("h2",{id:"mutation-cache-helpers"},"Mutation Cache Helpers"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"offix-cache")," provides a mechanism to automatically update the client cache based on the result returned by a mutation. The ",Object(o.b)("inlineCode",{parentName:"p"},"createMutationOptions")," function returns a ",Object(o.b)("inlineCode",{parentName:"p"},"MutationOptions")," object compatible with Apollo Client's mutate."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"const { createMutationOptions, CacheOperation } = require('offix-cache');\n\nconst mutationOptions = {\n  mutation: ADD_TASK,\n  variables: {\n    title: 'item title'\n  },\n  updateQuery: {\n    query: GET_TASKS,\n    variables: {\n      filterBy: 'some filter'\n    }\n  },\n  returnType: 'Task',\n  operationType: CacheOperation.ADD,\n  idField: 'id'\n};\n")),Object(o.b)("p",null,"We can also provide more than one query to update in the cache by providing an array to the ",Object(o.b)("inlineCode",{parentName:"p"},"updateQuery")," parameter:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"const mutationOptions = {\n  ...\n  updateQuery: [\n    { query: GET_TASKS, variables: {} }\n  ],\n  ...\n};\n")),Object(o.b)("p",null,"Where ",Object(o.b)("inlineCode",{parentName:"p"},"mutationOptions")," is either of the two objects shown above, we can then pass this object to our mutate function."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"const options = createMutationOptions(mutationOptions);\n\napolloClient.mutate(options);\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"NOTE: Cache helpers currently support only GraphQL Queries that return arrays.\nFor example ",Object(o.b)("inlineCode",{parentName:"p"},"getUsers():[User]"),".\nWhen working with single objects returned by Queries we usually do not need use any helper as Query will be updated automatically on every update")),Object(o.b)("h2",{id:"subscription-helpers"},"Subscription Helpers"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"offix-cache")," provides a subscription cache update method helper which can generate the necessary options to be used with Apollo Client's ",Object(o.b)("inlineCode",{parentName:"p"},"subscribeToMore")," function."),Object(o.b)("p",null,"To use this helper, we first need to create some options. These options should take the folowing form:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"const { CacheOperation } = require('offix-cache');\n\nconst options = {\n  subscriptionQuery: TASK_ADDED_SUBSCRIPTION,\n  cacheUpdateQuery: GET_TASKS,\n  operationType: CacheOperation.ADD\n}\n")),Object(o.b)("p",null,"This options object will be used to inform the subscription helper that for every data object received because of the ",Object(o.b)("inlineCode",{parentName:"p"},"TASK_ADDED_SUBSCRIPTION")," the ",Object(o.b)("inlineCode",{parentName:"p"},"GET_TASKS")," query should also be kept up to date in the cache."),Object(o.b)("p",null,"We can then create the required cache update functions in the following way:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"const { createSubscriptionOptions } = require('offix-cache');\n\nconst subscriptionOptions = createSubscriptionOptions(options);\n")),Object(o.b)("p",null,"To use this helper we then pass this ",Object(o.b)("inlineCode",{parentName:"p"},"subscriptionOptions")," variable to the ",Object(o.b)("inlineCode",{parentName:"p"},"subscribeToMore")," function of our ",Object(o.b)("inlineCode",{parentName:"p"},"ObservableQuery"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"const query = apolloClient.watchQuery<AllTasks>({\n  query: GET_TASKS\n});\n\nquery.subscribeToMore(subscriptionOptions);\n")),Object(o.b)("p",null,"The cache will now be kept up to date with automatic data deduplication being performed."),Object(o.b)("h3",{id:"multiple-subscriptions"},"Multiple Subscriptions"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"offix-cache")," also provides the ability to automatically call ",Object(o.b)("inlineCode",{parentName:"p"},"subscribeToMore")," on your ",Object(o.b)("inlineCode",{parentName:"p"},"ObservableQuery"),". This can be useful in a situation where you may have multiple subscriptions which can affect one single query. For example, if you have a ",Object(o.b)("inlineCode",{parentName:"p"},"TaskAdded"),", ",Object(o.b)("inlineCode",{parentName:"p"},"TaskDeleted")," and a ",Object(o.b)("inlineCode",{parentName:"p"},"TaskUpdated")," subscription you would need three separate ",Object(o.b)("inlineCode",{parentName:"p"},"subscribeToMore")," function calls. This can become tedious as your number of subscriptions grow. To combat this, we can use the ",Object(o.b)("inlineCode",{parentName:"p"},"subscribeToMoreHelper")," function from offix-cache to automatically handle this for us by passing it an array of subscriptions and their corresponding queries which need to be updated."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"const { CacheOperation } = require('offix-cache');\n\nconst addOptions = {\n  subscriptionQuery: TASK_ADDED_SUBSCRIPTION,\n  cacheUpdateQuery: GET_TASKS,\n  operationType: CacheOperation.ADD\n}\n\nconst deleteOptions = {\n  subscriptionQuery: TASK_DELETED_SUBSCRIPTION,\n  cacheUpdateQuery: GET_TASKS,\n  operationType: CacheOperation.DELETE\n}\n\nconst updateOptions = {\n  subscriptionQuery: TASK_UPDATED_SUBSCRIPTION,\n  cacheUpdateQuery: GET_TASKS,\n  operationType: CacheOperation.REFRESH\n}\n\nconst query = client.watchQuery<AllTasks>({\n  query: GET_TASKS\n});\n\nsubscribeToMoreHelper(query, [addOptions, deleteOptions, updateOptions]);\n")))}l.isMDXComponent=!0},288:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,h=u["".concat(r,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(h,c({ref:t},p,{components:n})):a.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var p=2;p<o;p++)r[p]=n[p];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);