# svueactle

combo of svelte, vue, react, angular.

## react

 - binding: all in js
   - with react, user edit html in js with `jsx` format. thus attrs or text can be easily coded with js
   - jsxed html then render with `ReactDOM.render`.
 - component
   - custom element also in js with func / class, called components.
   - keep internal data / custom function directly under `this`.
   - use directly with jsx syntax like `<MyComp/>`
 - state 
   - all component functions should be pure. keep state in `this.state`. update state with `setState`.
   - `setState` may be asynchronous.
 - lifecycle
   - like vue, things like `componentDidMount` or `componentWillUnmount` 


## vue (v2)

similar to AngularJS.

 - binding: use attributes
   - use `v-*` attributes (directives) to connect js with html.
     - like `bind`, `on`, `for`, `if`, `model`
   - vueing whole DOM tree with `new Vue` ( similar to ldView )
 - component
   - by `Vue.component(name, { props, template ... })
   - use directly with `<name>`.
 - state: through design pattern
   - kept in `data` ( new Vue({data}) )
   - store pattern: https://vuejs.org/v2/guide/state-management.html
 - lifecycle
   - like react, `beforeCreate` `created` `beforeMount` `mounted` `beforeUpdate`  ... etc


## ldView

 - binding: bind tag to function by `ld` attribute
   - no 2way binding, no logic control.
   - ? can we replace `ld-each` with `ld`?
   - discuss
     - pro
       - abstract logic ( unlike vue )
       - separate ui / ctrl ( unlike react )
     - cons
       - more code to write.
         - ? except `text`, `handler`, `init`, we can add more options like `style`, `attr`, `show`, `bind`, etc
       - hard to maintain without proper documentation about ld names.
 - component: N/A
   - ldView doesn't care about component. we will need additional design to wrap ldView.
   - ? we need to consider: create a component + use a component. ( through `@plotdb/block` ? )
     - `@plotdb/block` doesn't use ldView. this is good because we actually separate component design from view lib.
 - state: N/A
   - data from `data or `context`. ( `new ldView({context})` )
   - ? always manage state outside ldView. e.g., use `datahub`, `datadom` with `json0`.

